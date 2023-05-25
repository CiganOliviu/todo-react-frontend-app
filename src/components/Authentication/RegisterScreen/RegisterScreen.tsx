import {
    AuthenticationScreenBox, StandardScreenButton,
    AuthenticationScreenContainer,
    AuthenticationScreenDarkerOverlay, GeneralInputFields, AuthenticationScreenTitle, GeneralPadding
} from "../Authentication.css";
import React, { useState } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";

export const RegisterScreen = () => {
    const { registerUser } = useAuthentication();

    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleInputFirstnameField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value);
    }

    const handleInputLastnameField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
    }

    const handleInputEmailField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleInputPasswordField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onRegisterButtonClick = () => {
        const isFormValid = firstname !== '' && lastname !== '' && email !== '' && password !== '';

        if (isFormValid) {
            registerUser(firstname, lastname, email, password);
        }
    };

    return (
        <AuthenticationScreenContainer>
            <AuthenticationScreenDarkerOverlay />
            <AuthenticationScreenBox>
                <AuthenticationScreenTitle>Register Screen</AuthenticationScreenTitle>
                <GeneralPadding />
                <GeneralInputFields type={'text'} placeholder={'First name'} onChange={handleInputFirstnameField} />
                <GeneralPadding />
                <GeneralInputFields type={'text'} placeholder={'Last name'} onChange={handleInputLastnameField} />
                <GeneralPadding />
                <GeneralInputFields type={'text'} placeholder={'Email'} onChange={handleInputEmailField} />
                <GeneralPadding />
                <GeneralInputFields type={'password'} placeholder={'Password'} onChange={handleInputPasswordField} />
                <GeneralPadding />
                <StandardScreenButton onClick={onRegisterButtonClick}>Register</StandardScreenButton>
            </AuthenticationScreenBox>
        </AuthenticationScreenContainer>
    )
}