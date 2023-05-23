import {
    AuthenticationScreenBox, AuthenticationScreenButton,
    AuthenticationScreenContainer,
    AuthenticationScreenDarkerOverlay, AuthenticationScreenInputField, AuthenticationScreenTitle, GeneralPadding
} from "../LoginScreen/LoginScreen.css";
import React from "react";

export const RegisterScreen = () => {
    return (
        <AuthenticationScreenContainer>
            <AuthenticationScreenDarkerOverlay />
            <AuthenticationScreenBox>
                <AuthenticationScreenTitle>Login Screen</AuthenticationScreenTitle>
                <GeneralPadding />
                <AuthenticationScreenInputField type={'text'} placeholder={'First name'}  />
                <GeneralPadding />
                <AuthenticationScreenInputField type={'text'} placeholder={'Last name'}  />
                <GeneralPadding />
                <AuthenticationScreenInputField type={'text'} placeholder={'Email'}  />
                <GeneralPadding />
                <AuthenticationScreenInputField type={'password'} placeholder={'Password'}/>
                <GeneralPadding />
                <AuthenticationScreenButton>Login</AuthenticationScreenButton>
                <GeneralPadding />
                <AuthenticationScreenButton backgroundColor={'#07183d'}>Register</AuthenticationScreenButton>
            </AuthenticationScreenBox>
        </AuthenticationScreenContainer>
    )
}