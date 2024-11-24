'use client'

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button"; // Importing shadcn/ui's Button
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { type CarouselApi } from "@/components/ui/carousel"
import React from "react";

export default function HomePage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", () => {
      // Do something on select.
    })
  }, [api])
  
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg w-1/2">
      I'm Ioannis Chatzianagnostou, a versatile Software Engineer with professional experience in Frontend Web Development
       and a deep passion for all things audio.
      </p>
      <div className="flex flex-col items-center justify-center w-full space-y-4">
        <div className="relative w-full h-48">
          <Image
            src="/images/ProfPic.png"
            alt="Profile Picture"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="space-x-6">
          <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/about">
              About Me
          </Link>
          <Link className={buttonVariants({ variant: "default", size: "default" })} href="/projects">
              My Projects
          </Link>
        </div>
        <Carousel
          opts={{align: "start"}}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={project.title}
                className="md:basis-1/2 lg:basis-1/3 transition-transform duration-300"
              >
                <div className="p-1">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    image={project.image}
                    demoLink={project.demoLink}
                    githubLink={project.githubLink}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
