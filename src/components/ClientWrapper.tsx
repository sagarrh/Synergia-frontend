"use client"; // This component will handle client-side logic

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/component/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
      } else {
        setUser(data?.user || null);
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    getUser(); // Get the user on the initial load

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      {/* <NavbarDemo user={user} /> */}
      <NavbarDemo />
      {children}
      <Footer />
    </>
  );
}
