import { createElement, useMemo } from "react";
import locale from 'date-fns/locale/zh-CN';
import { SchedulerContainerProps } from "../typings/SchedulerProps";
import { Scheduler } from "./lib/Scheduler";
import { ValueStatus } from 'mendix';
import { ProcessedEvent } from "./lib/types";

export default function (props: SchedulerContainerProps) {
  const events: ProcessedEvent[] = useMemo(() => {
    if (props.events.status ===
      ValueStatus.Available) {
      return props.events.items!.map<ProcessedEvent>(obj => ({
        event_id: obj.id.toString(),
        title: props.attTitle.get(obj).value!,
        start: props.attStart.get(obj).value!,
        end: props.attEnd.get(obj).value!,
      }));
    }
    return [];
  }, [props.events])

  return <Scheduler
    locale={locale}
    view="month"
    events={events}
  />;
}
