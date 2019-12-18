/**
 * Copyright 2019, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

async function main(
  projectNumber = 'YOUR_PROJECT_NUMBER', // Found in project settings.
  secretId = 'foo', // Identifier for secret.
  secretStringPayload = 'hello world!' // A secret string.
) {
  // [START secret_manager_quickstart]
  // Import the Secret Manager client and instantiate it:
  const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
  const client = new SecretManagerServiceClient();

  // const projectNumber = 'YOUR_PROJECT_NUMBER', // Found in project settings.
  // const secretId = 'foo', // Identifier for secret.
  // const secretStringPayload = 'hello world!', // A secret string.

  async function setAndAccessSecret() {
    // Create the secret, ignoring errors related to the secret
    // already existing:
    try {
      await client.createSecret({
        parent: `projects/${projectNumber}`,
        secret: {
          name: secretId,
          replication: {
            automatic: {},
          },
        },
        secretId,
      });
    } catch (err) {
      if (err.message.includes('ALREADY_EXISTS')) {
        console.info(`secret '${secretId}' already exists`);
      } else {
        throw err; // Unexpected error.
      }
    }

    // Update the latest version of the secret to the value provided:
    await client.addSecretVersion({
      parent: `projects/${projectNumber}/secrets/${secretId}`,
      payload: {
        data: Buffer.from(secretStringPayload, 'utf8'),
      },
    });
    console.info(`set current version of secret to '${secretStringPayload}'`);

    // Fetch the latest version of the secret:
    const [secret] = await client.accessSecretVersion({
      name: `projects/${projectNumber}/secrets/${secretId}/versions/latest`,
    });
    const secretString = secret.payload.data.toString('utf8');
    console.info(`fetched secret string '${secretString}'`);
  }
  setAndAccessSecret();
  // [END secret_manager_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
