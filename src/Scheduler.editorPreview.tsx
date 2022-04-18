import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { SchedulerPreviewProps } from "../typings/SchedulerProps";

declare function require(name: string): string;

export function preview(props: SchedulerPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
