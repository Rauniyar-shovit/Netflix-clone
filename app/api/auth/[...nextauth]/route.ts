import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import { compare } from "bcrypt";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and Password required");
        }
        const user = await prismadb.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist ");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Incorrect Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
