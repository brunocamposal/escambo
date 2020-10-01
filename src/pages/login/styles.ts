import styled from "styled-components";
import { Button, Container } from "semantic-ui-react";

export const Main = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const LoginBox = styled.div`
  padding: 0vw 3vw;
  background-color: #fff;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  .ui.form {
    width: 100%;
  }
  .ui.inverted.button {
    margin-top: 30px;
  }
  h3{
    margin:30px 0 30px 0;
  }
`;

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;

  @media (max-width: 480px) {
    background-color: #ffffff;
  }
`;

export const ImageBox = styled.div`
  padding: 0vw 2vw 0vw 4vw;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const ButtonForm = styled(Button)`
  width: 100%;
`;

export const ContainerLogin = styled(Container)`
  background-color: var(--primary-dark);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.109);
  border-radius: 10px;
  padding: 5vw 2vw 5vw 2vw;
  width: 1000px !important;

  @media (max-width: 480px) {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.109);
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 23pt;
  font-weight: bold;
  color: #001529;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const LogoCenter = styled.div`
  background-color: #565656;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 30px 0 30px 0;
`;

export const LogoLogin = styled.img`
  width: 18vw;
  margin-bottom: 10px;
  margin-right: 35px;

  @media (max-width: 600px) {
    width: 60vw;
  }
`;

export const LoginIllustration = styled.img`
  text-align: center;
  width: 27vw;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Register = styled.h5`
  color: #4583a3;
  padding-bottom: 15px;
  text-align: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline #4583a3;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
`;
