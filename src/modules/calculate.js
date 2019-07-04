import moment from "moment";
moment.locale("ja");

export function checkDay(day) {
    // -> 曜日： 0 => 日曜, 6 => 土曜
    if (day === 0) {
        return 1;
    }
    else if (day === 6) {
        return 2;
    }
    else {
        return 0;
    }
};

export default function calculateDeadline (year, month, date) {
    const deadline = moment().year(year).month(month-1).date(date);
    const additional = checkDay(deadline.day());
    return deadline.add(additional, "days");
};
