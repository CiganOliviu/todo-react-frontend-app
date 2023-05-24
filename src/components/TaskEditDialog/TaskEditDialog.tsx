import React, { FC } from "react";
import { TaskEditDialogContainer } from "./TaskEditDialog.css";
import {
    StandardScreenButton,
    GeneralInputFields,
    GeneralPadding
} from "../Authentication/Authentication.css";

type TaskEditDialogType = {
    isOpen: boolean
    setIsOpen: any;
};

export const TaskEditDialog: FC<TaskEditDialogType> = ({ isOpen, setIsOpen }) => {

    const closeTaskEditDialog = () => {
        setIsOpen(false);
    };

    return (
        isOpen ? (
                <TaskEditDialogContainer>
                    <h3>Edit Dialog</h3>
                    <GeneralPadding />
                    <GeneralInputFields type={'text'} placeholder={'email'} />
                    <GeneralPadding />
                    <GeneralInputFields type={'password'} placeholder={'password'} />
                    <GeneralPadding />
                    <StandardScreenButton>Update</StandardScreenButton>
                    <GeneralPadding />
                    <StandardScreenButton onClick={closeTaskEditDialog} backgroundColor={'#07183d'}>Close Dialog</StandardScreenButton>
                    <GeneralPadding />
                </TaskEditDialogContainer>
            ) : null
    )
}