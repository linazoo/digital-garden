import PropTypes from "prop-types";
import { Button as RawButton } from "@mui/material";

function Button({
  label,
  backgroundColor = "red",
  size = "md",
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
    <RawButton onClick={handleClick} style={style}>
      {label}
    </RawButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
