import Collection from "@/components/Collection/Collection";
import Navbar from "@/components/Navbar/Navbar";
import Sports from "@/components/Sports/Sports";

export default function Home() {
  return (
    <main className="mx-10">
      <Navbar />
      <Sports />
      <Collection />
    </main>

  );
}
