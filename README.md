# Cloud Reschedule Test

Examine the behaviour of a client application when Camunda Cloud reschedules the pods.

## Install

Clone this repo
* Run `npm i`
* Rename the file `env` to `.env`, and put your Camunda Cloud client credentials in it.

## Run Continuous Test

* Run `npm start`

## Run Awaited Workflow Test

This test creates a workflow that takes 11m to complete. If the connection to Camunda Cloud is broken before the 11m is up, the result will never arrive at the client.

* Run `npm run delayed`