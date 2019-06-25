import { StaticSymbol } from '@angular/compiler';

export class Book {
    photo: string;
    synopsis: string;
    etat: Status;
    constructor(public title: string, public author: string) { }

}
export enum Status {
    "R" = "Reading",
    "C" = "Completed",
    "O" = "On Hold",
    "D" = "Dropped",
    "P" = "Plan to read",
}
/*
export enum status2 {
    1 = "Reading",

    2 = "Completed",
    3 = "On Hold",
    4 = "Dropped",
    5 = "Plan to read",
}*/