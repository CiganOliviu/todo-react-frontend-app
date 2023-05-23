import { Bullet, TaskContainer, TaskInputBox, TaskLine } from "./Tasks.css";
import { AuthenticationScreenInputField, GeneralPadding } from "../Authentication/Authentication.css";
import React, { useState } from "react";
import { taskTypes } from "../../utils/dataStructures";

export const Tasks = () => {

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

    const [task, setTask] = useState<string>('');

    const handleInputTaskField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const getColorBasedOnTaskType = (taskType: string): string => {
        if (taskType === taskTypes.UNIVERSITY) return '#FF3660';
        if (taskType === taskTypes.OTHERS) return '#BAFFC9';

        return '#F5E1DC';
    };

    return (
        <TaskContainer>
            <TaskInputBox>
                <AuthenticationScreenInputField type={'text'} placeholder={'Add Task'} onChange={handleInputTaskField} />
                <GeneralPadding />
                {mockData.map((task, index) => {
                    return (
                        <TaskLine key={index}>
                            <span><Bullet color={getColorBasedOnTaskType(task.type)}/> {task.name} - {task.estimation}</span>
                            <GeneralPadding />
                        </TaskLine>
                    )
                })}
            </TaskInputBox>
        </TaskContainer>
    )
}