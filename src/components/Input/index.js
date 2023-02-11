import React, { Component } from "react";
import { Input } from "antd";

import { FormWrapper } from "./style";
const { TextArea } = Input;
class FormInput extends Component {
  render() {
    const {
      handleChange,
      className,
      size,
      formClass,
      row,
      password,
      maxLength,
      ...props
    } = this.props;
    let length = maxLength ? maxLength : 255;
    return (
      <FormWrapper className={formClass ? formClass : ""}>
        {row ? (
          <TextArea
            rows={row}
            onChange={handleChange}
            className={`form-control ${className}`}
            maxLength={1026}
            {...props}
          />
        ) : password ? (
          <Input.Password
            size={size}
            onChange={handleChange}
            className={`form-control ${className}`}
            autoComplete="off"
            maxLength={length}
            {...props}
          />
        ) : (
          <Input
            size={size}
            onChange={handleChange}
            className={`form-control ${className}`}
            maxLength={length}
            {...props}
          />
        )}
      </FormWrapper>
    );
  }
}
FormInput.defaultProps = {
  size: "middle",
  placeholder: "",
  tabIndex: "1",
  className: "",
  readOnly: false,
};
export default FormInput;
