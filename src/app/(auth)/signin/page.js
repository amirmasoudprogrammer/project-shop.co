import React from 'react';
import SigninPage from "@/src/components/template/SigninPage";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/src/app/api/auth/[...nextauth]/route";

async function Page(props) {
    const session = await getServerSession(authOptions)
    if (session) redirect("/")
    return (
        <SigninPage/>
    );
}

export default Page;