import React, { Component } from "react";
import * as Yup from "yup";
import { Spin } from "antd";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { LoginStyle } from "./style";
import { LoginConst } from "./constant";
import { login } from "redux/login/actions";
import { Label, Input, Button } from "components/Form";

const ValidationSchema = Yup.object().shape({
  user: Yup.string().trim().nullable().required(" "),
  password: Yup.string().trim().min(3).required(" "),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { disable: false };
  }
  handleSubmit = async (values, { setSubmitting }) => {
    try {
      this.setState({ disable: true });
      setTimeout(() => this.setState({ disable: false }), 5000);
      let postdata = {
        username: values.user.trim(),
        password: values.password.trim(),
      };
      await this.props.login(postdata);
      setSubmitting(false);
    } catch (error) {
      console.log(error, "handle error");
    }
  };
  render() {
    const { disable } = this.state;
    const { loading } = this.props;
    return (
      <Spin spinning={loading} size="large">
        <LoginStyle>
          <div className="box">
            <h1 className="head">{LoginConst.login}</h1>
            <Formik
              initialValues={{ user: "", password: "" }}
              validationSchema={ValidationSchema}
              onSubmit={this.handleSubmit}
              enableReinitialize
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <Form onSubmit={handleSubmit} noValidate>
                  <div className="inputdiv login">
                    <Label
                      title={LoginConst.user}
                      className={errors.user && touched.user ? "empty" : ""}
                    />
                    <Input
                      name="user"
                      value={values.user}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={255}
                      tabIndex="1"
                      className={errors.user && touched.user ? "empty" : ""}
                    />
                    {errors.user && touched.user ? (
                      <div className="form-error">{errors.user}</div>
                    ) : null}
                  </div>
                  <div className="inputdiv">
                    <Label
                      title={LoginConst.password}
                      className={
                        errors.password && touched.password ? "empty" : ""
                      }
                    />
                    <Input
                      password
                      maxLength={25}
                      onBlur={handleBlur}
                      name="password"
                      autoComplete="new-password"
                      value={values.password}
                      handleChange={handleChange}
                      tabIndex="2"
                      className={
                        errors.password && touched.password ? "empty" : ""
                      }
                    />
                    {errors.password && touched.password ? (
                      <div className="form-error">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="btntDiv">
                    <Button htmlType="submit" disabled={disable}>
                      {LoginConst.login}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </LoginStyle>
      </Spin>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.login.loading,
  error: state.login.error,
  message: state.login.message,
});
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
