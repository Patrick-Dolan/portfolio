import SectionContainer from "../shared/SectionContainer";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <SectionContainer>
        <p className="text-center">Copyright &copy; {currentYear} Patrick Dolan</p>
      </SectionContainer>
    </footer>
  )
}

export default Footer;