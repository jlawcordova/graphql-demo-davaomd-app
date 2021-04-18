import { Hospital } from "./hospital";
import { ScheduleTime } from "./scheduleTime";

export interface Schedule {
    hospital: Hospital;
    building: string;
    contactNumbers: string[];
    scheduleTime: ScheduleTime[];
}