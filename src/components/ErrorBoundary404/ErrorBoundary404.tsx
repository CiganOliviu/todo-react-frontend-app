import { OverlayNotification } from "../OverlayNotification/OverlayNotification";
// @ts-ignore
import ErrorNotFound from "../../assets/Images/404-error-not-found.png";

export const ErrorBoundary404 = () => {
    return <OverlayNotification messageAsImage={ErrorNotFound} />
};