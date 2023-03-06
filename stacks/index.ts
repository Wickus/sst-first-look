import {MyStack} from "./MyStack";
import {App} from "@serverless-stack/resources";
import {StorageStack} from "./StorageStack";

export default function (app: App) {
    app.setDefaultFunctionProps({
        runtime: "nodejs16.x",
        srcPath: "services",
        bundle: {
            format: "esm",
        },
    });
    app.stack(MyStack).stack(StorageStack)
}
