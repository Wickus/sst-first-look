import {SSTConfig} from "sst";
import {ExampleStack} from "./stacks/ExampleStack"
import {Storage} from "./stacks/Storage";

export default {
    config(_input) {
        return {
            name: "nextjs-app",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.stack(ExampleStack).stack(Storage)
    },
} satisfies SSTConfig;
