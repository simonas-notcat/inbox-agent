module.exports.schema = {
  "components": {
    "schemas": {
      "IDIDManagerAddKeyArgs": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "DID"
          },
          "key": {
            "$ref": "#/components/schemas/IKey",
            "description": "Key object"
          },
          "options": {
            "type": "object",
            "description": "Optional. Identifier provider specific options"
          }
        },
        "required": [
          "did",
          "key"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerAddKey | didManagerAddKey}"
      },
      "IDIDManagerAddServiceArgs": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "DID"
          },
          "service": {
            "$ref": "#/components/schemas/IService",
            "description": "Service object"
          },
          "options": {
            "type": "object",
            "description": "Optional. Identifier provider specific options"
          }
        },
        "required": [
          "did",
          "service"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerAddService | didManagerAddService}"
      },
      "IService": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "ID"
          },
          "type": {
            "type": "string",
            "description": "Service type"
          },
          "serviceEndpoint": {
            "type": "string",
            "description": "Endpoint URL"
          },
          "description": {
            "type": "string",
            "description": "Optional. Description"
          }
        },
        "required": [
          "id",
          "type",
          "serviceEndpoint"
        ],
        "description": "Identifier service"
      },
      "IDIDManagerCreateArgs": {
        "type": "object",
        "properties": {
          "alias": {
            "type": "string",
            "description": "Optional. Identifier alias. Can be used to reference an object in an external system"
          },
          "provider": {
            "type": "string",
            "description": "Optional. Identifier provider"
          },
          "kms": {
            "type": "string",
            "description": "Optional. Key Management System"
          },
          "options": {
            "type": "object",
            "description": "Optional. Identifier provider specific options"
          }
        },
        "description": "Input arguments for {@link IDIDManager.didManagerCreate | didManagerCreate}"
      },
      "IIdentifier": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "Decentralized identifier"
          },
          "alias": {
            "type": "string",
            "description": "Optional. Identifier alias. Can be used to reference an object in an external system"
          },
          "provider": {
            "type": "string",
            "description": "Identifier provider name"
          },
          "controllerKeyId": {
            "type": "string",
            "description": "Controller key id"
          },
          "keys": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/IKey"
            },
            "description": "Array of managed keys"
          },
          "services": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/IService"
            },
            "description": "Array of services"
          }
        },
        "required": [
          "did",
          "provider",
          "keys",
          "services"
        ],
        "description": "Identifier interface"
      },
      "IDIDManagerDeleteArgs": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "DID"
          }
        },
        "required": [
          "did"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerDelete | didManagerDelete}"
      },
      "IDIDManagerFindArgs": {
        "type": "object",
        "properties": {
          "alias": {
            "type": "string",
            "description": "Optional. Alias"
          },
          "provider": {
            "type": "string",
            "description": "Optional. Provider"
          }
        },
        "description": "Input arguments for {@link IDIDManager.didManagerFind | didManagerFind}"
      },
      "IDIDManagerGetArgs": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "DID"
          }
        },
        "required": [
          "did"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerGet | didManagerGet}"
      },
      "IDIDManagerGetByAliasArgs": {
        "type": "object",
        "properties": {
          "alias": {
            "type": "string",
            "description": "Alias"
          },
          "provider": {
            "type": "string",
            "description": "Optional provider"
          }
        },
        "required": [
          "alias"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerGetByAlias | didManagerGetByAlias}"
      },
      "IDIDManagerGetOrCreateArgs": {
        "type": "object",
        "properties": {
          "alias": {
            "type": "string",
            "description": "Identifier alias. Can be used to reference an object in an external system"
          },
          "provider": {
            "type": "string",
            "description": "Optional. Identifier provider"
          },
          "kms": {
            "type": "string",
            "description": "Optional. Key Management System"
          },
          "options": {
            "type": "object",
            "description": "Optional. Identifier provider specific options"
          }
        },
        "required": [
          "alias"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerGetOrCreate | didManagerGetOrCreate}"
      },
      "IDIDManagerRemoveKeyArgs": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "DID"
          },
          "kid": {
            "type": "string",
            "description": "Key ID"
          },
          "options": {
            "type": "object",
            "description": "Optional. Identifier provider specific options"
          }
        },
        "required": [
          "did",
          "kid"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerRemoveKey | didManagerRemoveKey}"
      },
      "IDIDManagerRemoveServiceArgs": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "DID"
          },
          "id": {
            "type": "string",
            "description": "Service ID"
          },
          "options": {
            "type": "object",
            "description": "Optional. Identifier provider specific options"
          }
        },
        "required": [
          "did",
          "id"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerRemoveService | didManagerRemoveService}"
      },
      "IDIDManagerSetAliasArgs": {
        "type": "object",
        "properties": {
          "did": {
            "type": "string",
            "description": "Required. DID"
          },
          "alias": {
            "type": "string",
            "description": "Required. Identifier alias"
          }
        },
        "required": [
          "did",
          "alias"
        ],
        "description": "Input arguments for {@link IDIDManager.didManagerSetAlias | didManagerSetAlias}"
      },
      "IKeyManagerCreateArgs": {
        "type": "object",
        "properties": {
          "type": {
            "$ref": "#/components/schemas/TKeyType",
            "description": "Key type"
          },
          "kms": {
            "type": "string",
            "description": "Key Management System"
          },
          "meta": {
            "type": "object",
            "description": "Optional. Key meta data"
          }
        },
        "required": [
          "type",
          "kms"
        ],
        "description": "Input arguments for {@link IKeyManager.keyManagerCreate | keyManagerCreate}"
      },
      "TKeyType": {
        "type": "string",
        "enum": [
          "Ed25519",
          "Secp256k1"
        ],
        "description": "Cryptographic key type"
      },
      "IKey": {
        "type": "object",
        "properties": {
          "kid": {
            "type": "string",
            "description": "Key ID"
          },
          "kms": {
            "type": "string",
            "description": "Key Management System"
          },
          "type": {
            "$ref": "#/components/schemas/TKeyType",
            "description": "Key type"
          },
          "publicKeyHex": {
            "type": "string",
            "description": "Public key"
          },
          "privateKeyHex": {
            "type": "string",
            "description": "Optional. Private key"
          },
          "meta": {
            "anyOf": [
              {
                "type": "object"
              },
              {
                "type": "null"
              }
            ],
            "description": "Optional. Key metadata. Can be used to store auth data to access remote kms"
          }
        },
        "required": [
          "kid",
          "kms",
          "type",
          "publicKeyHex"
        ],
        "description": "Cryptographic key"
      },
      "IKeyManagerDecryptJWEArgs": {
        "type": "object",
        "properties": {
          "kid": {
            "type": "string",
            "description": "Key ID"
          },
          "data": {
            "type": "string",
            "description": "Encrypted data"
          }
        },
        "required": [
          "kid",
          "data"
        ],
        "description": "Input arguments for {@link IKeyManager.keyManagerDecryptJWE | keyManagerDecryptJWE}"
      },
      "IKeyManagerDeleteArgs": {
        "type": "object",
        "properties": {
          "kid": {
            "type": "string",
            "description": "Key ID"
          }
        },
        "required": [
          "kid"
        ],
        "description": "Input arguments for {@link IKeyManager.keyManagerDelete | keyManagerDelete}"
      },
      "IKeyManagerEncryptJWEArgs": {
        "type": "object",
        "properties": {
          "kid": {
            "type": "string",
            "description": "Key ID to use for encryption"
          },
          "to": {
            "type": "object",
            "properties": {
              "kid": {
                "type": "string",
                "description": "Key ID"
              },
              "type": {
                "$ref": "#/components/schemas/TKeyType",
                "description": "Key type"
              },
              "publicKeyHex": {
                "type": "string",
                "description": "Public key"
              },
              "privateKeyHex": {
                "type": "string",
                "description": "Optional. Private key"
              },
              "meta": {
                "anyOf": [
                  {
                    "type": "object"
                  },
                  {
                    "type": "null"
                  }
                ],
                "description": "Optional. Key metadata. Can be used to store auth data to access remote kms"
              }
            },
            "required": [
              "kid",
              "type",
              "publicKeyHex"
            ],
            "description": "Recipient key object"
          },
          "data": {
            "type": "string",
            "description": "Data to encrypt"
          }
        },
        "required": [
          "kid",
          "to",
          "data"
        ],
        "description": "Input arguments for {@link IKeyManager.keyManagerEncryptJWE | keyManagerEncryptJWE}"
      },
      "IKeyManagerGetArgs": {
        "type": "object",
        "properties": {
          "kid": {
            "type": "string",
            "description": "Key ID"
          }
        },
        "required": [
          "kid"
        ],
        "description": "Input arguments for {@link IKeyManager.keyManagerGet | keyManagerGet}"
      },
      "IKeyManagerSignEthTXArgs": {
        "type": "object",
        "properties": {
          "kid": {
            "type": "string",
            "description": "Key ID"
          },
          "transaction": {
            "type": "object",
            "description": "Ethereum transaction object"
          }
        },
        "required": [
          "kid",
          "transaction"
        ],
        "description": "Input arguments for {@link IKeyManager.keyManagerSignEthTX | keyManagerSignEthTX}"
      },
      "IKeyManagerSignJWTArgs": {
        "type": "object",
        "properties": {
          "kid": {
            "type": "string",
            "description": "Key ID"
          },
          "data": {
            "type": "string",
            "description": "Data to sign"
          }
        },
        "required": [
          "kid",
          "data"
        ],
        "description": "Input arguments for {@link IKeyManager.keyManagerSignJWT | keyManagerSignJWT}"
      },
      "EcdsaSignature": {
        "type": "object",
        "properties": {
          "r": {
            "type": "string"
          },
          "s": {
            "type": "string"
          },
          "recoveryParam": {
            "type": "number",
            "const": 1
          }
        },
        "required": [
          "r",
          "s",
          "recoveryParam"
        ]
      }
    },
    "methods": {
      "didManagerAddKey": {
        "description": "Adds a key to a DID Document",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerAddKeyArgs"
        },
        "returnType": {
          "type": "object"
        }
      },
      "didManagerAddService": {
        "description": "Adds a service to a DID Document",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerAddServiceArgs"
        },
        "returnType": {
          "type": "object"
        }
      },
      "didManagerCreate": {
        "description": "Creates and returns a new identifier",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerCreateArgs"
        },
        "returnType": {
          "$ref": "#/components/schemas/IIdentifier"
        }
      },
      "didManagerDelete": {
        "description": "Deletes identifier",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerDeleteArgs"
        },
        "returnType": {
          "type": "boolean"
        }
      },
      "didManagerFind": {
        "description": "Returns a list of managed identifiers",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerFindArgs"
        },
        "returnType": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/IIdentifier"
          }
        }
      },
      "didManagerGet": {
        "description": "Returns a specific identifier",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerGetArgs"
        },
        "returnType": {
          "$ref": "#/components/schemas/IIdentifier"
        }
      },
      "didManagerGetByAlias": {
        "description": "Returns a specific identifier by alias",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerGetByAliasArgs"
        },
        "returnType": {
          "$ref": "#/components/schemas/IIdentifier"
        }
      },
      "didManagerGetOrCreate": {
        "description": "Returns an existing identifier or creates a new one for a specific alias",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerGetOrCreateArgs"
        },
        "returnType": {
          "$ref": "#/components/schemas/IIdentifier"
        }
      },
      "didManagerGetProviders": {
        "description": "Returns a list of available identifier providers",
        "arguments": {
          "type": "object"
        },
        "returnType": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "didManagerImport": {
        "description": "Imports identifier",
        "arguments": {
          "$ref": "#/components/schemas/IIdentifier"
        },
        "returnType": {
          "$ref": "#/components/schemas/IIdentifier"
        }
      },
      "didManagerRemoveKey": {
        "description": "Removes a key from a DID Document",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerRemoveKeyArgs"
        },
        "returnType": {
          "type": "object"
        }
      },
      "didManagerRemoveService": {
        "description": "Removes a service from a DID Document",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerRemoveServiceArgs"
        },
        "returnType": {
          "type": "object"
        }
      },
      "didManagerSetAlias": {
        "description": "Sets identifier alias",
        "arguments": {
          "$ref": "#/components/schemas/IDIDManagerSetAliasArgs"
        },
        "returnType": {
          "type": "boolean"
        }
      },
      "keyManagerCreate": {
        "description": "Creates and returns a new key",
        "arguments": {
          "$ref": "#/components/schemas/IKeyManagerCreateArgs"
        },
        "returnType": {
          "$ref": "#/components/schemas/IKey"
        }
      },
      "keyManagerDecryptJWE": {
        "description": "Decrypts data",
        "arguments": {
          "$ref": "#/components/schemas/IKeyManagerDecryptJWEArgs"
        },
        "returnType": {
          "type": "string"
        }
      },
      "keyManagerDelete": {
        "description": "Deletes a key",
        "arguments": {
          "$ref": "#/components/schemas/IKeyManagerDeleteArgs"
        },
        "returnType": {
          "type": "boolean"
        }
      },
      "keyManagerEncryptJWE": {
        "description": "Encrypts data",
        "arguments": {
          "$ref": "#/components/schemas/IKeyManagerEncryptJWEArgs"
        },
        "returnType": {
          "type": "string"
        }
      },
      "keyManagerGet": {
        "description": "Returns an existing key",
        "arguments": {
          "$ref": "#/components/schemas/IKeyManagerGetArgs"
        },
        "returnType": {
          "$ref": "#/components/schemas/IKey"
        }
      },
      "keyManagerGetKeyManagementSystems": {
        "description": "Lists available key management systems",
        "arguments": {
          "type": "object"
        },
        "returnType": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "keyManagerImport": {
        "description": "Imports a created key",
        "arguments": {
          "$ref": "#/components/schemas/IKey"
        },
        "returnType": {
          "type": "boolean"
        }
      },
      "keyManagerSignEthTX": {
        "description": "Signs Ethereum transaction",
        "arguments": {
          "$ref": "#/components/schemas/IKeyManagerSignEthTXArgs"
        },
        "returnType": {
          "type": "string"
        }
      },
      "keyManagerSignJWT": {
        "description": "Signs JWT",
        "arguments": {
          "$ref": "#/components/schemas/IKeyManagerSignJWTArgs"
        },
        "returnType": {
          "$ref": "#/components/schemas/EcdsaSignature"
        }
      }
    }
  }
}