import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <div>
        <a href="/api/auth/login">Login</a>
      </div>
    </div>
  );
}
