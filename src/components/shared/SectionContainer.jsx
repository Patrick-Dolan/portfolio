import PropTypes from "prop-types";

function SectionContainer({ children }) {
  return (
    <div className="px-6">
      {children}
    </div>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionContainer;