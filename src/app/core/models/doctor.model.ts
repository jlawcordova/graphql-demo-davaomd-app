import { Rating } from "./rating.model";
import { Schedule } from "./schedule.model";

export interface Doctor {
    name: string;
    specialty: string;
    photo: string;
    rating?: Rating;
    schedule: Schedule[];
}