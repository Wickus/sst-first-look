import {Bucket, StackContext} from "sst/constructs";

export function Storage({stack}: StackContext) {
    // Create a Next.js site
    const bucket = new Bucket(stack, "Uploads")

    return {
        bucket
    }
}
