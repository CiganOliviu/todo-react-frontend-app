import styled from "styled-components";

export const TaskContainer = styled.div`
    background: #282A3A;
    color: #fff;
    min-height: 100vh;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TaskInputBox = styled.div`
    margin-top: 5rem;
    width: 30%;
    text-align: center;
`;

export const Bullet = styled.div<{ color: string }>`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
    margin-right: 2rem;
    background: ${(props) => props.color};
`;

export const IconWrapper = styled.button`
    display: inline-block;
    margin-left: 2rem;
    background: none;
    font-size: 1.3rem;
    color: #fff;
    border: none;
    cursor: pointer;
`;

export const TaskLine = styled.div`
`