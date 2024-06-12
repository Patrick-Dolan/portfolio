import SectionContainer from "../shared/SectionContainer";

function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SectionContainer>
        <h2 className="text-center text-3xl mb-2 font-bold uppercase">About Me</h2>
        <p className="text-center text-sm">A Little Bit About Myself</p>
      </SectionContainer>
    </section>
  )
}

export default AboutSection;