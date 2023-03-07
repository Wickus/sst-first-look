import {Bucket, StackContext} from "sst/constructs";

export function StorageStack({stack}: StackContext) {
    // Create a Next.js site
    const bucket = new Bucket(stack, "nextjs-app-uploads")

    return {
        bucket
    }
}
