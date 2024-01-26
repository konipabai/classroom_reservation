export interface getSportsType {
    type: string;
    date: Date | string;
    time: [Date | string, Date | string];
}

export interface reserveSportsType {
    typeAndCourt: string;
    dateAndTime: string;
    reserveOrder: [string, string[], number, string][];
    reserveTime: [Date, Date];
    location: string;
    collaborative: string;
    number: number;
}

export interface resultSportsType {
    sportsType: string;
    sportsCourt: string;
    date: Date;
    reserveTime: [Date, Date];
    time: string[][];
    location: string[];
    collaborative: string;
    number: number[];
}