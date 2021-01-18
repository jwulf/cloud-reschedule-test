import { ZBClient } from "zeebe-node";
import { config } from "dotenv";

config();

const clientId = process.env.clientId!;
const clientSecret = process.env.clientSecret!;
const clusterId = process.env.clusterId!;

const zbc = new ZBClient({
  camundaCloud: {
    clientId,
    clientSecret,
    clusterId,
  },
});

async function main() {
  await zbc.deployWorkflow("./bpmn/model.bpmn");
  while (true) {
    console.log(await zbc.createWorkflowInstanceWithResult("null-op", {}));
  }
}

main();
