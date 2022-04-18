import { createElement, useMemo } from "react";
import { SchedulerContainerProps } from "../typings/SchedulerProps";
import { ValueStatus } from 'mendix';

export default function (props: SchedulerContainerProps) {
    console.log(props);
    const value = useMemo(() => {
        if (props.attribute && props.attribute.status === ValueStatus.Available) {
            return props.attribute.value;
        }
    }, [props.attribute])

    return <div>hello {props.sampleText} and your value is {value}</div>;
}
