"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import emailicon from "@/../public/images/email.png";
import passwordicon from "@/../public/images/password.png";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (error) {
      setError((error as Error).message);
    }
  }

  // async function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   setError("");

  //   try {
  //     const credential = await signInWithEmailAndPassword(
  //       getAuth(app),
  //       email,
  //       password
  //     );
  //     const idToken = await credential.user.getIdToken();

  //     await fetch("/api/login", {
  //       headers: {
  //         Authorization: `Bearer ${idToken}`,
  //       },
  //     });

  //     router.push("/");

  //   } catch (e) {
  //     setError((e as Error).message);
  //   }
  // }

  return (
    <div className="w-screen h-screen flex bg-[#FAFAFA]">
      <div className="w-full m-auto max-w-[476px] p-8">
        <div className=" flex flex-col gap-8">
          <Image className="md:my-0 md:mx-auto mb-12" src={logo} alt="logo" />
          <div className="px-8 py-6 bg-white rounded-xl">
            <h1 className="text-2xl md:text-3xl mb-2 font-bold">Login</h1>
            <p>Add your details below to get back into the app</p>
            <form
              className="flex flex-col gap-6 my-8"
              onSubmit={handleSubmit}
              action="#"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email address</label>
                <div className="flex items-center border-[1px] border-[#D9D9D9] px-2 rounded-[8px] h-[48px]">
                  <Image src={emailicon} alt="email" />
                  <input
                    className="pl-3 w-full h-full outline-none"
                    placeholder="e.g. alex@email.com"
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <div className="flex items-center border-[1px] border-[#D9D9D9] px-2 rounded-[8px] h-[48px]">
                  <Image src={passwordicon} alt="password" />
                  <input
                    className="pl-3 w-full h-full outline-none"
                    placeholder="Enter your password"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Login"
                className="bg-[#633CFF] text-white rounded-[8px] w-full py-3"
              />
            </form>
            <p className="text-center">
              Don’t have an account?
              <Link className="text-[#633CFF]" href="/signup">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
