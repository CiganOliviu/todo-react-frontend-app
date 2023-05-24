import { Bullet, IconWrapper, TaskContainer, TaskInputBox, TaskLine } from "./Tasks.css";
import {
    StandardScreenButton,
    GeneralInputFields,
    GeneralPadding
} from "../Authentication/Authentication.css";
import React, { useEffect, useState } from "react";
import { taskTypes } from "../../utils/dataStructures";
import useGetFetch from "../../hooks/useGetFetch";
import { requestUrls } from "../../utils/backend";
import { TaskType } from "../../utils/types";
import useValidateUser from "../../hooks/useValidateUser";
import usePostFetch from "../../hooks/usePostFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TaskEditDialog } from "../TaskEditDialog/TaskEditDialog";

export const Tasks = () => {
    const { response, fetcher } = useGetFetch<TaskType[], string>(requestUrls.tasks);
    const { response: postApiResponse, fetcher: sendPostPayload } = usePostFetch<any, any>(requestUrls.tasks);
    const { response: deleteApiResponse, fetcher: sendDeletePayload } = usePostFetch<any, any>(requestUrls.tasks, 'DELETE');
    const { token } = useValidateUser();

    const [taskName, setTaskName] = useState<string>('');
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [taskEditDialog, setTaskEditDialog] = useState<boolean>(false);
    const [taskId, setTaskId] = useState<number | undefined>();

    useEffect(() => {
        fetcher(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        if (response) {
            setTasks(response)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    const handleInputTaskField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value);
    };

    const getColorBasedOnTaskType = (taskType: string): string => {
        if (taskType === taskTypes.UNIVERSITY) return 'green';
        if (taskType === taskTypes.WORK) return 'red';

        return 'yellow';
    };

    const onAddTaskButtonClicked = () => {
        if (taskName !== '') {
            sendPostPayload({ name: taskName }, token);
        }
    };

    const removeTask = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const deleteTaskById = (id: number) => {
        const detailObjectUrl = requestUrls.task.replace(':id', `${id}`);
        sendDeletePayload(undefined, token, detailObjectUrl);
    }

    useEffect(() => {
        if (deleteApiResponse) {
            removeTask(deleteApiResponse.id);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteApiResponse]);

    useEffect(() => {
        if (postApiResponse) {
            setTasks([...tasks, { id: postApiResponse.id, name: postApiResponse.name }]);
            setTaskName('');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postApiResponse]);

    return (
        <TaskContainer>
            <TaskEditDialog isOpen={taskEditDialog} setIsOpen={setTaskEditDialog} taskId={taskId} />
            <TaskInputBox>
                <GeneralInputFields type={'text'} placeholder={'Add Task'} value={taskName} onChange={handleInputTaskField} />
                <GeneralPadding />
                <StandardScreenButton onClick={onAddTaskButtonClicked} width={80}>Add Task</StandardScreenButton>
                <GeneralPadding optionalPadding={3} />
                {tasks.map((task, index) => {
                    const onDeleteTaskButtonClicked = () => {
                        deleteTaskById(task.id || 0);
                    };

                    const onEditTaskButtonClicked = () => {
                        setTaskEditDialog(!taskEditDialog);
                        setTaskId(task.id);
                    };

                    return (
                        <TaskLine key={index}>
                            <span>
                                <Bullet color={getColorBasedOnTaskType(task?.type ?? '')}/>
                                {task.name} - {task?.estimation}
                                <IconWrapper onClick={onDeleteTaskButtonClicked}><FontAwesomeIcon icon={faTrash} /></IconWrapper>
                                <IconWrapper onClick={onEditTaskButtonClicked}><FontAwesomeIcon icon={faEdit} /></IconWrapper>
                            </span>
                            <GeneralPadding />
                        </TaskLine>
                    )
                })}
            </TaskInputBox>
        </TaskContainer>
    )
}