import PropTypes from "prop-types";

function Button({ text, type, onClick, className, icon }) {
  return (
    <button 
      className={`uppercase tracking-wider font-bold min-w-40 text-sm py-4 max-h-12 flex items-center justify-center text-white bg-secondary rounded-xl ${className}`} 
      type={type} 
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {text}
        {icon && icon}
      </div>
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
}

export default Button;