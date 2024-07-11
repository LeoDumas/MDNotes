import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className=" text-center">
        <p>This is the landing page</p>
        <Link href="/notes">
          <Button size="lg" className=" text-lg font-medium">
            Notes
          </Button>
        </Link>
      </div>
    </main>
  );
}
