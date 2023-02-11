import React, { Component } from "react";
import { Button } from "./style";

const ButtonConst = {
  secondary: { background: "#b1adeb", color: "#c1c0c0" },
  primary: { background: "#fff" , color: "#c1c0c0", },//"#e2e2e2"
  answer: { background: "green", color: "#fff" },
  decline: { background: "red", color: "#fff" },
};
class FormButton extends Component {
  render() {
    const { children, htmlType, color, onClick, className, disabled } =
      this.props;
    return (
      <Button
        bgcolor={ButtonConst[color]}
        type={htmlType}
        onClick={onClick}
        className={className}
        disabled={disabled ? disabled : false}
      >
        {children}
      </Button>
    );
  }
}
FormButton.defaultProps = {
  text: "Button",
  color: "primary",
  htmlType: "button",
  className: "",
  handleClick: () => {},
};
export default FormButton;
