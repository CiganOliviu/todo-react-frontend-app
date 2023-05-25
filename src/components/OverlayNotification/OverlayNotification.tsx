import { FC, useState } from 'react';
import {
    OverlayNotificationContainer,
    OverlayNotificationImage,
} from "./OverlayNotification.css";
import { StandardScreenButton } from "../Authentication/Authentication.css";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../utils/dataStructures";

type OverlayNotificationType = {
    messageAsImage: string;
};

export const OverlayNotification: FC<OverlayNotificationType> = ({ messageAsImage }) => {
    const navigate = useNavigate();

    const [isClosed, setIsClosed] = useState<boolean>(false);

    const onButtonClick = () => {
        setIsClosed(true);
        navigate(pageRoutes.LOGIN);
    };

    return (
        <OverlayNotificationContainer isClosed={isClosed}>
            <OverlayNotificationImage src={messageAsImage} alt={messageAsImage}/>
            <StandardScreenButton onClick={onButtonClick} width={10}>go home</StandardScreenButton>
        </OverlayNotificationContainer>
    );
};