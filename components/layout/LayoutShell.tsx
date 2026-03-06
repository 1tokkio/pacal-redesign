"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const STANDALONE_PATHS = ["/login"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PATHS.includes(pathname);

  if (isStandalone) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  );
}
