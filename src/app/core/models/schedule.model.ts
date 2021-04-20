import { Hospital } from "./hospital.model";
import { ScheduleTime } from "./scheduleTime.model";

export interface Schedule {
    hospital: Hospital;
    building: string;
    contactNumbers: string[];
    scheduleTime: ScheduleTime[];
}