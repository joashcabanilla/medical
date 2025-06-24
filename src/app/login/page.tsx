//CSS utils
import { container } from "@/lib/tv/global";

import Login from "@/components/auth/admin/login";

export default function Home() {
  return (
    <div className={container({ variant: "cardCenter" })}>
      <Login />
    </div>
  );
}