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
        buildCommand: stage !== "prod" ? "npm run dev" : "",
        dev: {
            deploy: stage === "dev"
        }
    });

    stack.addOutputs({
        URL: site.url || "localhost:3000",
    });
}
