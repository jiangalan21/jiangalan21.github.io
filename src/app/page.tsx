import Image from "next/image"
import ImageGrid from "../components/ImageGrid"
export default function Home() {

  const myImages = [
    { src: '/album/friends.jpg', alt: 'Photo 1'},
    { src: '/album/switz2.jpeg', alt: 'Photo 2'},
    { src: '/album/italy3.jpeg', alt: 'Photo 3'},
    { src: '/album/golf.jpg', alt: 'Photo 4'},
    { src: '/album/amalfi.jpeg', alt: 'Photo 5'},
    { src: '/album/heaven1.JPG', alt: 'Photo 6'},
    { src: '/album/switz1.jpeg', alt: 'Photo 7'},
    { src: '/album/italy1.jpg', alt: 'Photo 8'},
    { src: '/album/train.jpg', alt: 'Photo 9'},
    { src: '/album/switz4.jpeg', alt: 'Photo 10'},
    { src: '/album/italy2.JPG', alt: 'Photo 11' },
    { src: '/album/heaven2.JPG', alt: 'Photo 12'},
    { src: '/album/switz3.jpeg', alt: 'Photo 13'},
    { src: '/album/heaven3.JPG', alt: 'Photo 14'},
    { src: '/album/flowers.jpeg', alt: 'Photo 15'},
    { src: '/album/switz5.jpeg', alt: 'Photo 16'},
  ]


  return (
    <div className="flex flex-col items-center space-y-20 md-space-y-32">
      
      {/* About Section*/}
      <section id="about" className="w-full px-4 md:px-8 lg:px-16">

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 md:gap-12 md:items-center text-center md:text-left mt-16 md:mt-24" >

          {/* Headshot */}
          <div className="flex justify-center md:justify-end">
            <Image width="64" height="64" className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 2xl:w-110 2xl:h-110 transition-all duration-500 rounded-full object-cover shadow-lg shadow-black/20" src="/alanjiang.JPEG" alt="Alan Jiang Headshot"/>
          </div>

          {/* Information */}
          <div className="flex flex-col space-y-3 max-w-xl mx-auto md:mx-0 md:place-self-start md:self-center">
            <h1 className="leading-tight text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-yellow mb-0 pb-1">Alan Jiang</h1>
            <h2 className="text-xl md:text-2xl gradient-text-yellow">Fullstack Engineer</h2>
            <h3 className="text-base md:text-lg gradient-text-yellow">San Diego, CA</h3>
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
                <button className="cursor-pointer"><Image width="40" height="40" alt="LinkedIn" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"/></button>
              </a>
              <a href="https://github.com/jiangalan21" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer"><Image width="45" height="45" alt="LinkedIn" src="/logos/github.svg"/></button>
              </a>

            </div>

            {/* Import Buttons */}
            <div className="flex flex-col gap-3 md:flex-row md:justify-start">
              <a href="/Alan_Jiang_Resume_2025.pdf" target="_blank" rel="noopener noreferrer" className="button-effect-1"><button className="w-2/3 md:w-auto rounded-xl py-2 md:py-3 px-8 font-bold cursor-pointer">View Resume</button></a>
              <a href="mailto:jiangalan21@gmail.com" className="button-effect-1"><button className="w-2/3 md:w-auto rounded-xl py-2 md:py-3 px-8 font-bold cursor-pointer">Contact Me</button></a>
            </div>
          </div>

        </div>

      </section>

      {/* Project Section */}
      <section className="w-full px-4 md:px-8 lg:px-16 pb-20" id="projects">

        <div className="max-w-7xl mx-auto flex flex-col items-center mt-16 md:mt-24 space-y-12">

          <div className="text-center space-y-3">
            <h1 className="leading-tight text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-yellow pb-1">Projects</h1>
            <h2 className="text-base md:text-lg lg:text-xl">More to come!</h2>
          </div>
          <div className="w-full grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">


            {/* Project Card 1 */}
            <a href="https://www.akpsiatucsd.com/" target="_blank" rel="noopener noreferrer" 
            className="card-effect-5 border rounded-xl hover:scale-105 shadow-xl shadow-black/20 hover:shadow-black/50 transition-all duration-300 ease-in-out">

              <div className="h-full flex flex-col space-y-4 p-6 bg-card rounded-xl relative z-10 items-center">

                <div className="text-center">
                  <h2 className="rounded-4xl bg-subcard py-1 px-5 text-xl font-bold gradient-text-yellow">UCSD Alpha Kappa Psi</h2>
                  <h3 className="text-lg">(Website Revamp)</h3>
                </div>

                <div className="w-full aspect-video bg-[#003366] rounded-xl flex items-center justify-center p-6">
                  <img className="max-w-full max-h-full object-contain" src="/logos/akpsiLogo.png" alt="Alpha Kappa Psi, Nu Xi Chapter"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="flex gap-2 border border-black rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/nextjs.svg" alt="Next.js"/></span><span>Next.js</span></h1>
                  <h1 className="flex gap-2 border border-blue-300 rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/typescript.svg" alt="TypeScript"/></span><span>TypeScript</span></h1>
                  <h1 className="flex gap-2 border border-blue-300 rounded-2xl py-1 px-3"><span><Image className="pt-1" width="22" height="22" src="/logos/tailwind.png" alt="Tailwind"/></span><span>Tailwind</span></h1>
                </div>

                <p className="text-sm md:text-base leading-relaxed flex-grow">Our main goal for this project was to create something that undeniably represents our chapter. 
                  By giving it a more modern look and sleek design, and making sure to paste as many of our memories as we can,   
                  the website captures the true essence of our professional yet fun-filled brotherhood and the members who shape it.</p>
              
              </div>

            </a>

            {/* Project Card 2 */}
            <a href="https://devpost.com/software/zot-confessions" target="_blank" rel="noopener noreferrer" 
            className="card-effect-5 border rounded-xl hover:scale-105 shadow-xl shadow-black/20 hover:shadow-black/50 transition-all duration-300 ease-in-out">

              <div className="h-full flex flex-col space-y-4 p-6 bg-card rounded-xl relative z-10 items-center">

                <div className="text-center">
                  <h2 className="rounded-4xl bg-subcard py-1 px-5 text-xl font-bold gradient-text-yellow">Zot Confessions</h2>
                  <h3 className="text-lg h-7"> (IrvineHacks 2024)</h3>
                </div>

                <div className="w-full aspect-video bg-white rounded-xl flex items-center justify-center p-6 border">
                  <img className="max-w-full max-h-full object-contain" src="/logos/zotconfessions.jpg" alt="ZotConfessions"/>
                </div>

                <div className="w-full flex flex-wrap gap-2 justify-center align-center">
                  <h1 className="flex gap-2 border border-blue-300 rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/react.svg" alt="React Native"/></span><span>React Native</span></h1>
                  <h1 className="flex gap-2 border border-yellow-300 rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/javascript.svg" alt="JavaScript"/></span><span>JavaScript</span></h1>
                  <h1 className="flex gap-2 border border-blue-500 rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/Python.png" alt="Python"/></span><span>Python</span></h1>
                  <h1 className="flex gap-2 border border-black rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/Flask.svg" alt="Flask"/></span><span>Flask</span></h1>
                </div>

                <p className="text-sm md:text-base leading-relaxed flex-grow">Do you go to UC Irvine? Do you also want to post on your school&apos;s confession page? 
                   If your answer was yes to both, Perfect! My team and I created this app to streamline the screening process and get students&apos; confessions out there faster!</p>
              
              </div>

            </a>

            {/* Project Card 3 */}
            <a href="https://github.com/jiangalan21/LevelUpTogether" target="_blank" rel="noopener noreferrer" 
            className="card-effect-5 border rounded-xl hover:scale-105 shadow-xl shadow-black/20 hover:shadow-black/50 transition-all duration-300 ease-in-out">

              <div className="h-full flex flex-col space-y-4 p-6 bg-card rounded-xl relative z-10 items-center">

                <div className="text-center">
                  <h1 className="rounded-4xl bg-subcard py-1 px-5 text-xl font-bold gradient-text-yellow">LevelUpTogether</h1>
                  <h1 className="text-lg h-7"> (LAHacks 2024)</h1>
                </div>

                <div className="w-full aspect-video bg-white rounded-xl flex items-center justify-center p-6 border">
                  <img className="max-w-full max-h-full object-contain" src="/logos/LevelUp_Together.png" alt="LevelUpTogether"/>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <h1 className="flex gap-2 border border-blue-300 rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/react.svg" alt="React"/></span><span>React</span></h1>
                  <h1 className="flex gap-2 border border-yellow-300 rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/javascript.svg" alt="JavaScript"/></span><span>JavaScript</span></h1>
                  <h1 className="flex gap-2 border border-yellow-700 rounded-2xl py-1 px-3"><span><Image width="22" height="22" src="/logos/firebase.png" alt="Firebase"/></span><span>Firebase</span></h1>
                </div>

                <p className="text-sm md:text-base leading-relaxed flex-grow">The key to making progress in the gym is accountability.
                  LevelUpTogether is a platform that we made with the hopes for people to keep track of every rep of every set for any exercise you can think of, 
                  we take care of the remembering so that you can spend more time pushing forward.</p>
              
              </div>

            </a>

          </div>

        </div>
        
      </section>

      <section id="stuff" className="w-full px-4 md:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center mt-16 md:mt-24 space-y-12">
          <div className="text-center space-y-3">
            <h1 className="leading-tight text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-yellow">Stuff</h1>
            <h2 className="text-base md:text-lg lg:text-xl">Some other cool things</h2>
          </div>

          <div className="w-full text-left">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">Fun Facts</h2>
            <br></br>
            <ul className="text-sm md:text-base lg:text-lg">
              <li>- I like to stay active by going to the gym, swimming, running, rock climbing, and snowboarding</li>
              <li>- I speak Cantonese and Mandarin (not perfect, but getting there)</li>
              <li>- I fell off a cliff and had no major injuries</li>
            </ul>
          </div>

          <div className="w-full text-left">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">Photo Album</h2>
            <h3 className="text-sm md:text-base lg:text-lg">Some photos I&apos;ve taken</h3>
          </div>

          <ImageGrid images={myImages} columns={4} gap={3} />
        </div>

      </section>

    </div>
  );
}
