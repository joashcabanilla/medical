/* eslint-disable @next/next/no-img-element */
"use client";

//Shadcn Components
import { Card, CardContent, CardHeader } from "@/components/ui/card";

//Components
import { SwitchTheme } from "@/components/switch-theme";

interface LoginCardProps {
  children: React.ReactNode;
}
export const LoginCard = ({ children }: LoginCardProps) => {
  return (
    <Card className="w-[400px] p-4 shadow-2xl">
      <CardHeader className="px-0">
        <div className="flex w-full items-center justify-between">
          <img alt="header" src="/header.png" draggable={false} className="w-8/12 max-w-[300px]" />
          <div className="flex items-center">
            <SwitchTheme />
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">{children}</CardContent>
    </Card>
  );
};
