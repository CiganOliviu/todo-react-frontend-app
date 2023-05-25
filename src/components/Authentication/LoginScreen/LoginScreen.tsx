import React, { FC, useState } from "react";
import {
    GeneralPadding,
    AuthenticationScreenBox, StandardScreenButton,
    AuthenticationScreenContainer,
    AuthenticationScreenDarkerOverlay,
    GeneralInputFields, AuthenticationScreenTitle
} from "../Authentication.css";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../../utils/dataStructures";

export const LoginScreen: FC = () => {
    const { logUserIn } = useAuthentication();
    const navigate = useNavigate();

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

    const onRegisterButtonClick = () => {
        navigate(pageRoutes.REGISTER);
    }

    return (
        <AuthenticationScreenContainer>
            <AuthenticationScreenDarkerOverlay />
            <AuthenticationScreenBox>
                <AuthenticationScreenTitle>Login Screen</AuthenticationScreenTitle>
                <GeneralPadding />
                <GeneralInputFields type={'text'} placeholder={'email'} onChange={handleInputEmailField} />
                <GeneralPadding />
                <GeneralInputFields type={'password'} placeholder={'password'} onChange={handleInputPasswordField} />
                <GeneralPadding />
                <StandardScreenButton onClick={onLoginButtonClick}>Login</StandardScreenButton>
                <GeneralPadding />
                <StandardScreenButton backgroundColor={'#07183d'} onClick={onRegisterButtonClick}>Register</StandardScreenButton>
            </AuthenticationScreenBox>
        </AuthenticationScreenContainer>
    )
}