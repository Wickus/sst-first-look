import {SSTConfig} from "sst";
import {WebsiteStack} from "./stacks/WebsiteStack"
import {StorageStack} from "./stacks/SorageStack";

export default {
    config(_input) {
        return {
            name: "nextjs-app",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.stack(WebsiteStack).stack(StorageStack)
    },
} satisfies SSTConfig;
