import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/button/Button";

export const Wellcome = styled.div`
  padding-top: 100px;
  min-height: 600px;
  height: 100vh;
  padding: 195px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffff;
  text-align: center;
  background-color: #2d303c;
  background-image: url("/src/asset/img/hero-bg.jpg");
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  max-width: 970px;
  margin: 0 auto;
  padding: 0 16px;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0; */
`;
export const WHeading = styled.h1`
  margin-bottom: 100px;
  font-size: 59px;
  line-height: 102%;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;
export const LinkDiv = styled.div`
  & > * + * {
    margin-left: 40px;
  }
`;

export const LinkPrimary = styled.a`
  padding: 14px 30px;

  font-size: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
  background-color: #69b9ff;
  border: 1px solid #69b9ff;

  border-radius: 4px;

  transition: background-color 0.3s ease;
`;

export const LearnLink = styled(Button)`
  /* display: inline-block; */
  /* padding: 10px 30px;

  font-size: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  border: 1px solid #69b9ff;
  border-radius: 4px;
  transition: background-color 0.3s ease, border-color 0.2s ease; */
`;

// export const Wellcome = styled.div`
//   min-height: 600px;
//   height: 100vh;
//   padding: 195px 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   color: #ffff;
//   background-color: #2d303c;
//   background-image: url("./asset/img/hero-bg.jpg");
//   background-size: cover;
//   background-position: center;
// `;
