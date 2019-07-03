import moment from "moment";
moment.locale("ja");

export default function calculateDeadline (year, month, date) {
    const deadline = moment().year(year).month(month-1).date(date);
    const day = deadline.day(); // -> 曜日： 0 => 日曜, 6 => 土曜

    // 曜日チェック
    if (day === 0) {
        // -> 1日ずらす
        return calculateDeadline(year, month, (date+1));
    }
    else if (day === 6) {
        // -> 2日ずらす
        return calculateDeadline(year, month, (date+2));
    }
    else {
        return deadline;
    }
};
