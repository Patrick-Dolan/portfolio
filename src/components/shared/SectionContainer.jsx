import PropTypes from "prop-types";

function SectionContainer({ children }) {
  return (
    <div className="px-6 md:px-0 md:max-w-172 md:mx-auto lg:max-w-277">
      {children}
    </div>
  )
}

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionContainer;