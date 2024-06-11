import PropTypes from "prop-types";
import Button from "../shared/Button";
import WebIcon from "../../assets/Icons/WebIcon";
import GitHubIcon from "../../assets/Icons/GitHubIcon";

function ProjectCard({ project }) {
  const { imgPath, title, description, liveURL, codeURL} = project;

  return (
    <article className="flex flex-col text-center bg-primary-light rounded-xl shadow-lg">
      <img src={imgPath} alt="" className="mx-auto w-full max-h-60 object-cover rounded-t-xl" />
      <div className="px-6 py-8">
        <h3 className="text-2xl mb-3 font-bold">{title}</h3>
        <p>{description}</p>
        <div className="mt-8 space-y-2">
          <a className="inline-block" href={liveURL} target="_blank">
            <Button text="View Website" type="button" icon={<WebIcon />} />
          </a>
          <br />
          <a className="inline-block" href={codeURL} target="_blank">
            <Button text="View Code" type="button" icon={<GitHubIcon />} />
          </a>
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveURL: PropTypes.string.isRequired,
    codeURL: PropTypes.string.isRequired
  }).isRequired,
}

export default ProjectCard;