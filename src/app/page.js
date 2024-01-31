import { Navbar } from "@/components/Navbar";
import { AddContact } from "@/components/AddContact";
import { ListContact } from "@/components/ListContact";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <section className="bg-slate-50 h-screen">
        <Navbar />
        <AddContact />
        <ListContact />
      </section>
    </>
  );
}
