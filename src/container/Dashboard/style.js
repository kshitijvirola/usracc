import styled from "styled-components";

const DashStyle = styled.div`
  .flex {
    display: flex;
  }
  .account-info {
    border: 1px solid black;
    width: 300px;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
  }
  .main {
    display: none;
    &.show {
      display: block;
    }
    width: 100vh;
    .row {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .account-info {
      margin: 0 10em;
      width: 90vh;
    }
    .row > button {
      margin-left: 4px;
      margin-right: 8px;
    }
    .row:not(:last-child) {
      margin-bottom: 16px;
    }

    .value {
      font-size: 78px;
      padding-left: 16px;
      padding-right: 16px;
      margin-top: 2px;
      font-family: "Courier New", Courier, monospace;
    }

    .textbox {
      font-size: 32px;
      padding: 2px;
      width: 64px;
      text-align: center;
      margin-right: 4px;
    }
  }
  button {
    appearance: none;
    background: none;
    font-size: 20px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: 2px solid transparent;
    color: rgb(112, 76, 182);
    padding-bottom: 4px;
    cursor: pointer;
    background-color: rgba(112, 76, 182, 0.1);
    border-radius: 2px;
    transition: all 0.15s;

    :hover,
    :focus {
      border: 2px solid rgba(112, 76, 182, 0.4);
    }
    :active {
      background-color: rgba(112, 76, 182, 0.2);
    }
  }
`;
export { DashStyle };
