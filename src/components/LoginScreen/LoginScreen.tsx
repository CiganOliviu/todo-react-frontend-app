import React, { FC, useState } from "react";
import {
    GeneralPadding,
    LoginScreenBox, LoginScreenButton,
    LoginScreenContainer,
    LoginScreenDarkerOverlay,
    LoginScreenInputField, LoginScreenTitle
} from "./LoginScreen.css";
import { useAuthentication } from "../../hooks/useAuthentication";

export const LoginScreen: FC = () => {
    const { logUserIn } = useAuthentication();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleInputEmailField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleInputPasswordField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onLoginButtonClick = () => {
        const isFormValid = email !== '' && password !== '';

        if (isFormValid) {
            logUserIn(email, password);
        }
    };

    return (
        <LoginScreenContainer>
            <LoginScreenDarkerOverlay />
            <LoginScreenBox>
                <LoginScreenTitle>Login Screen</LoginScreenTitle>
                <GeneralPadding />
                <LoginScreenInputField type={'text'} placeholder={'email'} onChange={handleInputEmailField} />
                <GeneralPadding />
                <LoginScreenInputField type={'password'} placeholder={'password'} onChange={handleInputPasswordField} />
                <GeneralPadding />
                <LoginScreenButton>Login</LoginScreenButton>
                <GeneralPadding />
                <LoginScreenButton backgroundColor={'#07183d'}>Register</LoginScreenButton>
            </LoginScreenBox>
        </LoginScreenContainer>
    )
}