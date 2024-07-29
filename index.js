const core = require('@actions/core');
const github = require('@actions/github');

try {
    const tenantId = core.getInput('tenant-id');
    console.log(`You provided tenant id: ${tenantId}`);
    const result = `You provided tenant id: ${tenantId}`;
    core.setOutput("result", result);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`event payload: ${payload}`);
}
catch (error) {
    core.setFailed(error.message);
}