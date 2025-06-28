//hooks
import type { Metadata } from "next";

//components
import Register from "@/components/auth/member/register";

//css utils
import { container } from "@/lib/tv/global";

export const metadata: Metadata = {
  title: "Member Registration"
};

export default function Home() {
  return (
    <div className={container({ variant: "cardCenter" })}>
      <Register />
    </div>
  );
}
