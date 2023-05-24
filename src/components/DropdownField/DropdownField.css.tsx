import styled from "styled-components";

export const DropdownSelectContainer = styled.div`
    position: relative;
    background: transparent;
    width: 100%;
    color: #fff;
    font-weight: bold;
    border: 0.1rem solid #fff;
    border-radius: 0.5rem;
  
    * {
        margin: 0;
        padding: 0;
        position: relative;
        box-sizing: border-box;
    }
`;

export const DropdownSelectElement = styled.select`
    max-width: 100%;
    padding: 0.7rem;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #fff;
    font-weight: bold;
  
    :active {
        outline: none;
        box-shadow: none;
    }
    
    :focus {
        outline: none;
        box-shadow: none;
        width: 100%;
    }
  
    :after {
        content: "";
        position: absolute;
        top: 50%;
        width: 0;
        height: 0;
        border-top: 5px solid #aaa;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
    }
`;

export const DropdownOption = styled.option`
    color: #fff;
    background: #282A3A;
`;