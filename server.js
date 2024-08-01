// const { Novu } = require("@novu/node");
const express = require("express");
const { serve } = require("@novu/framework/express");
require('dotenv').config();
const { pushNotificationWorkflow } = require("./novu/workflows");
// const novu = new Novu("ad3f06bb45fd1f411cf152b6f030c8e9");
const app = express();
app.use("/api/novu", serve({ workflows: [pushNotificationWorkflow] }));
app.listen(4000);