import { OpenAPIV3 } from 'openapi-types'
import { IAgent, IAgentPluginSchema } from '@veramo/core-types'

const getInteropApiPathItem = (method: string, agentSchema: IAgentPluginSchema): {path: string, pathItem: OpenAPIV3.PathItemObject} => {
  switch(method) {
    // case "keyManagerGetKeyManagementSystems":
    //   return "/key_management_systems";
    // case "keyManagerCreate":
    //   return "/key_management_systems";
    // case "keyManagerGet":
    //   return "/key_management_systems/{kid}";
    // case "keyManagerDelete":
    //   return "/key_management_systems/{kid}";
    // case "keyManagerImport":
    //   return "/key_management_systems/import";
    // case "keyManagerEncryptJWE":
    //   return "/key_management_systems/{kid}/encrypt/jwe";
    // case "keyManagerDecryptJWE":
    //   return "/key_management_systems/{kid}/decrypt/jwe";
    // case "keyManagerSign":
    //   return "/key_management_systems/{kid}/sign";
    // case "keyManagerSharedSecret":
    //   return "/key_management_systems/{kid}/shared_secret";
    // case "keyManagerSignJWT":
    //   return "/key_management_systems/{kid}/sign/jwt";
    // case "keyManagerSignEthTX":
    //   return "/key_management_systems/{kid}/sign/eth_tx";
    // case "didManagerGetProviders":
    //   return "/did/providers";
    // case "didManagerFind":
    //   return "/did/find";
    case "resolveDid":
      return {
        path: 'identifiers/{did}',
        pathItem: {
          get: {
                summary: "Resolve",
                operationId: method,
                description: agentSchema.components.methods[method].description,
                // security: [
                //   {
                //     "OAuth2": [
                //       "resolve:dids"
                //     ]
                //   }
                // ],
                tags: [
                  "Identifiers"
                ],
                parameters: [
                  {
                    name: "did",
                    in: "path",
                    required: true,
                    description: "A decentralized identifier",
                    schema: {
                      type: "string"
                    },
                    example: "did:web:vckit-holder-demo.herokuapp.com"
                  }
                ],
                responses: {
                  200: {
                    // TODO returnType description
                    description: agentSchema.components.methods[method].description,
                    content: {
                      'application/json; charset=utf-8': {
                        schema: agentSchema.components.methods[method].returnType,
                      },
                    },
                  },
                  400: {
                    description: 'Validation error',
                    content: {
                      'application/json; charset=utf-8': {
                        schema: agentSchema.components.schemas.ValidationError,
                      },
                    },
                  },
                },
              },
          
        }
      }
    // case "didManagerGetByAlias":
    //   return "/did/alias/{alias}";
    // case "d":
    //   return "/did/create";
    // case "didManagerGetOrCreate":
    //   return "/did/create_or_get";
    // case "didManagerImport":
    //   return "/did/import";
    // case "didManagerDelete":
    //   return "/did/{did}";
    // case "didManagerAddKey":
    //   return "/did/{did}/add_key";
    // case "didManagerRemoveKey":
    //   return "/did/{did}/remove_key/{kid}";
    // case "didManagerAddService":
    //   return "/did/{did}/add_service";
    // case "didManagerRemoveService":
    //   return "/did/{did}/remove_service/{id}";
    // case "resolveDid":
    //   return "/did/resolve/{did}";
    // case "getDIDComponentById":
    //   return "/did/{did}/{component}";
    // case "discoverDid":
    //   return "/did/discover";
    // case "dataStoreGetMessage":
    //   return "/data_store/messages/{id}";
    // case "dataStoreSaveMessage":
    //   return "/data_store/messages";
    // case "dataStoreGetVerifiableCredential":
    //   return "/data_store/verifiable_credentials/{id}";
    // case "dataStoreSaveVerifiableCredential":
    //   return "/data_store/verifiable_credentials";
    // case "dataStoreGetVerifiablePresentation":
    //   return "/data_store/verifiable_presentations/{id}";
    // case "dataStoreSaveVerifiablePresentation":
    //   return "/data_store/verifiable_presentations";
    // case "dataStoreORMGetIdentifiers":
    //   return "/data_store/orm/identifiers";
    // case "dataStoreORMGetIdentifiersCount":
    //   return "/data_store/orm/identifiers/count";
    // case "dataStoreORMGetMessages":
    //   return "/data_store/orm/messages";
    // case "dataStoreORMGetMessagesCount":
    //   return "/data_store/orm/messages/count";
    // case "dataStoreORMGetVerifiableCredentialsByClaims":
    //   return "/data_store/orm/verifiable_credentials/by_claims";
    // case "dataStoreORMGetVerifiableCredentialsByClaimsCount":
    //   return "/data_store/orm/verifiable_credentials/by_claims/count";
    case "dataStoreORMGetVerifiableCredentials":
      return {
        path: 'credentials',
        pathItem: {
          get: {
                summary: "List credentials",
                operationId: method,
                description: agentSchema.components.methods[method].description,
                // security: [
                //   {
                //     "OAuth2": [
                //       "resolve:dids"
                //     ]
                //   }
                // ],
                tags: [
                  "Credentials"
                ],
                responses: {
                  200: {
                    // TODO returnType description
                    description: agentSchema.components.methods[method].description,
                    content: {
                      'application/json; charset=utf-8': {
                        schema: agentSchema.components.methods[method].returnType,
                      },
                    },
                  },
                  400: {
                    description: 'Validation error',
                    content: {
                      'application/json; charset=utf-8': {
                        schema: agentSchema.components.schemas.ValidationError,
                      },
                    },
                  },
                },
              },
          
        }
      }
    //   return "/data_store/orm/verifiable";  
    // case 'dataStoreORMGetVerifiableCredentialsCount':
    //   return '/datastore/verifiable-credentials/count';
    // case 'dataStoreORMGetVerifiablePresentations':
    //   return '/datastore/verifiable-presentations';
    // case 'dataStoreORMGetVerifiablePresentationsCount':
    //   return '/datastore/verifiable-presentations/count';
    // case 'handleMessage':
    //   return '/message/handle';
    // case 'packDIDCommMessage':
    //   return '/message/pack';
    // case 'unpackDIDCommMessage':
    //   return '/message/unpack';
    // case 'sendDIDCommMessage':
    //   return '/message/send';
    // case 'sendMessageDIDCommAlpha1':
    //   return '/message/send-didcomm-alpha1';
    case 'createVerifiableCredential':
      return {
        path: 'credentials/issue',
        pathItem: {
          post: {
                summary: "Create",
                operationId: method,
                description: agentSchema.components.methods[method].description,
                tags: [
                  "Credentials"
                ],
                // security: [
                //   {
                //     OAuth2: [
                //       "issue:credentials"
                //     ]
                //   }
                // ],
                requestBody: {
                  description: "Parameters for issuing the credential.",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        required: [
                          "credential",
                          "options"
                        ],
                        properties: {
                          credential: {
                            type: "object",
                            required: [
                              "@context",
                              "type",
                              "issuer",
                              "issuanceDate",
                              "credentialSubject"
                            ],
                            properties: {
                              "@context": {
                                description: "The JSON-LD Context defining all terms in the Credential. This array\nSHOULD contain \"https://w3id.org/traceability/v1\".\n",
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              },
                              id: {
                                description: "The IRI identifying the Credential",
                                type: "string"
                              },
                              type: {
                                description: "The Type of the Credential",
                                type: "array",
                                items: {
                                  type: "string"
                                },
                                minItems: 1
                              },
                              issuer: {
                                description: "This value MUST match the assertionMethod used to create the Verifiable Credential.",
                                oneOf: [
                                  {
                                    type: "string"
                                  },
                                  {
                                    type: "object",
                                    required: [
                                      "id"
                                    ],
                                    properties: {
                                      id: {
                                        description: "The IRI identifying the Issuer",
                                        type: "string"
                                      }
                                    }
                                  }
                                ]
                              },
                              issuanceDate: {
                                description: "This value MUST be an XML Date Time String",
                                type: "string"
                              },
                              credentialSubject: {
                                type: "object",
                                properties: {
                                  id: {
                                    description: "The IRI identifying the Subject",
                                    type: "string"
                                  }
                                }
                              }
                            },
                            example: {
                              "@context": [
                                "https://www.w3.org/2018/credentials/v1",
                                "https://w3id.org/traceability/v1"
                              ],
                              id: "urn:uuid:07aa969e-b40d-4c1b-ab46-ded252003ded",
                              type: [
                                "VerifiableCredential"
                              ],
                              issuer: "did:key:z6MktiSzqF9kqwdU8VkdBKx56EYzXfpgnNPUAGznpicNiWfn",
                              issuanceDate: "2010-01-01T19:23:24Z",
                              credentialSubject: {
                                id: "did:key:z6MktiSzqF9kqwdU8VkdBKx56EYzXfpgnNPUAGznpicNiWfn"
                              }
                            }
                          },
                          options: {
                            title: "Issue Credential Options",
                            type: "object",
                            description: "Options for issuing a verifiable credential",
                            required: [
                              "type"
                            ],
                            properties: {
                              type: {
                                type: "string",
                                description: "Linked Data Signature Suite or signal to use JWT.",
                                enum: [
                                  "Ed25519Signature2018",
                                  // "JsonWebSignature2020",
                                  "jwt_vc",
                                  "OpenAttestationMerkleProofSignature2018"
                                ]
                              },
                              created: {
                                type: "string",
                                description: "Date the proof was created. This value MUST be an XML Date Time String."
                              },
                              credentialStatus: {
                                type: "object",
                                description: "The method of credential status.",
                                required: [
                                  "type"
                                ],
                                properties: {
                                  type: {
                                    type: "string",
                                    description: "The type of credential status.",
                                    enum: [
                                      "RevocationList2020Status"
                                    ]
                                  }
                                }
                              }
                            },
                            example: {
                              type: "JsonWebSignature2020",
                              created: "2020-04-02T18:28:08Z",
                              credentialStatus: {
                                type: "RevocationList2020Status"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                responses: {
                  200: {
                    // TODO returnType description
                    description: agentSchema.components.methods[method].description,
                    content: {
                      'application/json; charset=utf-8': {
                        schema: agentSchema.components.methods[method].returnType,
                      },
                    },
                  },
                  400: {
                    description: 'Validation error',
                    content: {
                      'application/json; charset=utf-8': {
                        schema: agentSchema.components.schemas.ValidationError,
                      },
                    },
                  },
                },
              },
        }
      }
    // case 'createVerifiablePresentation':
    //   return '/verifiable-presentation/create';
    // case 'verifyCredential':
    //   return '/verifiable-credential/verify';
    // case 'verifyPresentation':
    //   return '/verifiable-presentation/verify';
    // case 'createSelectiveDisclosureRequest':
    //   return '/verifiable-presentation/create-selective-disclosure-request';
    // case 'getVerifiableCredentialsForSdr':
    //   return '/verifiable-credential/get-for-selective-disclosure';
    // case 'validatePresentationAgainstSdr':
    //   return '/verifiable-presentation/validate-against-selective-disclosure-request';      
    default:
      return {path:'', pathItem:{}}
  }
}


/**
 * This method can be used to generate an OpenAPIv3 schema to describe how the methods of a Veramo agent can be called
 * remotely.
 *
 * @param agent - The agent whose schema needs to be interpreted.
 * @param basePath - The base URL
 * @param exposedMethods - The list of method names available through this schema
 * @param name - The name of the agent
 * @param version - The version of the agent
 *
 * @public
 */
export const getOpenApiSchema = (
  agent: IAgent,
  basePath: string,
  exposedMethods: Array<string>,
  name?: string,
  version?: string,
): OpenAPIV3.Document => {
  const agentSchema = agent.getSchema()

  const paths: OpenAPIV3.PathsObject = {}

  const schemas = {}
  const xMethods: Record<string, any> = {}
  
  for (const method of exposedMethods) {
    let pathItemObject: OpenAPIV3.PathItemObject;
    const resource = getInteropApiPathItem(method, agentSchema);
    if (['didManagerCreate'].includes(method)){
      pathItemObject = {
      post: {
        operationId: method,
        description: agentSchema.components.methods[method].description,
        requestBody: {
          content: {
            'application/json': {
              schema: agentSchema.components.methods[method].arguments,
            },
          },
        },
        responses: {
          200: {
            // TODO returnType description
            description: agentSchema.components.methods[method].description,
            content: {
              'application/json; charset=utf-8': {
                schema: agentSchema.components.methods[method].returnType,
              },
            },
          },
          400: {
            description: 'Validation error',
            content: {
              'application/json; charset=utf-8': {
                schema: agentSchema.components.schemas.ValidationError,
              },
            },
          },
        },
      },
    } 
    paths[basePath + '/' + method] = pathItemObject
    xMethods[method] = agentSchema.components.methods[method]
    } else {
      const resource = getInteropApiPathItem(method, agentSchema);
      pathItemObject = resource.pathItem;
      paths[basePath + '/' + resource.path] = pathItemObject
      xMethods[method] = agentSchema.components.methods[method]
    }
    
    // const pathItemObject: OpenAPIV3.PathItemObject = {
    //   post: {
    //     operationId: method,
    //     description: agentSchema.components.methods[method].description,
    //     requestBody: {
    //       content: {
    //         'application/json': {
    //           schema: agentSchema.components.methods[method].arguments,
    //         },
    //       },
    //     },
    //     responses: {
    //       200: {
    //         // TODO returnType description
    //         description: agentSchema.components.methods[method].description,
    //         content: {
    //           'application/json; charset=utf-8': {
    //             schema: agentSchema.components.methods[method].returnType,
    //           },
    //         },
    //       },
    //       400: {
    //         description: 'Validation error',
    //         content: {
    //           'application/json; charset=utf-8': {
    //             schema: agentSchema.components.schemas.ValidationError,
    //           },
    //         },
    //       },
    //     },
    //   },
    // }
    
  }

  const openApi: OpenAPIV3.Document & { 'x-methods'?: Record<string, any> } = {
    openapi: '3.0.0',
    info: {
      title: name || 'DID Agent',
      version: version || '',
    },
    security: [{ "auth": [] }],
    components: {
      schemas: agent.getSchema().components.schemas,
      securitySchemes: { auth: { type: "http", scheme: "bearer" } }
    },
    tags: [
      {
        name: "Discovery"
      },
      {
        name: "Identifiers"
      },
      {
        name: "Credentials"
      },
      {
        name: "Presentations"
      }
    ],
    paths,
  }

  openApi['x-methods'] = xMethods

  return openApi
}
