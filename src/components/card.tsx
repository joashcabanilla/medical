/* eslint-disable @next/next/no-img-element */
"use client";

//css utils
import { cn } from "@/lib/utils";

//Shadcn Components
import { Card, CardContent, CardHeader } from "@/components/ui/card";

//Components
import { SwitchTheme } from "@/components/switch-theme";

interface LoginCardProps {
  children: React.ReactNode;
  classname?: string;
}

export const LoginHeader = () => {
  return (
    <CardHeader className="px-0">
      <div className="flex w-full items-center justify-between">
        <img alt="header" src="/header.png" draggable={false} className="w-8/12 max-w-[300px]" />
        <div className="flex items-center">
          <SwitchTheme />
        </div>
      </div>
    </CardHeader>
  );
};

export const LoginCard = ({ children, classname }: LoginCardProps) => {
  return (
    <Card className={cn("p-4 pt-8 pb-8 shadow-2xl", classname)}>
      <LoginHeader />
      <CardContent className="px-0">{children}</CardContent>
    </Card>
  );
};
