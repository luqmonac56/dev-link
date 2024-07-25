"use client";
import Main from "@/components/Main";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Home() {

  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  return (
    <main className="">
      <Main />
    </main>
  );
}
