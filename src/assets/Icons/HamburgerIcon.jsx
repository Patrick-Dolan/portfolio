import PropTypes from "prop-types";

function HamburgerIcon({ fill = "#e8eaed", height = "28px", width = "28px"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960" fill={fill}>
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
  )
}

HamburgerIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default HamburgerIcon;