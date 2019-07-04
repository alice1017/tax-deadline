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

## How to use

```javascript
import Tax from "tax-deadline";
const deadline = Tax.corporate(2019, 3);
console.log(deadline.format("YYYY年MM月DD日(ddd)");
// -> 2019年4月1日（月）
```
