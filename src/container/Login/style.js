import styled from "styled-components";

const LoginStyle = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  background-color: #c1c1c1;
  .logo {
    width: 559.19px;
    height: 112px;
  }
  .coffee {
    margin: 0 65%;
  }
  .box {
    max-height: 32em;
    max-width: 420px;
    min-width: 310px; 
    width: 38%;
    margin-left: 35%;
    background: #e9e9e9;
    border-radius: 10px !important;
    padding: 20px 60px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
    text-align: center;   
    label {
      text-align: left;
    }
    img {
      margin-top: 1em;
      max-height: 95px;
      margin-bottom: 11px;
    }
    .head {
      font-weight: bold;
      font-size: 30px;
    }
    .forgot {
      text-align: end;
      font-size: 12px;
    }
    .btntDiv {
      margin-top: 2rem;
    }
  }
`;
export { LoginStyle };
