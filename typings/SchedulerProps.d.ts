/**
 * This file was generated from Scheduler.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";

export interface SchedulerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    events: ListValue;
    attStart: ListAttributeValue<Date>;
    attEnd: ListAttributeValue<Date>;
    attTitle: ListAttributeValue<string>;
}

export interface SchedulerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    events: {} | { type: string } | null;
    attStart: string;
    attEnd: string;
    attTitle: string;
}
