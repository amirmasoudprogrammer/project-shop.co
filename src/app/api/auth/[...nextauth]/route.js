import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/src/models/User"
import connectDB from "@/src/utils/connectDB";
import {verifyPassword} from "@/src/utils/auth";



export const authOptions = {
    session: {strategy: "jwt"},
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const {email, password} = credentials;

                try {
                    await connectDB();
                } catch (error) {
                    throw new Error("A problem has occurred on the server");
                }
                if (!email || !password) {
                    throw new Error("Please enter valid information");
                }
                const user = await User.findOne({email: email});

                if (!user) throw new Error("Please create an account first");

                const isValid = await verifyPassword(password, user.password)


                if (!isValid) throw new Error("Email or password is incorrect");

                return {email};

            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
