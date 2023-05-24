import React, { FC, useEffect, useState } from "react";
import { TaskEditDialogContainer } from "./TaskEditDialog.css";
import {
    StandardScreenButton,
    GeneralInputFields,
    GeneralPadding
} from "../Authentication/Authentication.css";
import { DropdownField } from "../DropdownField/DropdownField";
import usePostFetch from "../../hooks/usePostFetch";
import { requestUrls } from "../../utils/backend";
import useValidateUser from "../../hooks/useValidateUser";
import useGetFetch from "../../hooks/useGetFetch";
import { TaskType } from "../../utils/types";

type TaskEditDialogType = {
    isOpen: boolean
    setIsOpen: any;
    taskId: number;
};

const STATUSES_MOCKUP = [
    'DRAFT', 'OPEN', 'PROGRESS', 'CLOSED'
];

const TYPES_MOCKUP = [
    'UNIVERSITY', 'WORK', 'OTHER'
];

export const TaskEditDialog: FC<TaskEditDialogType> = ({ isOpen, setIsOpen, taskId }) => {
    const { fetcher: sendPayload } = usePostFetch<any, any>(requestUrls.tasks, 'PUT');
    const detailObjectUrl = requestUrls.task.replace(':id', `${taskId}`);
    const { response: taskResponse, fetcher } = useGetFetch<TaskType, string>(detailObjectUrl);
    const { token } = useValidateUser();

    const [previewTask, setPreviewTask] = useState<TaskType>();

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [estimation, setEstimation] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [type, setType] = useState<string>('');

    useEffect(() => {
        fetcher(token);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (taskResponse) {
            setPreviewTask(taskResponse);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskResponse]);

    const handleInputNameField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleInputDescriptionField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleInputEstimationField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEstimation(event.target.value);
    }

    const handleInputStatusField = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    }

    const handleInputTypeField = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value);
    }

    const updateTaskOnClick = () => {
        const payload = {
            name,
            description,
            estimation,
            status,
            type
        };

        const detailObjectUrl = requestUrls.task.replace(':id', `${taskId}`);
        sendPayload(payload, token, detailObjectUrl);
        setIsOpen(false);
    };

    const closeTaskEditDialog = () => {
        setIsOpen(false);
    };

    return (
        isOpen ? (
            <TaskEditDialogContainer>
                <h3>Edit Dialog</h3>
                <GeneralPadding />
                <GeneralInputFields type={'text'} placeholder={previewTask?.name} onChange={handleInputNameField} />
                <GeneralPadding />
                <GeneralInputFields type={'text'} placeholder={previewTask?.description} onChange={handleInputDescriptionField} />
                <GeneralPadding />
                <GeneralInputFields type={'text'} placeholder={previewTask?.estimation} onChange={handleInputEstimationField} />
                <GeneralPadding />
                <DropdownField options={STATUSES_MOCKUP} handleDropdownChange={handleInputStatusField} />
                <GeneralPadding />
                <DropdownField options={TYPES_MOCKUP} handleDropdownChange={handleInputTypeField} />
                <GeneralPadding />
                <StandardScreenButton onClick={updateTaskOnClick}>Update</StandardScreenButton>
                <GeneralPadding />
                <StandardScreenButton onClick={closeTaskEditDialog} backgroundColor={'#07183d'}>Close Dialog</StandardScreenButton>
                <GeneralPadding />
            </TaskEditDialogContainer>
        ) : null
    )
}