import Project from "../projects/ProjectCard";
import SectionContainer from "../shared/SectionContainer";

function ProjectsSection() {
  // TODO replace placeholder images 
  const projects = [
    { 
      title: "Audiophile E-Commerce Website", 
      description: "An e-commerce website for purchasing high quality audio equipment.", 
      imgURL: "https://picsum.photos/200",
      liveURL: "https://patrick-dolan.github.io/audiophile-ecommerce-website/",
      codeURL: "https://github.com/Patrick-Dolan/audiophile-ecommerce-website",
    },
    { 
      title: "Designo Agency Website", 
      description: "A design agency website showcasing a range of creative services.", 
      imgURL: "https://picsum.photos/200",
      liveURL: "https://patrick-dolan.github.io/designo-website/",
      codeURL: "https://github.com/Patrick-Dolan/designo-website",
    },
    { 
      title: "Space Tourism Website", 
      description: "A space tourism website where you can view destinations, the crew, and technology.", 
      imgURL: "https://picsum.photos/200",
      liveURL: "https://patrick-dolan.github.io/space-tourism-website/",
      codeURL: "https://github.com/Patrick-Dolan/space-tourism-website",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary text-white">
      <SectionContainer>
        <h2 className="text-center text-3xl mb-2 font-bold uppercase">Projects</h2>
        <p className="text-center text-sm mb-8">From Concept to Completion: My Work Portfolio</p>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <Project 
              key={index} 
              project={project}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}

export default ProjectsSection;