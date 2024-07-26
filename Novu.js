// // const { Novu } = require('@novu/node');

// // const novu = new Novu('ad3f06bb45fd1f411cf152b6f030c8e9');

// // // Example: Sending a notification
// // await novu.trigger('<TRIGGER_NAME>', {
// //     to: {
// //         subscriberId: '<USER_ID>',
// //         email: 'user@email.com'
// //     },
// //     payload: {
// //         name: 'John Doe',
// //         customData: 'Your custom data here'
// //     }
// // });

// // const { workflow } = require("@novu/framework");

// // const tp = workflow(
// //     "sample-testing",
// //     async ({ step, payload }) => {
// //         await step.delay("delay", async () => {
// //             return {
// //                 unit: "day",
// //                 amount: 1,
// //             };
// //         });

// //         await step.email("email-step", async () => {
// //             return {
// //                 subject: "Welcome to Novu",
// //                 body: "Hello, welcome to Novu!",
// //             };
// //         });
// //     });

// // const myWorkflow = workflow(
// //     "new-comment",
// //     async ({ step, payload }) => {
// //         step.
// //         await step.chat(
// //             "send-chat",
// //             async () => {
// //                 return {
// //                     body: "Hello from Novu",
// //                 };
// //             },
// //             {
// //                 inputSchema: {
// //                     type: "object",
// //                     properties: {},
// //                 },
// //             },
// //         );
// //     },
// //     {
// //         payloadSchema: {
// //             type: "object",
// //             properties: {},
// //         }
// //     },
// // );
// const { Novu } = require('@novu/node');

// const novu = new Novu('ad3f06bb45fd1f411cf152b6f030c8e9');

// novu.trigger('demo-verify-otp', {
//     to: {
//         subscriberId: 'SUBSCRIBER_ID',
//         email: 'nikhilharisinghani26@gmail.com',
//     },
//     payload: {
//         hello: 'world',
//     },
// })
//     .then((response) => {
//         console.log('Success:', response);
//     })
//     .catch((error) => {
//         console.error('Error:', error.message);
//     });