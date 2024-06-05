import PropTypes from "prop-types";

function CloseIcon({ fill = "#e8eaed", height = "28px", width = "28px" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960"  fill={fill}>
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  )
}

CloseIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default CloseIcon