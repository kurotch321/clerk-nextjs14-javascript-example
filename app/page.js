import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="">
          <Link href="/secure">Click here to access the protected page!</Link>
        </div>
      </div>
    </>
  );
}
