// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-4xl font-bold text-center">My Projects</h1>
      <p className="text-lg text-gray-700 leading-relaxed text-center">
        Here's a collection of projects I've worked on, showcasing my skills in
        software development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
            image={project.image} // Pass image to ProjectCard
          />
        ))}
      </div>
    </section>
  );
}
