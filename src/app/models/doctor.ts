import { Rating } from "./rating";

export interface Doctor {
    name: string
    specialty: string
    photo: string
    rating: Rating;
}