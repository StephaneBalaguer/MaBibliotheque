export class Book {
    photo: string;
    synopsis: string;
    etat: Status;
    note : number;
    constructor(public title: string, public author: string) { }

}
export enum Status {
    "R" = "Reading",
    "C" = "Completed",
    "O" = "On hold",
    "D" = "Dropped",
    "P" = "Plan to read",
}
