import styled from "styled-components";

export const OverlayNotificationContainer = styled.div<{ isClosed: boolean }>`
    position: fixed;
    display: ${(props) => (props.isClosed ? 'none' : 'flex')};
    background: #fff;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const OverlayNotificationImage = styled.img`
    width: 50%;
`;