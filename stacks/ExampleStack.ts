import {NextjsSite, StackContext} from "sst/constructs";

export function ExampleStack({stack, app}: StackContext) {
    const stage = app.stage;
    // Create a Next.js site
    const site = new NextjsSite(stack, "Site", {
        path: "frontend/",
        customDomain: {
            domainName: stage !== "prod" ? `${stage}.ngenstudios.com` : "ngenstudios.com",
            hostedZone: "ngenstudios.com",
        },
        environment: {
            REGION: app.region,
        },
        buildCommand:"npm run build",
    });

    stack.addOutputs({
        URL: site.url || "localhost:3000",
    });
}
