"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import emailicon from "@/../public/images/email.png";
import passwordicon from "@/../public/images/password.png";
import Link from "next/link";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "@/../firebase";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (password !== confirmation) {
      setError("Passwords don't match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);
      setEmail("");
      setPassword("");
      setConfirmation("");
      router.push("/login");
    } catch (error) {
      console.error(error);
      setError((error as Error).message);
    }
  }

  // async function handleSubmit(event: FormEvent) {
  //   event.preventDefault();

  //   setError("");

  //   if (password !== confirmation) {
  //     setError("Passwords don't match");
  //     return;
  //   }

  //   try {
  //     await createUserWithEmailAndPassword(getAuth(app), email, password);
  //     router.push("/login");
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
            <h1 className="text-2xl md:text-3xl mb-2 font-bold">
              Create account
            </h1>
            <p>Let’s get you started sharing your links!</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 my-8"
              action="#"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email address</label>
                <div className="flex items-center border-[1px] border-[#D9D9D9] px-2 rounded-[8px] h-[48px]">
                  <Image src={emailicon} alt="email" />
                  <input
                    className="pl-3 w-full outline-none h-full"
                    placeholder="e.g. alex@email.com"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password"> Create Password</label>
                <div className="flex items-center border-[1px] border-[#D9D9D9] px-2 rounded-[8px] h-[48px]">
                  <Image src={passwordicon} alt="password" />
                  <input
                    className="pl-3 w-full outline-none h-full"
                    placeholder="At least 8 characters"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Confirm password</label>
                <div className="flex items-center border-[1px] border-[#D9D9D9] px-2 rounded-[8px] h-[48px]">
                  <Image src={passwordicon} alt="password" />
                  <input
                    className="pl-3 w-full  h-full outline-none"
                    placeholder="At least 8 characters"
                    id="password"
                    type="password"
                    name="confirm-password"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                  />
                </div>
              </div>

              <p className="text-xs">
                Password must contain at least 8 characters
              </p>

              <input
                type="submit"
                value="Create new account"
                className="bg-[#633CFF] text-white rounded-[8px] w-full py-3"
              />
            </form>
            <p className="text-center">
              Already have an account?
              <Link className="text-[#633CFF]" href="/signup">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
