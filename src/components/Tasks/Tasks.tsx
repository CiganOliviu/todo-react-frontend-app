import { Bullet, TaskContainer, TaskInputBox, TaskLine } from "./Tasks.css";
import { AuthenticationScreenInputField, GeneralPadding } from "../Authentication/Authentication.css";
import React from "react";

export const Tasks = () => {

    const mockData = [
        {
            name: "Task 1",
            type: "Others",
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

    const getColorBasedOnTaskType = (taskType: string): string => {
        if (taskType === 'University') return '#FF3660';
        if (taskType === 'Work') return '#BAFFC9';

        return '#F5E1DC';
    };

    return (
        <TaskContainer>
            <TaskInputBox>
                <AuthenticationScreenInputField type={'text'} placeholder={'email'} />
                <GeneralPadding />
                {mockData.map((task) => {
                    return (
                        <TaskLine>
                            <span><Bullet color={getColorBasedOnTaskType(task.type)}/> {task.name} - {task.estimation}</span>
                            <GeneralPadding />
                        </TaskLine>
                    )
                })}
            </TaskInputBox>
        </TaskContainer>
    )
}