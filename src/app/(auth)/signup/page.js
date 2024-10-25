import React from 'react';
import SignupPage from "@/template/SignupPage";
import {getServerSession} from "next-auth";
import {authOptions} from "@/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

async function Page(props) {
    const session = await getServerSession(authOptions)
    if (session) redirect("/")
        return (
            <SignupPage/>
        );
}

export default Page;