import ScrollButton from '@/components/scroll-button';
import MouseTail from '@/components/mouse-tail';
import WordSphere from '@/components/word-sphere';
import GitHubRepos from '@/components/github-repos';

export default function Home() {
  return (
    <>
      <header className="relative flex items-center overflow-hidden min-h-screen w-full m-0">
        <div className="container z-10">
          <h1 className="text-9xl mb-10">DevOps Engineer & Developer</h1>
          <p className="text-4xl">Jamie S Machon</p>
        </div>
        <ScrollButton />
        <MouseTail className="cursor-crosshair" />
      </header>
      <main>
        <section id="about" className="container flex items-center gap-9 py-20">
          <div>
            <h2 className="text-4xl mb-5">About me</h2>
            <article>
              <p className="text-base mb-2">
                Hi there! My name is Jamie, and I'm a DevOps Engineer and developer. I'm passionate about using
                technology to develop beautiful and elegant software that helps solve problems and make people's lives
                easier. Whether it's automating a tedious task or building a beautiful website, I love the feeling of
                creating something that makes a difference.
              </p>
              <p className="text-base">
                In my free time, you can usually find me tinkering with new technologies or contributing to open-source
                projects. I'm always looking for ways to improve my skills and learn new things, and I believe that the
                best way to do that is by working with others and sharing knowledge.
              </p>
            </article>
          </div>
          <WordSphere className="cursor-grab" />
        </section>
        <section id="projects" className="container py-20">
          <h2 className="text-4xl mb-5">Portfolio</h2>
          <div className="grid grid-cols-4 gap-4">
            <GitHubRepos />
          </div>
        </section>
      </main>
    </>
  );
}
