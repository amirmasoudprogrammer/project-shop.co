import {NextResponse} from "next/server";
import connectDB from "@/src/utils/connectDB";
import User from "@/src/models/User"
import {hashPassword} from "@/src/utils/auth";



export async function POST(req) {

    try {

        await connectDB()

        const {email, password} = await req.json()

        if (!email , !password) {
            return NextResponse.json(
                {error: "Please enter a valid email and password"},
                {status: 422}
            )
        }

        const existingUser = await User.findOne({email: email})
        if (existingUser) {
            return NextResponse.json(
                {error: "This account exists"},
                {status: 422}
            )
        }


        const hashPasswords =await hashPassword(password)

        const NewUser = await User.create(
            {email:email ,password:hashPasswords}
        )
        console.log(NewUser);

        return NextResponse.json(
            { message: "User account created" },
            { status: 201 }
        );


    } catch (error) {
        console.log(error)
        NextResponse.json(
            {error: "Network error"},
            {status: 500}
        )

    }

}