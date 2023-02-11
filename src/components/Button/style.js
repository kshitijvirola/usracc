import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.bgcolor.background}; 
  color: ${(props) => props.bgcolor.color}; 
  border: 1px solid ${(props) => props.bgcolor.color};//#e4e4e4;.background
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding: 0 20px;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  min-width: 120px;
  letter-spacing: 0;
  text-transform: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.4s ease;
  font-family: "Rubik", sans-serif;
  box-shadow: 0 0 2px rgb(0 0 0 / 45%);
  :hover,
  :focus {
    background: #b1adebf;
    color:#d3d1d1; 
    border: none;
    outline: none;  
  }
`;

export { Button };
