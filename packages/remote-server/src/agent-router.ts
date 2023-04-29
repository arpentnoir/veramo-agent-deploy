import { IAgent } from '@veramo/core-types'
import { Request, Response, NextFunction, Router, json } from 'express'
import Debug from 'debug'

interface RequestWithAgent extends Request {
  agent?: IAgent
}

interface ResolveDidQuery {
  did: string
}
/**
 * @public
 */
export interface AgentRouterOptions {
  /**
   * List of exposed methods
   */
  exposedMethods: Array<string>
}

/**
 * Creates a router that exposes {@link @veramo/core#Agent} methods remotely.
 *
 * This can be used by {@link @veramo/remote-client#AgentRestClient | AgentRestClient} to instantiate the methods of
 * this agent on the client.
 *
 * @param options - Initialization option
 * @returns Expressjs router
 *
 * @public
 */
export const AgentRouter = (options: AgentRouterOptions): Router => {
  const router = Router()
  router.use(json({ limit: '10mb' }))

  for (const exposedMethod of options.exposedMethods) {
    Debug('veramo:remote-server:initializing')(exposedMethod)

    router.get('/identifiers/:did', async (req: RequestWithAgent, res: Response, next: NextFunction) => {
      if (!req.agent) throw Error('Agent not available')
      try {
        const encodedDid = req.params.did as string;
        const didUrl = decodeURI(encodedDid)
        const result = await req.agent.execute('resolveDid', {didUrl: encodedDid})
        res.status(200).json(result)
      } catch (e: any) {
        if (e.name === 'ValidationError') {
          res.status(400).json({
            name: 'ValidationError',
            message: e.message,
            method: e.method,
            path: e.path,
            code: e.code,
            description: e.description,
          })
        } else {
          res.status(500).json({ error: e.message })
        }
      }
    }),
    router.get('/credentials', async (req: RequestWithAgent, res: Response, next: NextFunction) => {
      if (!req.agent) throw Error('Agent not available')
      try {
        const result = await req.agent.execute('dataStoreORMGetVerifiableCredentials', {})
        res.status(200).json(result)
      } catch (e: any) {
        if (e.name === 'ValidationError') {
          res.status(400).json({
            name: 'ValidationError',
            message: e.message,
            method: e.method,
            path: e.path,
            code: e.code,
            description: e.description,
          })
        } else {
          res.status(500).json({ error: e.message })
        }
      }
    }),
    router.post('/credentials/issue', async (req: RequestWithAgent, res: Response, next: NextFunction) => {
      if (!req.agent) throw Error('Agent not available')
      try {
        const request = req.body;
        const credential = request.credential;
        const options = request.options;
        const type = options.type;
        const proofFormat = ((type: string) => {
          switch (type){
            case 'Ed25519Signature2018':
              return 'lds';
            case 'jwt_vc':
              return 'jwt';
            case 'OpenAttestationMerkleProofSignature2018':
              return 'oa'
            default:
              return 'lds';
          }
        })(type); 
        const args = {
          credential,
          fetchRemoteContexts: true,
          save: options.save || false,
          proofFormat
        }
        const result = await req.agent.execute('createVerifiableCredential', args)
        res.status(200).json(result)
      } catch (e: any) {
        if (e.name === 'ValidationError') {
          res.status(400).json({
            name: 'ValidationError',
            message: e.message,
            method: e.method,
            path: e.path,
            code: e.code,
            description: e.description,
          })
        } else {
          res.status(500).json({ error: e.message })
        }
      }
    }),
    router.post('/' + exposedMethod, async (req: RequestWithAgent, res: Response, next: NextFunction) => {
      if (!req.agent) throw Error('Agent not available')
      try {
        const result = await req.agent.execute(exposedMethod, req.body)
        res.status(200).json(result)
      } catch (e: any) {
        if (e.name === 'ValidationError') {
          res.status(400).json({
            name: 'ValidationError',
            message: e.message,
            method: e.method,
            path: e.path,
            code: e.code,
            description: e.description,
          })
        } else {
          res.status(500).json({ error: e.message })
        }
      }
    }),
    router.post('/' + exposedMethod, async (req: RequestWithAgent, res: Response, next: NextFunction) => {
      if (!req.agent) throw Error('Agent not available')
      try {
        const result = await req.agent.execute(exposedMethod, req.body)
        res.status(200).json(result)
      } catch (e: any) {
        if (e.name === 'ValidationError') {
          res.status(400).json({
            name: 'ValidationError',
            message: e.message,
            method: e.method,
            path: e.path,
            code: e.code,
            description: e.description,
          })
        } else {
          res.status(500).json({ error: e.message })
        }
      }
    })
  }

  return router
}
