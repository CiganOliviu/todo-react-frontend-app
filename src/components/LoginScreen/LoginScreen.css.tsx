import styled from "styled-components";
// @ts-ignore
import LoginBackground from '../../assets/Images/login-background.jpg';

export const LoginScreenContainer = styled.div`
    background: url(${LoginBackground});
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const LoginScreenDarkerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for desired darkness */
`;

export const LoginScreenBox = styled.div`
    position: absolute;
    top: 40%;
    width: 20%;
`;

export const LoginScreenInputField = styled.input`
    padding: 0.9rem;
    width: 100%;
    background: transparent;
    color: #fff;
    font-weight: bold;
    border: 0.1rem solid #fff;
  
    ::placeholder {
        color: #fff;
    }
  
    input:focus {
        border-color: #fff;
    }
`;

export const GeneralPadding = styled.div`
    padding: 1rem;
`;