// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      {/* Brief Introduction */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hi there! I’m Ioannis, a Software Engineer with a passion for building innovative solutions, particularly in Frontend Web Development and audio-related technologies. 
        </p>
        <p>
          I’m always excited to tackle challenges, learn new skills, and combine technical expertise with creativity to make impactful contributions. When I’m not coding, you’ll find me immersed in art or music!
        </p>
      </section>

      {/* Software Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Software Skills</h2>
        <p className="mb-4">
          I’m proficient in a variety of technologies, programming languages, and frameworks, including:
        </p>
        <ul className="list-disc list-inside">
          <li>Programming Languages: JavaScript, TypeScript, Python, C++, Kotlin, Rust</li>
          <li>Frontend Frameworks: React.js, Next.js, Angular2</li>
          <li>Other: Digital Signal Processing (DSP), Audio Programming, Git, Docker</li>
        </ul>
      </section>

      {/* Interests Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interests</h2>
        <p className="mb-4">
          My interests revolve around technology, art, and music. Here are a few areas that inspire me:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Audio:</strong> Exploring computational modeling of auditory perception, audio programming, and audio mixing/mastering.
          </li>
          <li>
            <strong>Drawing & Painting:</strong> I love sketching and painting, which helps me relax and express my creativity in a non-technical way.
          </li>
          <li>
            <strong>Playing the Electric Guitar:</strong> Music is a big part of my life, and playing the guitar gives me a creative outlet.
          </li>
        </ul>
      </section>

      {/* Fun Fact Section */}
       <div className="p-7 bg-gray-100 rounded-md shadow-md text-center">
         <h2 className="text-xl font-semibold mb-2">Fun Fact</h2>
         <p className="text-gray-701">
           I’m currently pursuing a PhD in computational modeling of auditory perception, 
           combining psycho-physical methods, imaging techniques, and programming to study 
           how people perceive timbre! 
         </p>
       </div>

      {/* Artistic Showcase Section */}
      <section className="my-8">
        {/* Sketches and Drawings */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Sketching & Drawing</h3>
          <p className="mb-4">
            Here are a couple of my favorite drawings that capture my artistic journey:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="/images/watercolor1.jpg"
              alt="Watercolor Painting"
              width={400}
              height={300}
              className="rounded-lg shadow"
            />
            <Image
              src="/images/drawing1.jpg"
              alt="Sketch Drawing"
              width={400}
              height={300}
              className="rounded-lg shadow"
            />
          </div>
        </div>

        {/* Guitar Performance */}
        <div>
          <h3 className="text-xl font-medium mb-2">Playing the Electric Guitar</h3>
          <p className="mb-4">
            Here’s a video of one of my guitar performances that I’m proud to share:
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/hRu6l94keqg?si=PSjoE5zPBYCMXpzn" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
              </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}


 