import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vh auto;

  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;

  label {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 6px;
  }
  input {
    font-weight: 700;
    background-color: #f4f4f6;
    border: none;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    &::placeholder {
      opacity: 64%;
    }
  }

  .ui.form {
    width: 70%;
    margin-top: 40px;
  }
  .ui.form select {
    height: 38px;
  }

  .ui.card {
    width: 200px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 70%;

  @media (max-width: 480px) {
    margin-top: 40px;
    height: 60px;
  }
`;

export const MsgError = styled.p`
  color: red;
  font-size: 0.9rem;
`;

export const ButtonForm = styled.button`
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 75px;
  color: #fff;
  background-color: var(--primary);
  border-radius: 7px;
  height: 35px;
  width: 255px;
  float: right;
  cursor: pointer;
`;
