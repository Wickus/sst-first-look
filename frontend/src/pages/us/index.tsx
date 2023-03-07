import {AppContext} from "next/app";
import {FC} from "react";

const UsHomePage: FC<{ message: string, env: string }> = (props) => {
    const {message, env} = props

    return <div className={"w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white"}>
        <h1 className={"italic text-3xl mb-5"}>This is the home page</h1>
        <p>Server side props & ENV passed from SST app</p>
        <table className={"w-96 text-left mt-5 text-xl"}>
            <thead>
            <tr>
                <th className={"border border-gray-400 p-2"}>Message</th>
                <th className={"border border-gray-400 p-2"}>ENV</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={"border border-gray-400 p-2"}>{message}</td>
                <td className={"border border-gray-400 p-2"}>{env}</td>
            </tr>
            </tbody>
        </table>
    </div>
}

export default UsHomePage

export async function getServerSideProps(context: AppContext) {
    return {
        props: {
            message: `Next.js is awesome`,
            env: process.env.STAGE
        },
    }
}
