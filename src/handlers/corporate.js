import moment from "moment-timezone";
import { checkDay } from "../modules/calculate";
moment.locale("ja");

/**
 * Calculate a deadline of the corporate tax payment.
 * @param {Number} year A four-digit year number.
 * @param {Number} month A 1-12 month number. this is the tax declaration
 * month, not the closing month.
 */
export default function corporate(year, month) {

    // -> step 1: create the moment instance at 1st next month.
    const nextMonth = (month + 1).toString().padStart(2, 0);
    const firstDate = moment(`${year}-${nextMonth}-01`).tz("Asia/Tokyo");

    // -> step 2: calculate previous day.
    const deadline = firstDate.subtract(1, "days");

    // -> step 3: return instance after checking day of week.
    const additional = checkDay(deadline.day());
    return deadline.add(additional, "days");
}
