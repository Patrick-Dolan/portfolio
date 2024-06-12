import PropTypes from "prop-types";

function SkillCard({ iconComponent, title }) {
  return (
    <div className="space-y-2 w-20">
      {iconComponent}
      <p className="text-center font-medium">{title}</p>
    </div>
  )
}

SkillCard.propTypes = {
  iconComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default SkillCard;