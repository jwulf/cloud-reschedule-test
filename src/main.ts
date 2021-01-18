import { ZBClient } from "zeebe-node";
import { config } from "dotenv";

config();

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const clusterId = process.env.clusterId;

const zbc = new ZBClient({
  camundaCloud: {
    clientId: "9l.8gLFqM3wHaA-qQITjNMG0fkipg~-Z",
    clientSecret:
      "vGNZCTP5KzUJWCs6_fFQ2lv5-3GQj~cTcwXu7Abk7TxG.As6IYg2UDoRAvtr7e5Z",
    clusterId: "3b640f45-0dcd-469c-8551-7f68a5d4f54b",
  },
});

async function main() {
  await zbc.deployWorkflow("./bpmn/model.bpmn");
  while (true) {
    console.log(await zbc.createWorkflowInstanceWithResult("null-op", {}));
  }
}

main();
