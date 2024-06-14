import ProjectCard from "../projects/ProjectCard";
import SectionContainer from "../shared/SectionContainer";

function ProjectsSection() {
  const projects = [
    { 
      title: "Audiophile E-Commerce Website", 
      description: "An e-commerce website for purchasing high quality audio equipment.", 
      backgroundClass: "bg-audiophile-card bg-right",
      logoPath: "/assets/projects/audiophile-ecommerce/audiophile-logo.svg",
      liveURL: "https://patrick-dolan.github.io/audiophile-ecommerce-website/",
      codeURL: "https://github.com/Patrick-Dolan/audiophile-ecommerce-website",
    },
    { 
      title: "Designo Agency Website", 
      description: "A design agency website showcasing a range of creative services.", 
      backgroundClass: "bg-designo-card bg-center",
      logoPath: "/assets/projects/designo-company/designo-logo.png",
      liveURL: "https://patrick-dolan.github.io/designo-website/",
      codeURL: "https://github.com/Patrick-Dolan/designo-website",
    },
    { 
      title: "Space Tourism Website", 
      description: "A space tourism website where you can view destinations, the crew, and technology.", 
      backgroundClass: "bg-space-tourism-card bg-bottom",
      logoPath: "/assets/projects/space-tourism/space-tourism-logo.svg",
      liveURL: "https://patrick-dolan.github.io/space-tourism-website/",
      codeURL: "https://github.com/Patrick-Dolan/space-tourism-website",
    },
  ];

  const mainCardStyles = "md:col-span-2 md:h-150 md:min-w-172 md:bg-left lg:bg-center lg:col-span-1 lg:min-w-0 lg:h-125";

  return (
    <section id="projects" className="py-24 bg-primary text-white">
      <SectionContainer>
        <h2 className="text-center text-3xl mb-2 font-bold uppercase">Projects</h2>
        <p className="text-center text-sm mb-8 md:text-base">From Concept to Completion: My Work Portfolio</p>
        <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
              className={index === 0 && projects.length % 2 !== 0 ? mainCardStyles : ""}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}

export default ProjectsSection;