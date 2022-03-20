import PropTypes from "prop-types";
import "./styles.css";

function Button({
  label,
  backgroundColor = "#368E59",
  size = "lg",
  handleClick,
  textColor = "white",
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    color: textColor,
  };
  return (
    <button className="button" onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.oneOf([
    "#368E59",
    "#DC8858",
    "#C06C98",
    "#D31C34",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
