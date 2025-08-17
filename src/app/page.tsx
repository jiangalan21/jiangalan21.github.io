import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-500">
    
      <section className="grid gap-8 md:grid-cols-2 md:items-center text-center md:text-left mt-14" id="home">
        <div>
          <img className="w-80 h-80 2xl:w-160 2xl:h-160 rounded-full object-cover" src="/alanjiang.JPEG"/>
        </div>
        <div className="">
          <p>Hello! My name is</p>
          <h1 className="text-4xl font-medium mt-1 mb-2">Alan Jiang</h1>
          <div className="flex justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/alan-jiang21/">
              <button className="cursor-pointer">LinkedIn</button>
            </a>
          </div>
        </div>
      </section>

      <section id="projects">
        <div>
          <p>Projects</p>
        </div>
      </section>

    </div>
  );
}
