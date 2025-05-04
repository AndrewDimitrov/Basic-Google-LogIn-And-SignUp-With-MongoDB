"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        <h1>Sign in with Google</h1>
        <button
          onClick={() => signIn("google")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4285F4",
            color: "white",
            cursor: "pointer",
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
