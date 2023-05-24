import { DropdownOption, DropdownSelectContainer, DropdownSelectElement } from "./DropdownField.css";
import React, { FC } from "react";

type DropdownOptionsType = {
    options: string[] | undefined,
    handleDropdownChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const DropdownField: FC<DropdownOptionsType> = ({ options,  handleDropdownChange }) => {
    return (
        <DropdownSelectContainer>
            <DropdownSelectElement>
                {options?.map((option, index) => {
                    return <DropdownOption key={index} value={option}>{option}</DropdownOption>;
                })}
            </DropdownSelectElement>
        </DropdownSelectContainer>
    )
};