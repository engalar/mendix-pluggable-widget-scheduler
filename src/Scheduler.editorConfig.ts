import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { SchedulerPreviewProps } from "../typings/SchedulerProps";

export function getProperties(
    values: SchedulerPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: SchedulerPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
