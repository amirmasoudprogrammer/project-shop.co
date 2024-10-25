"use client"
import React, {useState} from 'react';
import styles from "@/styles/Signup.module.css";
import Link from "next/link";
import {toast, Toaster} from "sonner";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";


function SigninPage(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const startSignin = async (e) => {
        e.preventDefault()
        const res = await signIn("credentials",{
            email:email,
            password:password,
            redirect:false
        })
        if (res.error){
            toast.error(res.error)
        }else {
            toast.success("ورود باموفقیت.")
            router.push("/")
        }

    }
    return (
        <div className={styles.form}>

            <h4>Registration</h4>
            <form>
                <label>emali</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={startSignin}>
                    login
                </button>
            </form>

            <p>
                You have an account?
                <Link href="/signup">Registration</Link>
            </p>
            <Toaster position="top-center" richColors/>

        </div>
    );
}

export default SigninPage;