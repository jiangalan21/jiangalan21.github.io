export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-50">

      <section id="about">

        <div className="min-w-md grid gap-4 md:grid-cols-2 md:gap-12 md:items-center text-center md:text-left mt-25" >

          <div className="">
            <img className="w-80 h-80 md:place-self-end 2xl:w-110 2xl:h-110 transition-all duration-500 place-self-center rounded-full object-cover" src="/alanjiang.JPEG"/>
          </div>

          <div className="w-3/5 flex flex-col place-self-center md:max-lg:w-4/5 xl:w-7/10 md:place-self-start md:self-center space-y-5">
            <h1 className="text-5xl md:text-6xl">Alan Jiang</h1> {/**add some effect? */}
            <h1 className="text-2xl">Fullstack Engineer</h1>
            <p>Hello, my name is Alan Jiang, a third-year Computer Science major at UC San Diego.</p>

            <div className="flex space-x-2 justify-center md:justify-start">

              <a href="https://www.linkedin.com/in/alan-jiang21/" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer">LinkedIn</button>
              </a>
              <a href="https://github.com/jiangalan21" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer">GitHub</button>
              </a>

            </div>

            <div className="flex max-md:flex-col space-y-3 md:space-x-3">
              <a href=""><button className="w-46 border-2 rounded-xl py-3 px-8 font-bold cursor-pointer">Explore my CV</button></a>
              <a href="mailto:jiangalan21@gmail.com"><button className="w-46 border-2 rounded-xl py-3 px-8 font-bold cursor-pointer">Contact Me</button></a>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full h-850 mb-40" id="projects">

        <div className="h-full flex flex-col items-center space-y-15 mt-25">

          <h1 className="text-6xl font-bold">Projects</h1>

          <div className="w-4/8 grid gap-y-10 md:grid-cols-2 justify-items-center">
            <a href="https://akpsiucsd.com" target="_blank" rel="noopener noreferrer" 
            className="w-3/4 min-h-1/6 max-w-150 border-2 rounded-xl hover:scale-105 transition duration-500 delay-75">

              <div className="h-full flex flex-col items-center space-y-3 p-5">

                <div className="text-center">
                  <h1 className="text-xl font-bold">UCSD Alpha Kappa Psi</h1>
                  <h1 className="text-lg font-bold">(Website Revamp)</h1>
                </div>

                <div className="w-9/10 h-1/2 flex flex-col item-center justify-center bg-[#003366] px-5 object-contain rounded-xl">
                  <img className="w-4/5 h-4/5 self-center object-contain" src="/akpsiLogo.png"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>Next.js</h1>
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>TypeScript</h1>
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>Tailwind</h1>
                </div>

                <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, molestiae ea a totam harum facilis dolor nostrum magnam officiis aspernatur debitis pariatur ullam vitae numquam? Rerum ullam aspernatur ex.</p>
              
              </div>

            </a>

            <a href="https://devpost.com/software/zot-confessions" target="_blank" rel="noopener noreferrer" 
            className="w-3/4 min-h-1/6 max-w-150 border-2 rounded-xl hover:scale-105 transition duration-500 delay-75">

              <div className="h-full flex flex-col items-center space-y-3 p-5">

                <div className="text-center">
                  <h1 className="text-xl font-bold">Zot Confessions</h1>
                  <h1 className="text-lg font-bold">(React Native)</h1>
                </div>

                <div className="w-9/10 h-1/2 flex flex-col item-center justify-center bg-[#ffffff] px-5 object-contain rounded-xl">
                  <img className="w-4/5 h-4/5 self-center object-contain" src="/zotconfessions.jpg"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>React Native</h1>
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>JavaScript</h1>
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>Python</h1>
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>Flask</h1>
                </div>

                <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, molestiae ea a totam harum facilis dolor nostrum magnam officiis aspernatur debitis pariatur ullam vitae numquam? Rerum ullam aspernatur ex.</p>
              
              </div>

            </a>

            <a href="https://devpost.com/software/zot-confessions" target="_blank" rel="noopener noreferrer" 
            className="w-3/4 min-h-1/6 max-w-150 border-2 rounded-xl hover:scale-105 transition duration-500 delay-75">

              <div className="h-full flex flex-col items-center space-y-3 p-5">

                <div className="text-center">
                  <h1 className="text-xl font-bold">LevelUpTogether</h1>
                  <h1 className="text-lg font-bold"></h1>
                </div>

                <div className="w-9/10 h-1/2 flex flex-col item-center justify-center bg-[#ffffff] px-5 object-contain rounded-xl">
                  <img className="w-4/5 h-4/5 self-center object-contain" src="/zotconfessions.jpg"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>React Native</h1>
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>JavaScript</h1>
                  <h1 className="border-1 rounded-2xl py-1 px-4"><span>☰</span>Firebase</h1>
                </div>

                <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, molestiae ea a totam harum facilis dolor nostrum magnam officiis aspernatur debitis pariatur ullam vitae numquam? Rerum ullam aspernatur ex.</p>
              
              </div>

            </a>

          </div>

        </div>
        
      </section>

    </div>
  );
}
