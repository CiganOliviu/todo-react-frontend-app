import React, { FC, useState } from "react";
import {
    GeneralPadding,
    AuthenticationScreenBox, AuthenticationScreenButton,
    AuthenticationScreenContainer,
    AuthenticationScreenDarkerOverlay,
    AuthenticationScreenInputField, AuthenticationScreenTitle
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
        <AuthenticationScreenContainer>
            <AuthenticationScreenDarkerOverlay />
            <AuthenticationScreenBox>
                <AuthenticationScreenTitle>Login Screen</AuthenticationScreenTitle>
                <GeneralPadding />
                <AuthenticationScreenInputField type={'text'} placeholder={'email'} onChange={handleInputEmailField} />
                <GeneralPadding />
                <AuthenticationScreenInputField type={'password'} placeholder={'password'} onChange={handleInputPasswordField} />
                <GeneralPadding />
                <AuthenticationScreenButton onClick={onLoginButtonClick}>Login</AuthenticationScreenButton>
                <GeneralPadding />
                <AuthenticationScreenButton backgroundColor={'#07183d'}>Register</AuthenticationScreenButton>
            </AuthenticationScreenBox>
        </AuthenticationScreenContainer>
    )
}