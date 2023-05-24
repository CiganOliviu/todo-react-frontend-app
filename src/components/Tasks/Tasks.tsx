import { Bullet, IconWrapper, TaskContainer, TaskInputBox, TaskLine } from "./Tasks.css";
import {
    AuthenticationScreenButton,
    AuthenticationScreenInputField,
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
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Tasks = () => {
    const { response, fetcher } = useGetFetch<TaskType[], string>(requestUrls.tasks);
    const { response: apiResponse, fetcher: sendPayload } = usePostFetch<any, any>(requestUrls.tasks);
    const { response: deleteApiResponse, fetcher: sendDeletePayload } = usePostFetch<any, any>(requestUrls.tasks, 'DELETE');
    const { token } = useValidateUser();

    const mockData = [
        {
            name: "Task 1",
            type: "Work",
            estimation: "3"
        },
        {
            name: "Task 2",
            type: "University",
            estimation: "1"
        },
        {
            name: "Task 3",
            type: "Others",
            estimation: "2"
        },
        {
            name: "Task 4",
            type: "University",
            estimation: "5"
        }
    ]

    const [taskName, setTaskName] = useState<string>('');
    const [tasks, setTasks] = useState<TaskType[]>([]);

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
        if (taskType === taskTypes.UNIVERSITY) return '#FF3660';
        if (taskType === taskTypes.OTHERS) return '#BAFFC9';

        return '#F5E1DC';
    };

    const onAddTaskButtonClicked = () => {
        if (taskName !== '') {
            sendPayload({ name: taskName }, token);
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
        if (apiResponse) {
            setTasks([...tasks, { id: apiResponse.id, name: apiResponse.name }]);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiResponse]);

    return (
        <TaskContainer>
            <TaskInputBox>
                <AuthenticationScreenInputField type={'text'} placeholder={'Add Task'} onChange={handleInputTaskField} />
                <GeneralPadding />
                <AuthenticationScreenButton onClick={onAddTaskButtonClicked} width={80}>Add Task</AuthenticationScreenButton>
                <GeneralPadding optionalPadding={3} />
                {tasks.map((task, index) => {
                    const onDeleteTaskButtonClicked = () => {
                        deleteTaskById(task.id || 0);
                    }
                    return (
                        <TaskLine key={index}>
                            <span>
                                <Bullet color={getColorBasedOnTaskType(task?.type ?? '')}/>
                                {task.name} - {task?.estimation}
                                <IconWrapper onClick={onDeleteTaskButtonClicked}><FontAwesomeIcon icon={faTrash} /></IconWrapper>
                            </span>
                            <GeneralPadding />
                        </TaskLine>
                    )
                })}
            </TaskInputBox>
        </TaskContainer>
    )
}