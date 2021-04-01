import React from "react";
import { InjectedProps } from "./types";
interface Props extends InjectedProps {
    title: string;
    hideCloseButton?: boolean;
    onBack?: () => void;
    bodyPadding?: string;
    headerBackground?: string;
    minWidth?: string;
}
declare const Modal: React.FC<Props>;
export default Modal;