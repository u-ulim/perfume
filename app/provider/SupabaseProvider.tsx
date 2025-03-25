// app/components/SupabaseProvider.tsx
"use client";

import { useState } from "react";

import { ReactNode } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

export function SupabaseProvider({ children }: { children: ReactNode }) {
  const [supabaseClient] = useState(() => createClientComponentClient());
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
