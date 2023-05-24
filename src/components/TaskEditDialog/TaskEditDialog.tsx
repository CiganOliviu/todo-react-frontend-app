import React, { FC } from "react";
import { TaskEditDialogContainer } from "./TaskEditDialog.css";
import {
    StandardScreenButton,
    GeneralInputFields,
    GeneralPadding
} from "../Authentication/Authentication.css";
import { DropdownField } from "../DropdownField/DropdownField";

type TaskEditDialogType = {
    isOpen: boolean
    setIsOpen: any;
};

const STATUSES_MOCKUP = [
    'DRAFT', 'OPEN', 'PROGRESS', 'CLOSED'
];

const TYPES_MOCKUP = [
    'UNIVERSITY', 'WORK', 'OTHER'
];

export const TaskEditDialog: FC<TaskEditDialogType> = ({ isOpen, setIsOpen }) => {

    const closeTaskEditDialog = () => {
        setIsOpen(false);
    };

    return (
        isOpen ? (
                <TaskEditDialogContainer>
                    <h3>Edit Dialog</h3>
                    <GeneralPadding />
                    <GeneralInputFields type={'text'} placeholder={'name'} />
                    <GeneralPadding />
                    <GeneralInputFields type={'text'} placeholder={'description'} />
                    <GeneralPadding />
                    <GeneralInputFields type={'text'} placeholder={'estimation'} />
                    <GeneralPadding />
                    <DropdownField options={STATUSES_MOCKUP} />
                    <GeneralPadding />
                    <DropdownField options={TYPES_MOCKUP} />
                    <GeneralPadding />
                    <StandardScreenButton>Update</StandardScreenButton>
                    <GeneralPadding />
                    <StandardScreenButton onClick={closeTaskEditDialog} backgroundColor={'#07183d'}>Close Dialog</StandardScreenButton>
                    <GeneralPadding />
                </TaskEditDialogContainer>
            ) : null
    )
}