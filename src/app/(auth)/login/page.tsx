//hooks
import type { Metadata } from "next";

//CSS utils
import { container } from "@/lib/tv/global";

import Login from "@/components/auth/admin/login";

export const metadata: Metadata = {
  title: "Admin Login"
};

export default function Home() {
  return (
    <div className={container({ variant: "cardCenter" })}>
      <Login />
    </div>
  );
}