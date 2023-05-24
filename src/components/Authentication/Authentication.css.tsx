import styled from "styled-components";
// @ts-ignore
import LoginBackground from '../../assets/Images/login-background.jpg';

export const AuthenticationScreenContainer = styled.div`
    background: url(${LoginBackground});
    height: 100vh;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
`;

export const AuthenticationScreenTitle = styled.h1``

export const AuthenticationScreenDarkerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const AuthenticationScreenBox = styled.div`
    position: absolute;
    top: 10%;
    width: 25%;
`;

export const GeneralInputFields = styled.input`
  padding: 0.9rem;
  width: 90%;
  background: transparent;
  color: #fff;
  font-weight: bold;
  border: 0.1rem solid #fff;
  border-radius: 0.5rem;

  ::placeholder {
      color: rgba(242, 242, 242, 0.52);
  }

  input:focus {
      border-color: #fff;
  }
`;

export const GeneralPadding = styled.div<{ optionalPadding?: number }>`
    padding: ${(props) => props.optionalPadding || 1}rem;
`;

export const StandardScreenButton = styled.button<{ backgroundColor?: string, width?: number }>`
    background: ${(props) => props.backgroundColor ? props.backgroundColor : '#2264f4'};
    border: none;
    width: ${(props) => props.width || 100}%;
    padding: 0.9rem;
    color: #fff;
    font-weight: bold;
    transition: all 300ms ease;
    cursor: pointer;
    border-radius: 2rem;
  
    :hover {
        background: #0a45c7;
    }
`;