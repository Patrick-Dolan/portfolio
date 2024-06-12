import SectionContainer from "../shared/SectionContainer";

function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionContainer>
        <img src="/assets/sillypic.jpg" alt="Patrick in a duck costume with hands on hips." className="mx-auto mb-10 rounded-3xl  shadow-xl" />
        <div className="border border-primary-light rounded-xl px-4 py-8">
          <h2 className="text-center text-3xl mb-2 font-bold uppercase">About Me</h2>
          <p className="text-center text-sm mb-4">A Little Bit About Myself</p>
          <div className="space-y-3 text-center">
            <p>Hi, I&apos;m Patrick. I began my web development journey in 2021, though my passion for technology started in childhood with my first video game. This early fascination led me to freelance in computer support and digital art, building and repairing systems, and creating assets for online creators and small businesses.</p>
            <p>Diving into web development, I discovered an endless enthusiasm for building useful and engaging websites. Currently, I teach full stack web development at Fidgetech, helping autistic adults develop their coding skills.</p>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default AboutSection;