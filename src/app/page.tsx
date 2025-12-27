import Image from "next/image"
export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-20 md-space-y-32">
      
      {/* About Section*/}
      <section id="about" className="w-full px-4 md:px-8 lg:px-16">

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 md:gap-12 md:items-center text-center md:text-left mt-16 md:mt-24" >

          {/* Headshot */}
          <div className="flex justify-center md:justify-end">
            <Image className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 2xl:w-110 2xl:h-110 transition-all duration-500 rounded-full object-cover shadow-lg shadow-black/20" src="/alanjiang.JPEG" alt="Alan Jiang Headshot"/>
          </div>

          {/* Information */}
          <div className="flex flex-col space-y-3 max-w-xl mx-auto md:mx-0 md:place-self-start md:self-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Alan Jiang</h1> {/**add some effect? */}
            <h2 className="text-xl md:text-2xl">Fullstack Engineer</h2>
            <div className="text-sm md:text-base leading-relaxed">
              <p>Hello, my name is Alan Jiang. I am a third-year studying Computer Science at UC San Diego with a strong interest in software engineering.</p>
              <br></br>
              <p>
                I pride myself on self-discipline and hard work above all. 
                Whether that be developing projects for startups, leading initiatives in my professional fraternity, competing in hackathons, 
                or tackling challenging courses, I focus on building career-relevant skills and consistently pushing myself to improve. 
              </p>
            </div>
            {/* Links */}
            <div className="flex space-x-3 justify-center md:justify-start pt-2">

              <a href="https://www.linkedin.com/in/alan-jiang21/" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer">LinkedIn</button>
              </a>
              <a href="https://github.com/jiangalan21" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer">GitHub</button>
              </a>

            </div>

            {/* Import Buttons */}
            <div className="flex flex-col gap-3 md:flex-row md:justify-start">
              <a href="" className=""><button className="w-2/3 md:w-auto border-2 rounded-xl py-2 md:py-3 px-8 font-bold hover:bg-gray-100 hover:text-black transition-colors cursor-pointer">View Resume</button></a>
              <a href="mailto:jiangalan21@gmail.com"><button className="w-2/3 md:w-auto border-2 rounded-xl py-2 md:py-3 px-8 font-bold hover:bg-gray-100 hover:text-black transition-colors cursor-pointer">Contact Me</button></a>
            </div>
          </div>

        </div>

      </section>

      {/* Project Section */}
      <section className="w-9/10 px-4 md:px-8 lg:px-16 pb-20" id="projects">

        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">

          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h1>

          <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">

            {/* Project Card 1 */}
            <a href="https://www.akpsiatucsd.com/" target="_blank" rel="noopener noreferrer" 
            className="border rounded-xl hover:scale-105 shadow-xl shadow-black/20 hover:shadow-black/50 transition-all duration-300 ease-in-out">

              <div className="h-full flex flex-col space-y-4 p-6">

                <div className="text-center">
                  <h2 className="text-xl font-bold">UCSD Alpha Kappa Psi</h2>
                  <h3 className="text-lg">(Website Revamp)</h3>
                </div>

                <div className="w-full aspect-video bg-[#003366] rounded-xl flex items-center justify-center p-6">
                  <img className="max-w-full max-h-full object-contain" src="/akpsiLogo.png" alt="Alpha Kappa Psi, Nu Xi Chapter"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>Next.js</h1>
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>TypeScript</h1>
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>Tailwind</h1>
                </div>

                <p className="text-sm md:text-base leading-relaxed flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, molestiae ea a totam harum facilis dolor nostrum magnam officiis aspernatur debitis pariatur ullam vitae numquam? Rerum ullam aspernatur ex.</p>
              
              </div>

            </a>

            {/* Project Card 2 */}
            <a href="https://devpost.com/software/zot-confessions" target="_blank" rel="noopener noreferrer" 
            className="border rounded-xl hover:scale-105 shadow-xl shadow-black/20 hover:shadow-black/50 transition-all duration-300 ease-in-out">

              <div className="h-full flex flex-col space-y-4 p-6">

                <div className="text-center">
                  <h2 className="text-xl font-bold">Zot Confessions</h2>
                  <h3 className="text-lg font-bold h-7"></h3>
                </div>

                <div className="w-full aspect-video bg-white rounded-xl flex items-center justify-center p-6 border">
                  <img className="max-w-full max-h-full object-contain" src="/zotconfessions.jpg" alt="ZotConfessions"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>React Native</h1>
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>JavaScript</h1>
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>Python</h1>
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>Flask</h1>
                </div>

                <p className="text-sm md:text-base leading-relaxed flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, molestiae ea a totam harum facilis dolor nostrum magnam officiis aspernatur debitis pariatur ullam vitae numquam? Rerum ullam aspernatur ex.</p>
              
              </div>

            </a>

            {/* Project Card 3 */}
            <a href="" target="_blank" rel="noopener noreferrer" 
            className="border rounded-xl hover:scale-105 shadow-xl shadow-black/20 hover:shadow-black/50 transition-all duration-300 ease-in-out">

              <div className="h-full flex flex-col space-y-4 p-6">

                <div className="text-center">
                  <h1 className="text-xl font-bold">LevelUpTogether</h1>
                  <h1 className="text-lg font-bold h-7"></h1>
                </div>

                <div className="w-full aspect-video bg-white rounded-xl flex items-center justify-center p-6 border">
                  <img className="max-w-full max-h-full object-contain" src="/LevelUp_Together.png" alt="LevelUpTogether"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>React</h1>
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>JavaScript</h1>
                  <h1 className="border rounded-2xl py-1 px-3"><span>☰</span>Firebase</h1>
                </div>

                <p className="text-sm md:text-base leading-relaxed flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt, molestiae ea a totam harum facilis dolor nostrum magnam officiis aspernatur debitis pariatur ullam vitae numquam? Rerum ullam aspernatur ex.</p>
              
              </div>

            </a>

          </div>

        </div>
        
      </section>

    </div>
  );
}
