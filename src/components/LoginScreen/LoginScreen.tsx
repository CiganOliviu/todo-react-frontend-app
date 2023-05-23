import { FC } from "react";
import {
    GeneralPadding,
    LoginScreenBox, LoginScreenButton,
    LoginScreenContainer,
    LoginScreenDarkerOverlay,
    LoginScreenInputField, LoginScreenTitle
} from "./LoginScreen.css";

export const LoginScreen: FC = () => {
    return (
        <LoginScreenContainer>
            <LoginScreenDarkerOverlay />
            <LoginScreenBox>
                <LoginScreenTitle>Login Screen</LoginScreenTitle>
                <GeneralPadding />
                <LoginScreenInputField type={'text'} placeholder={'email'} />
                <GeneralPadding />
                <LoginScreenInputField type={'password'} placeholder={'password'} />
                <GeneralPadding />
                <LoginScreenButton>Login</LoginScreenButton>
                <GeneralPadding />
                <LoginScreenButton backgroundColor={'#07183d'}>Register</LoginScreenButton>
            </LoginScreenBox>
        </LoginScreenContainer>
    )
}