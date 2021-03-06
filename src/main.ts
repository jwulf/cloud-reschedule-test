import { ZBClient } from "zeebe-node";
import { config } from "dotenv";
import { stdout } from "single-line-log";

config();

const clientId = process.env.clientId!;
const clientSecret = process.env.clientSecret!;
const clusterId = process.env.clusterId!;
let count = 0;

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
    await zbc.createWorkflowInstanceWithResult("null-op", {});
    stdout(`Count: ${count++}`);
  }
}

main();
