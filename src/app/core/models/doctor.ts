import { Rating } from "./rating";
import { Schedule } from "./schedule";

export interface Doctor {
    name: string;
    specialty: string;
    photo: string;
    rating: Rating;
    schedule: Schedule[];
}