// Write a function getDayType that takes a day name and returns:

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
            return "Weekend";
            break;

        case "saturday":
            return "Weekend";
            break;

        case "sunday":
            return "Working Day";
            break;

        case "monday":
            return "Working Day";
            break;
        case "tuesday":
            return "Working Day";
            break;
        case "wednesday":
            return "Working Day";
            break;
        case "thursday":
            return "Working Day";
            break

        default:
            return "Invalid Day";
            break
    }
}

console.log(getDayType("Friday"))
console.log(getDayType("friday"))
console.log(getDayType("MONDAY"))
console.log(getDayType("Bandarban"))
