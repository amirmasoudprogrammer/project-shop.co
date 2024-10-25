import React from 'react';
import SigninPage from "@/template/SigninPage";
import {getServerSession} from "next-auth";
import {authOptions} from "@/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

async function Page(props) {
    const session = await getServerSession(authOptions)
    if (session) redirect("/")
    return (
        <SigninPage/>
    );
}

export default Page;