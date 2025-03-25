// import { login, signup } from "./actions";

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   );
// }

// app/auth/page.tsx
"use client";

import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  // 이미 로그인된 상태면 바로 홈으로 이동
  useEffect(() => {
    if (user) {
      console.log("User already logged in:", user);
      router.replace("/");
    }
  }, [user, router]);

  // onAuthStateChange 이벤트로 로그인 후 홈 이동 시도
  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event, session) => {
      console.log("Auth event:", event, session);
      if (event === "SIGNED_IN") {
        router.replace("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [supabaseClient, router]);

  return (
    <div className="h-full flex justify-center items-center">
      <Auth
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          style: {
            container: { width: "300px", margin: 0 },
            button: { width: "298px", paddingLeft: 0, paddingRight: 0 },
            input: { width: "100%" },
          },
        }}
        providers={[]}
        localization={{}}
      />
    </div>
  );
}
