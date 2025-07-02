"use client";

//hooks
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

//css utils
import { cn } from "@/lib/utils";
import { input, inputClear, inputIcon, noteCard } from "@/lib/tv/global";

//schemas
import { RegisterSchema } from "@/schemas";

//Icons
import { IdCard, Mail, UserRound, Lock, EyeOff, Eye } from "lucide-react";

//Shadcn components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Anchor } from "@/components/ui/anchor";

//Components
import { LoginCard } from "@/components/card";

export default function Register() {
  const router = useRouter();
  const memidRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      memid: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  });

  const formSubmit = (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
  };

  const handleError = (error: FieldErrors) => {
    const firstError = Object.keys(error)[0];
    switch (firstError) {
      case "memid":
        memidRef.current?.focus();
        break;
      case "email":
        emailRef.current?.focus();
        break;
      case "username":
        usernameRef.current?.focus();
        break;
      case "password":
        passwordRef.current?.focus();
        break;
      case "confirmPassword":
        confirmPasswordRef.current?.focus();
        break;
    }
  };

  const handleSignIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <LoginCard>
      <div className="grid gap-4">
        {/* Form Header */}
        <div>
          <h1 className="text-xl font-bold">Sign Up</h1>
          <p className="text-muted-foreground text-sm">Fill out the form below to sign up.</p>
        </div>
        <div className={noteCard()}>
          <p>
            Example format for <strong>PB number &ldquo;001234&ldquo; no Dash(-)</strong>, kapag may
            letra naman <strong>&ldquo;N001234&ldquo;</strong> at kung{" "}
            <strong>Member ID &ldquo;0010000000123456&ldquo;</strong>, ang i lalagay lang ang
            <strong> 123456</strong>
          </p>
          <p>
            <strong>Note:</strong>{" "}
            <strong>Priority ang Old Passbook sa pag verify.</strong>
          </p>
        </div>
        {/* Form Content */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(formSubmit, handleError)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="memid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">
                        Member Id / Passbook No.
                      </FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            ref={memidRef}
                            placeholder="Member Id / Passbook No."
                            type="text"
                            autoComplete="false"
                            disabled={false}
                            name="memid"
                            className={input()}
                          />
                        </FormControl>
                        <div className={inputIcon()}>
                          <IdCard size={25} />
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">Email</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            ref={emailRef}
                            placeholder="Email"
                            type="text"
                            autoComplete="false"
                            disabled={false}
                            name="email"
                            className={input()}
                          />
                        </FormControl>
                        <div className={inputIcon()}>
                          <Mail size={25} />
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">Username</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            ref={usernameRef}
                            placeholder="Username"
                            type="text"
                            autoComplete="false"
                            disabled={false}
                            name="username"
                            className={input()}
                          />
                        </FormControl>
                        <div className={inputIcon()}>
                          <UserRound size={25} />
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            ref={passwordRef}
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="false"
                            disabled={false}
                            name="password"
                            className={input()}
                          />
                        </FormControl>
                        <div className={inputIcon()}>
                          <Lock size={25} />
                        </div>
                        <a
                          className={cn(
                            field.value
                              ? inputClear({ visibility: "show" })
                              : inputClear({ visibility: "hide" })
                          )}
                          aria-label="show password"
                          onClick={() => {
                            const passwordType = passwordRef.current?.type;
                            if (passwordType === "password") {
                              setShowPassword(true);
                            } else {
                              setShowPassword(false);
                            }
                          }}
                        >
                          {showPassword ? (
                            <EyeOff size={25} aria-hidden="true" />
                          ) : (
                            <Eye size={25} aria-hidden="true" />
                          )}
                        </a>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">Confirm Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            ref={confirmPasswordRef}
                            placeholder="Confirm Password"
                            type={showConfirmPassword ? "text" : "password"}
                            autoComplete="false"
                            disabled={false}
                            name="confirmPassword"
                            className={input()}
                          />
                        </FormControl>
                        <div className={inputIcon()}>
                          <Lock size={25} />
                        </div>
                        <a
                          className={cn(
                            field.value
                              ? inputClear({ visibility: "show" })
                              : inputClear({ visibility: "hide" })
                          )}
                          aria-label="show password"
                          onClick={() => {
                            const passwordType = confirmPasswordRef.current?.type;
                            if (passwordType === "password") {
                              setShowConfirmPassword(true);
                            } else {
                              setShowConfirmPassword(false);
                            }
                          }}
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={25} aria-hidden="true" />
                          ) : (
                            <Eye size={25} aria-hidden="true" />
                          )}
                        </a>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-2">
                  <Button size="lg" className="text-lg font-bold" type="submit">
                    Sign Up
                  </Button>
                  <p className="text-muted-foreground text-center text-base">
                    Already have an account?{" "}
                    <Anchor
                      variant="link"
                      className="p-0 text-base font-bold"
                      onClick={handleSignIn}
                    >
                      Sign In
                    </Anchor>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </LoginCard>
  );
}
