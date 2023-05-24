import React, { FC } from "react";
import { TaskEditDialogContainer } from "./TaskEditDialog.css";
import {
    StandardScreenButton,
    GeneralInputFields,
    GeneralPadding
} from "../Authentication/Authentication.css";

export const TaskEditDialog: FC = () => {
    return (
        <TaskEditDialogContainer>
            <h3>Edit Dialog</h3>
            <GeneralPadding />
            <GeneralInputFields type={'text'} placeholder={'email'} />
            <GeneralPadding />
            <GeneralInputFields type={'password'} placeholder={'password'} />
            <GeneralPadding />
            <StandardScreenButton>Update</StandardScreenButton>
            <GeneralPadding />
        </TaskEditDialogContainer>
    )
}