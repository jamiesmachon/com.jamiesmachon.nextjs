import ScrollButton from '@/components/scroll-button';
import MouseTail from '@/components/mouse-tail';
import WordSphere from '@/components/word-sphere';
import GitHubRepos from '@/components/github-repos';
import ContactForm from '@/components/contact-form';

export default function Home() {
  return (
    <>
      <header className="relative flex items-center overflow-hidden min-h-screen w-screen m-0">
        <div className="container z-10">
          <h1 className="text-3xl md:text-7xl xl:text-9xl mb-10">DevOps Engineer &amp; Developer</h1>
          <p className="text-2xl md:text-4xl xl:text-6xl">Jamie S Machon</p>
        </div>
        <ScrollButton scrollTo="#about" className="absolute bottom-5 left-0 right-0 z-10 text-center" />
        <MouseTail className="cursor-crosshair" />
      </header>
      <main>
        <section id="about" className="container items-center md:py-20 py-10 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-4 lg:mb-0 mb-9">
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
          <div className="lg:w-1/2 lg:pl-4">
            <WordSphere className="cursor-grab" />
          </div>
        </section>

        <section id="projects" className="container md:py-20 py-10">
          <h2 className="text-4xl mb-5">Portfolio</h2>
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <GitHubRepos />
          </div>
        </section>

        <section id="contact" className="container md:py-20 py-10">
          <h2 className="text-4xl mb-5">Contact</h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
