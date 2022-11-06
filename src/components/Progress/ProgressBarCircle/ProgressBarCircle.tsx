import React from "react";
import "./ProgressBarCircle.less"

export interface ProgressProps {
    label: string;
}

const ProgressBarCircle = (props: ProgressProps) => {
    return <button>{props.label}</button>;
};

export default ProgressBarCircle;
