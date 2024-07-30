const { Novu } = require("@novu/node");
const express = require("express");
const { serve } = require("@novu/framework/express");
require('dotenv').config();
const { testWorkflow, pushNotificationWorkflow } = require("./novu/workflows");
const novu = new Novu("ad3f06bb45fd1f411cf152b6f030c8e9");
const app = express();
app.use("/api/novu", serve({ workflows: [testWorkflow, pushNotificationWorkflow] }));

pushNotificationWorkflow.trigger(({
    to: [{ subscriberId: 'SUBSCRIBER_ID' }, { subscriberId: '66a25b5bf502999ed8c9b36b' }],
    payload: {
        name: "BackendTest7",
        // rollNo: 7
    }
})).then((success) => {
    console.log('sucess', ' ', success);
}).catch((err) => {
    console.log(err);
})


// topic start
// const key = "key";
// const topicName = "Topic Name";
// novu.topics.create({
//     key: key,
//     name: topicName,
// }).then(() => console.log("success in creating topic"))

// novu.topics.addSubscribers(key, {
//     subscribers: ['SUBSCRIBER_ID']
// }).then((success) => console.log("succes in creating topic"));

// novu.trigger("push-notification-workflow", {
//     to: [{ type: "Topic", topicKey: key }],
//     payload: {
//         name:"Update",
//         rollNo:21
//     },
//     actor: { subscriberId: "<SUBSCRIBER_ID_TO_EXCLUDE>" }, // actor will not recieve the message
// });
// topic end

app.listen(4000);