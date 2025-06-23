"use client";

//hooks
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";
import { useRef, useState } from "react";

//css utils
import { cn } from "@/lib/utils";

//schemas
import { LoginSchema } from "@/schemas";

//Icons
import { ShieldUser, Lock, Eye, EyeOff } from "lucide-react";

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

//Components
import { LoginCard } from "@/components/card";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { username: "", password: "" }
  });

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const formSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  };

  const handleError = (error: FieldErrors) => {
    console.log(error);
  };

  return (
    <LoginCard classname="w-[400px]">
      <div className="grid gap-4">
        <div>
          <h1 className="text-xl font-bold">Login to account</h1>
          <p className="text-muted-foreground text-sm">
            Enter your credentials to access your account.
          </p>
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(formSubmit, handleError)}
              className="w-full space-y-6"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-bold">Username / Email</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            {...field}
                            ref={usernameRef}
                            placeholder="Username / Email"
                            type="text"
                            autoComplete="false"
                            disabled={false}
                            name="username"
                            className="peer h-10 rounded-xl ps-9 indent-1 text-base font-normal"
                          />
                        </FormControl>
                        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
                          <ShieldUser size={25} />
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
                            className="peer h-10 rounded-xl ps-10 pe-10 indent-1 text-base font-normal"
                          />
                        </FormControl>
                        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
                          <Lock size={25} />
                        </div>
                        <a
                          className={cn(
                            "text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 transition-[color,box-shadow, opacity] absolute inset-y-0 end-2 flex h-full w-9 items-center justify-center rounded-e-md delay-100 ease-[cubic-bezier(0.42,0,1,1)] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                            field.value
                              ? "cursor-pointer opacity-100"
                              : "pointer-events-none opacity-0"
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
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </LoginCard>
  );
}
