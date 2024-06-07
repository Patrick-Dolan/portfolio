import PropTypes from "prop-types";

function Button({ text, type, onClick, className }) {
  return (
    <button 
      className={`uppercase tracking-wider font-bold min-w-40 text-sm py-4 max-h-12 flex items-center justify-center text-white bg-secondary rounded-xl ${className}`} 
      type={type} 
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Button;