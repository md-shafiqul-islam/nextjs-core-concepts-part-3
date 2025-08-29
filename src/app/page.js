import UserInfo from "@/components/UserInfo";
import LoginButton from "../components/LoginButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Hello World!!</h1>

      {session?.user ? <LogoutButton /> : <LoginButton />}

      <p>From Client Component</p>
      <UserInfo />

      <p>From Server Component</p>
      {JSON.stringify(session)}
    </div>
  );
}
