import { ZBClient } from "zeebe-node";
import { config } from "dotenv";
import { stdout } from "single-line-log";

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
  let time = 0;
  await zbc.deployWorkflow("./bpmn/delay.bpmn");
  console.log("Requesting result with 11m delay");
  setInterval(() => {
    time += 30;
    stdout(`${time / 60}m elapsed...`);
  }, 30000);
  console.log(
    await zbc.createWorkflowInstanceWithResult({
      bpmnProcessId: "delayed-result",
      variables: {},
      requestTimeout: 12 * 60 * 1000,
    })
  );
}

main();
