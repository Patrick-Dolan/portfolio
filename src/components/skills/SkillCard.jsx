import PropTypes from "prop-types";

function SkillCard({ iconComponent, title }) {
  return (
    <div className="space-y-2 w-20 md:w-28 lg:w-24">
      {iconComponent}
      <p className="text-center font-medium md:text-xl">{title}</p>
    </div>
  )
}

SkillCard.propTypes = {
  iconComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default SkillCard;