import { FC } from "react";
import {
    GeneralPadding,
    LoginScreenBox,
    LoginScreenContainer,
    LoginScreenDarkerOverlay,
    LoginScreenInputField
} from "./LoginScreen.css";

export const LoginScreen: FC = () => {
    return (
        <LoginScreenContainer>
            <LoginScreenDarkerOverlay />
            <LoginScreenBox>
                <LoginScreenInputField type={'text'} placeholder={'email'} />
                <GeneralPadding />
                <LoginScreenInputField type={'password'} placeholder={'password'} />
            </LoginScreenBox>
        </LoginScreenContainer>
    )
}