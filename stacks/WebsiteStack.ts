import {NextjsSite, StackContext} from "sst/constructs";

export function WebsiteStack({stack, app}: StackContext) {
    const stage = app.stage;

    const site = new NextjsSite(stack, "Site", {
        path: "frontend",
        customDomain: {
            domainName: stage !== "prod" ? `${stage}.ngenstudios.com` : "ngenstudios.com",
            hostedZone: "ngenstudios.com",
        },
        environment: {
            REGION: app.region,
            STAGE: stage
        },
    });

    stack.addOutputs({
        URL: site.url || "localhost:3000",
    });
}
