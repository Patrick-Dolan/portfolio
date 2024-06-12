import PropTypes from "prop-types";
// import Button from "../shared/Button";
import WebIcon from "../../assets/Icons/WebIcon";
import GitHubIcon from "../../assets/Icons/GitHubIcon";

function ProjectCard({ project }) {
  const { backgroundClass, title, description, liveURL, codeURL, logoPath } = project;

  return (
    <article className={`flex flex-col justify-end text-center shadow-lg max-w-87.5 h-125 bg-white bg-cover bg-no-repeat ${backgroundClass}`}>
      <img src={logoPath} alt={`${title} logo picture`} className="m-auto max-w-52" />
      <div className="px-6 py-8 bg-primary-light bg-opacity-50 backdrop-blur-md">
        <h3 className="text-xl mb-3 font-bold">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between mt-6">
          <a className="uppercase border border-secondary-light bg-secondary-light bg-opacity-60 rounded-lg p-2 text-sm flex items-center gap-2 hover:opacity-60" href={liveURL} target="_blank">
            Live Site 
            <WebIcon />
          </a>
          <a className="uppercase border border-secondary-light bg-secondary-light bg-opacity-60 rounded-lg p-2 text-sm flex items-center gap-2 hover:opacity-60" href={codeURL} target="_blank">
            Source Code 
            <GitHubIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    backgroundClass: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveURL: PropTypes.string.isRequired,
    codeURL: PropTypes.string.isRequired,
    logoPath: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectCard;