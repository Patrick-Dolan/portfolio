import SectionContainer from "../shared/SectionContainer";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 text-center">
      <SectionContainer>
        <a href="#hero-section">
          <p className="font-bold text-2xl">Patrick Dolan</p>
        </a>
        <ul className="uppercase text-sm my-6 flex justify-center gap-6">
          <li><a href="#projects" className="tracking-widest hover:text-secondary">Projects</a></li>
          <li><a href="#about" className="tracking-widest hover:text-secondary">About</a></li>
          <li><a href="#contact" className="tracking-widest hover:text-secondary">Contact</a></li>
        </ul>
        <hr className="border-secondary-light opacity-50" />
        <p className="py-10">This site was built using React, TailwindCSS, and Firebase. If you would like to check out the code you can see it <a href="https://github.com/Patrick-Dolan/portfolio" target="_blank" className="text-secondary underline">here</a>.</p>
        <p>Copyright &copy; {currentYear} Patrick Dolan</p>
      </SectionContainer>
    </footer>
  )
}

export default Footer;