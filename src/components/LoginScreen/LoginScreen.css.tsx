import styled from "styled-components";
// @ts-ignore
import LoginBackground from '../../assets/Images/login-background.jpg';

export const LoginScreenContainer = styled.div`
    background: url(${LoginBackground});
    height: 100vh;
    display: flex;
    justify-content: center;
    color: #fff;
    text-align: center;
`;

export const LoginScreenTitle = styled.h1``

export const LoginScreenDarkerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const LoginScreenBox = styled.div`
    position: absolute;
    top: 30%;
    width: 25%;
`;

export const LoginScreenInputField = styled.input`
    padding: 0.9rem;
    width: 90%;
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

export const LoginScreenButton = styled.button<{ backgroundColor?: string }>`
    background: ${(props) => props.backgroundColor ? props.backgroundColor : '#2264f4'};
    border: none;
    width: 100%;
    padding: 0.9rem;
    color: #fff;
    font-weight: bold;
    transition: all 300ms ease;
  
    :hover {
        background: #0a45c7;
    }
`;