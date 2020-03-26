// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import { describe, it } from 'mocha';
/* eslint-disable @typescript-eslint/no-var-requires */
const secretmanagerserviceModule = require('../src');


const FAKE_STATUS_CODE = 1;
class FakeError{
    name: string;
    message: string;
    code: number;
    constructor(n: number){
        this.name = 'fakeName';
        this.message = 'fake message';
        this.code = n;
    }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError|null, response?: {} | null): void;
}

export class Operation{
    constructor(){};
    promise() {};
}
function mockSimpleGrpcMethod(expectedRequest: {}, response: {} | null, error: FakeError | null) {
    return (actualRequest: {}, options: {}, callback: Callback) => {
        assert.deepStrictEqual(actualRequest, expectedRequest);
        if (error) {
            callback(error);
        } else if (response) {
            callback(null, response);
        } else {
            callback(null);
        }
    };
}
describe('v1beta1.SecretManagerServiceClient', () => {
    it('has servicePath', () => {
        const servicePath = secretmanagerserviceModule.v1beta1.SecretManagerServiceClient.servicePath;
        assert(servicePath);
    });
    it('has apiEndpoint', () => {
        const apiEndpoint = secretmanagerserviceModule.v1beta1.SecretManagerServiceClient.apiEndpoint;
        assert(apiEndpoint);
    });
    it('has port', () => {
        const port = secretmanagerserviceModule.v1beta1.SecretManagerServiceClient.port;
        assert(port);
        assert(typeof port === 'number');
    });
    it('should create a client with no option', () => {
        const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient();
        assert(client);
    });
    it('should create a client with gRPC fallback', () => {
        const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
            fallback: true,
        });
        assert(client);
    });
    it('has initialize method and supports deferred initialization', async () => {
        const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        assert.strictEqual(client.secretManagerServiceStub, undefined);
        await client.initialize();
        assert(client.secretManagerServiceStub);
    });
    it('has close method', () => {
        const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
            credentials: { client_email: 'bogus', private_key: 'bogus' },
            projectId: 'bogus',
        });
        client.close();
    });
    describe('createSecret', () => {
        it('invokes createSecret without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.ICreateSecretRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.createSecret = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.createSecret(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes createSecret with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.ICreateSecretRequest = {};
            request.parent = '';
            // Mock gRPC layer
            client._innerApiCalls.createSecret = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.createSecret(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('addSecretVersion', () => {
        it('invokes addSecretVersion without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IAddSecretVersionRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.addSecretVersion = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.addSecretVersion(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes addSecretVersion with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IAddSecretVersionRequest = {};
            request.parent = '';
            // Mock gRPC layer
            client._innerApiCalls.addSecretVersion = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.addSecretVersion(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getSecret', () => {
        it('invokes getSecret without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IGetSecretRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getSecret = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getSecret(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getSecret with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IGetSecretRequest = {};
            request.name = '';
            // Mock gRPC layer
            client._innerApiCalls.getSecret = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getSecret(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('updateSecret', () => {
        it('invokes updateSecret without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IUpdateSecretRequest = {};
            request.secret = {};
            request.secret.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.updateSecret = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.updateSecret(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes updateSecret with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IUpdateSecretRequest = {};
            request.secret = {};
            request.secret.name = '';
            // Mock gRPC layer
            client._innerApiCalls.updateSecret = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.updateSecret(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('deleteSecret', () => {
        it('invokes deleteSecret without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IDeleteSecretRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.deleteSecret = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.deleteSecret(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes deleteSecret with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IDeleteSecretRequest = {};
            request.name = '';
            // Mock gRPC layer
            client._innerApiCalls.deleteSecret = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.deleteSecret(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getSecretVersion', () => {
        it('invokes getSecretVersion without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IGetSecretVersionRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getSecretVersion = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getSecretVersion(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getSecretVersion with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IGetSecretVersionRequest = {};
            request.name = '';
            // Mock gRPC layer
            client._innerApiCalls.getSecretVersion = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getSecretVersion(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('accessSecretVersion', () => {
        it('invokes accessSecretVersion without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IAccessSecretVersionRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.accessSecretVersion = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.accessSecretVersion(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes accessSecretVersion with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IAccessSecretVersionRequest = {};
            request.name = '';
            // Mock gRPC layer
            client._innerApiCalls.accessSecretVersion = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.accessSecretVersion(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('disableSecretVersion', () => {
        it('invokes disableSecretVersion without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IDisableSecretVersionRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.disableSecretVersion = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.disableSecretVersion(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes disableSecretVersion with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IDisableSecretVersionRequest = {};
            request.name = '';
            // Mock gRPC layer
            client._innerApiCalls.disableSecretVersion = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.disableSecretVersion(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('enableSecretVersion', () => {
        it('invokes enableSecretVersion without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IEnableSecretVersionRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.enableSecretVersion = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.enableSecretVersion(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes enableSecretVersion with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IEnableSecretVersionRequest = {};
            request.name = '';
            // Mock gRPC layer
            client._innerApiCalls.enableSecretVersion = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.enableSecretVersion(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('destroySecretVersion', () => {
        it('invokes destroySecretVersion without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IDestroySecretVersionRequest = {};
            request.name = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.destroySecretVersion = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.destroySecretVersion(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes destroySecretVersion with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IDestroySecretVersionRequest = {};
            request.name = '';
            // Mock gRPC layer
            client._innerApiCalls.destroySecretVersion = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.destroySecretVersion(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('setIamPolicy', () => {
        it('invokes setIamPolicy without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
            request.resource = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.setIamPolicy(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes setIamPolicy with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
            request.resource = '';
            // Mock gRPC layer
            client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.setIamPolicy(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('getIamPolicy', () => {
        it('invokes getIamPolicy without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
            request.resource = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.getIamPolicy(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes getIamPolicy with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
            request.resource = '';
            // Mock gRPC layer
            client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.getIamPolicy(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('testIamPermissions', () => {
        it('invokes testIamPermissions without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
            request.resource = '';
            // Mock response
            const expectedResponse = {};
            // Mock gRPC layer
            client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
                request,
                expectedResponse,
                null
            );
            client.testIamPermissions(request, (err: {}, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            })
        });

        it('invokes testIamPermissions with error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
            request.resource = '';
            // Mock gRPC layer
            client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
                request,
                null,
                error
            );
            client.testIamPermissions(request, (err: FakeError, response: {}) => {
                assert(err instanceof FakeError);
                assert.strictEqual(err.code, FAKE_STATUS_CODE);
                assert(typeof response === 'undefined');
                done();
            })
        });
    });
    describe('listSecrets', () => {
        it('invokes listSecrets without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IListSecretsRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listSecrets = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listSecrets(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listSecretsStream', () => {
        it('invokes listSecretsStream without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IListSecretsRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {response: 'data'};
            // Mock Grpc layer
            client._innerApiCalls.listSecrets = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listSecretsStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(expectedResponse);
        });
    });
    describe('listSecretVersions', () => {
        it('invokes listSecretVersions without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IListSecretVersionsRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {};
            // Mock Grpc layer
            client._innerApiCalls.listSecretVersions = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            client.listSecretVersions(request, (err: FakeError, response: {}) => {
                assert.ifError(err);
                assert.deepStrictEqual(response, expectedResponse);
                done();
            });
        });
    });
    describe('listSecretVersionsStream', () => {
        it('invokes listSecretVersionsStream without error', done => {
            const client = new secretmanagerserviceModule.v1beta1.SecretManagerServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            // Initialize client before mocking
            client.initialize();
            // Mock request
            const request: protosTypes.google.cloud.secrets.v1beta1.IListSecretVersionsRequest = {};
            request.parent = '';
            // Mock response
            const expectedResponse = {response: 'data'};
            // Mock Grpc layer
            client._innerApiCalls.listSecretVersions = (actualRequest: {}, options: {}, callback: Callback) => {
                assert.deepStrictEqual(actualRequest, request);
                callback(null, expectedResponse);
            };
            const stream = client.listSecretVersionsStream(request, {}).on('data', (response: {}) =>{
                assert.deepStrictEqual(response, expectedResponse);
                done();
            }).on('error', (err: FakeError) => {
                done(err);
            });
            stream.write(expectedResponse);
        });
    });
});
