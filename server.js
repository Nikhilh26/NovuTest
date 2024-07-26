const express = require("express");
const { serve } = require("@novu/framework/express");
require('dotenv').config();
const { testWorkflow, pushNotificationWorkflow } = require("./novu/workflows");
const app = express();
app.use(express.json()); // Required for Novu POST requests

app.use("/api/novu", serve({ workflows: [testWorkflow, pushNotificationWorkflow] }));
// pushNotificationWorkflow.trigger(({
//     to: { subscriberId: 'SUBSCRIBER_ID' },
//     payload: {
//         name: "Hello world"
//     }
// })).then((success) => {
//     console.log('sucess', ' ', success);
// }).catch((err) => {
//     console.log(err);
// })

app.listen(4000);