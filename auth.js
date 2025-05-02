import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authOptions = {
  providers: [Google],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middlewareProtected") return !!auth;
      return true;
    },
  },
};

export const { auth, signIn, signOut, handlers } = NextAuth(authOptions);
