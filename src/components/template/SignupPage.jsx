"use client"
import React, {useState} from 'react';
import {Toaster, toast} from 'sonner'
import styles from "src/styles/Signup.module.css"
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

function SignupPage(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const router = useRouter()


    const startLoginGoole = () => {
      signIn();
    }

    const startSignup = async (e) => {
        e.preventDefault()
        if (password !== rePassword) {
            toast.error("رمزو تکرار رمز یکسان نیست")
            return
        }
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json()
        console.log(data)
        if (res.status === 201) {
            toast.success("ثبت نام با موفقیت انجام شد..")
            router.push("/signin")
        } else {
            toast.error(data.error)
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
                <label>Repeat password</label>
                <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
                <button type="submit" onClick={startSignup}>
                    Registration
                </button>
            </form>

            <p>
                You have an account?
                <Link href="/signin">login</Link>
            </p>
            <Toaster position="top-center" richColors/>

        </div>
    );
}

export default SignupPage;