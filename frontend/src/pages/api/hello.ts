// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import AWS from "aws-sdk";

type Data = {
    name: string
}

const bucket = new AWS.S3({
    region: process.env.REGION
})

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    bucket.getObject({
        Bucket: "Uploads",
        Key: "test.html"
    }, (err, data) => {
        if (err) {
            console.log({err})
            return
        } else {
            console.log("success")
        }
    })

    res.status(200).json({name: 'John Doe'})
}
