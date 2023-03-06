import {Bucket, StackContext} from "@serverless-stack/resources";


export function StorageStack({stack}: StackContext) {
    // Create the DynamoDB table
    const bucket = new Bucket(stack, "Uploads");

    return {
        bucket,
    };
}
