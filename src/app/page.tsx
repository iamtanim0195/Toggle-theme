import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ThemeSwitch></ThemeSwitch>
      <h1>sweet</h1>
      <h1 className=" text-red-400 dark:text-purple-600">Home</h1>
    </main>

  );
}
