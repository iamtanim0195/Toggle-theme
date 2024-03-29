import Collection from "@/components/Collection/Collection";
import Navbar from "@/components/Navbar/Navbar";
import Sports from "@/components/Sports/Sports";

export default function Home() {
  return (
    <main className="dark:bg-[#292B32]">
      <div className="px-10">
        <Navbar />
        <Sports />
        <Collection />
      </div>
    </main>

  );
}
