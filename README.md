# tax-deadline

[![Build Status](https://travis-ci.org/alice1017/tax-deadline.svg?branch=master)](https://travis-ci.org/alice1017/tax-deadline)

This module calculate a **deadline** of the **Japanese tax payment**.

---

**tax-deadline is UNDER DEVELOPMENT.**

---

## Category of the tax

| Japanese | English              |
|----------|----------------------|
| 法人税    | **Corporate** Tax    |
| 所得税    | **Income** Tax       |
| 源泉税    | **Withholding** Tax  |
| 消費税    | **Consumption** Tax  |

Refer to [**this page**](https://www.nta.go.jp/taxes/nozei/nofu/24200042/noufu_kigen.htm) for a deadline of each tax by law.

## How to use

```javascript
import Tax from "tax-deadline";
const deadline = Tax.corporate(2019, 3);
console.log(deadline.format("YYYY年MM月DD日(ddd)");
// -> 2019年4月1日（月）
```

## API document

### `Tax.corporate`

* ***description***

    Calculate a deadline of the coporate tax, and return a [**moment**](https://momentjs.com/) instance.

    A deadline of the corporate tax payment is from the next day of the fiscal year end date to two months. (ex, fiscal year: Aplil - March, deadline: 31th May )


* ***arguments***

    * *year* - `<Number>`

        A four-digit year number.

    * *month* - `<Number>`

        A 1-12 month number. this is the **tax declaration** month, not the fiscal year end month.
