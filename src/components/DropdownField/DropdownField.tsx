import { DropdownOption, DropdownSelectContainer, DropdownSelectElement } from "./DropdownField.css";
import React, { FC } from "react";

type DropdownOptionsType = {
    options: string[],
    handleDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    activeValue?: string;
};

export const DropdownField: FC<DropdownOptionsType> = ({ options, handleDropdownChange, activeValue }) => {

    const reorderArray = (): string[] => {
        if (activeValue) {
            const index = options.indexOf(activeValue);
            if (index !== -1) {
                const reorderedArray = [...options];
                reorderedArray.splice(index, 1);
                reorderedArray.unshift(activeValue);
                return reorderedArray;
            }
        }

        return options;
    };

    reorderArray();

    console.log(options);

    return (
        <DropdownSelectContainer>
            <DropdownSelectElement onChange={handleDropdownChange}>
                {options?.map((option, index) => {
                    return <DropdownOption key={index} value={option}>{option}</DropdownOption>;
                })}
            </DropdownSelectElement>
        </DropdownSelectContainer>
    )
};