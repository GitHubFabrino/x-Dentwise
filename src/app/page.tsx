import { Button } from "@/components/ui/button";
import { SignUpButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <SignedOut>
        <SignUpButton mode="modal">Sing Up</SignUpButton>

      </SignedOut>

      <SignedIn>
        <SignOutButton >Log Out</SignOutButton>
      </SignedIn>
    </div>
  );
}
