import { Time } from "./types";

export function leftPadTime(num: number): string{
    let numString = num.toString();
    return numString.length === 1 ? "0" + numString : numString;
}

export function addTimes(times: Time[]): Time {
    let hours = 0;
    let minutes = 0;
    
    times.forEach(time => {
        minutes = minutes + time.minutes;
        hours = hours + Math.floor(minutes / 60);
        minutes  = minutes % 60;
        hours = hours + time.hours;
    });

    return {
        hours, 
        minutes
    }
}