import Input from "@/components/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((current) => (current === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });

      toast.success("Successfully logged in");
    } catch (error) {
      toast.error("Error while logging in");
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", { email, name, password });

      toast.success("Account successfully created");
      login();
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="h-full w-full bg-black/50">
        <nav className="p-4">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={110}
            height={110}
            priority
          />
        </nav>
        <div className="flex justify-center">
          <div className="lg:w-2/5 lg:max-w-md w-full rounded-sm p-4 self-center bg-black/70 mt-5">
            <h2 className="text-white text-4xl font-semibold mb-6">
              {variant === "login" ? "Log in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  type="text"
                  label="Username"
                  id="name"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                />
              )}
              <Input
                type="email"
                label="Email address"
                id="email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
              />
              <Input
                type="password"
                label="Password"
                id="password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              className="text-white text-base bg-red-600 rounded-md w-full hover:bg-red-700 transition py-3 mt-10"
              onClick={variant === "login" ? login : register}
            >
              {variant === "login" ? "Log in" : "Register"}
            </button>
            <div className="flex flex-row mt-7 gap-4 items-center justify-center">
              <button
                className="h-9 w-9 rounded-full flex items-center justify-center bg-white hover:opacity-80 transition"
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
              >
                <FcGoogle size={29} />
              </button>
              <button
                className="h-9 w-9 rounded-full flex items-center justify-center bg-white hover:opacity-80 transition"
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
              >
                <FaGithub size={27} />
              </button>
            </div>
            <p className="text-neutral-500 mt-7">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                className="text-white ml-1 cursor-pointer hover:underline"
                onClick={toggleVariant}
              >
                {variant === "login" ? "Create an account!" : "Log in!"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
