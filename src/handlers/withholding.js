import calculateDeadline from "../modules/calculate";
import moment from "moment";
moment.locale("ja");

/**
 * The special case in Japanese: 納期の特例
 *
 * Normally, a deadline of withholding tax is 10th every month. However, if
 * you use the special case, that deadline of the January is 20th.
 * @typedef {Object} WithHoldingOptions
 * @property {Boolean} useSpecialCase Use the special case of tax deadline or not.
 */

/**
 * Calculate a deadline of the Withholding tax payment.
 * @param {Number} year A four-digit year number.
 * @param {Number} month A 1-12 month number.
 * @param {Object} WithHoldingOptions
 */
export default function withHolding(year, month, options={}) {

    const { useSpecialCase=false } = options;

    // -> January deadline is 20th if use special case
    const date = (useSpecialCase && month === 1) ? 20: 10;
    const deadline = calculateDeadline(year, month, date);
    return deadline;
}
