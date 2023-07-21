import ScrollButton from "@/components/scroll-button";
import MouseTail from "@/components/mouse-tail";
import WordSphere from "@/components/word-sphere";

export default function Home() {
  return (
    <main>
      <header className="flex items-center overflow-hidden min-h-screen w-full relative m-0">
        <div className="m-0 z-10">
          <h1 className="text-4xl">Jamie S Machon</h1>
          <p className="text-2xl">DevOps Engineer</p>
        </div>
        <ScrollButton />
        <MouseTail />
      </header>
      <section className="flex items-center">
          <WordSphere />
      </section>
    </main>
  );
}
