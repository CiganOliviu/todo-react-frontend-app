import {
    AuthenticationScreenBox, AuthenticationScreenButton,
    AuthenticationScreenContainer,
    AuthenticationScreenDarkerOverlay, AuthenticationScreenInputField, AuthenticationScreenTitle, GeneralPadding
} from "../LoginScreen/LoginScreen.css";
import React, { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

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
                <AuthenticationScreenTitle>Login Screen</AuthenticationScreenTitle>
                <GeneralPadding />
                <AuthenticationScreenInputField type={'text'} placeholder={'First name'} onChange={handleInputFirstnameField} />
                <GeneralPadding />
                <AuthenticationScreenInputField type={'text'} placeholder={'Last name'} onChange={handleInputLastnameField} />
                <GeneralPadding />
                <AuthenticationScreenInputField type={'text'} placeholder={'Email'} onChange={handleInputEmailField} />
                <GeneralPadding />
                <AuthenticationScreenInputField type={'password'} placeholder={'Password'} onChange={handleInputPasswordField} />
                <GeneralPadding />
                <AuthenticationScreenButton onClick={onRegisterButtonClick}>Register</AuthenticationScreenButton>
            </AuthenticationScreenBox>
        </AuthenticationScreenContainer>
    )
}