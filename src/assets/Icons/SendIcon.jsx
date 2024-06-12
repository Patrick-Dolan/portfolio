import PropTypes from "prop-types";

function SendIcon({fill = "#e8eaed", height = "22px", width = "22px"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 -960 960 960"  fill={fill}>
      <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
    </svg>
  )
}

SendIcon.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default SendIcon;