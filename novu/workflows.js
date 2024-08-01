const { workflow } = require('@novu/framework');
const { z } = require('zod');

const pushNotificationWorkflow = workflow(
    "push-notification-workflow",
    async ({ step, payload }) => {
        await step.inApp("send-push", async () => {
            return {
                subject: "Hello world",
                title: "New Notifisscation",
                content: `Hello ${payload.body}, you have a new notification!`,
                body: `${payload.body} hello`
            };
        });
    },
    { payloadSchema: z.object({ body: z.string(), title: z.string() }) }
);


const pn = workflow(
    "testing",
    async ({ step, payload }) => {
        await step.inApp("send-push", async () => {
            return {
                subject: "Hello world",
                title: "New Notifisscation",
                content: `Hello ${payload.name}, you have a new notification!`,
                body: `${payload.name} hello`
            };
        });
    },
    { payloadSchema: z.object({ name: z.string(), title: z.string() }) }
);


module.exports = { pushNotificationWorkflow, pn }