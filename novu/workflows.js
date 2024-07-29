const { workflow } = require('@novu/framework');
const { z } = require('zod');

const testWorkflow = workflow('test-workflow', async ({ step, payload }) => {
    await step.email('send-email', async (controls) => {
        return {
            subject: controls.subject,
            body: 'This is your first Novu Email ' + payload.userName,
        };
    },
        {
            controlSchema: z.object({
                subject: z.string().default('A Successful Test on Novu from {{userName}}'),
            }),
        });
}, {
    payloadSchema: z.object({
        userName: z.string().default('John Doe'),
    }),
});

const pushNotificationWorkflow = workflow(
    "push-notification-workflow",
    async ({ step, payload }) => {
        console.log(payload + "data sent");
        await step.inApp("send-push", async () => {
            return {
                subject: "Hello world",
                title: "New Notification",
                content: `Hello ${payload.name}, you have a new notification!`,
                body: `${payload.name} and having ${payload.rollNo}`
            };
        });
    },
    { payloadSchema: z.object({ name: z.string(), rollNo: z.number() }) }
);
// headless
module.exports = { testWorkflow, pushNotificationWorkflow };