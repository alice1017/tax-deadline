import assert from "power-assert";
import withHolding from "../dist/modules/withholding";

describe("Test of the `withHolding`", () => {

    // 曜日：0:日, 1:月, 2:火, 3:水, 4:木, 5:金, 6:土

    it("1. should be normal deadline (10th every month)", () => {
        const deadline = withHolding(2019, 7);
        assert(deadline.date() === 10);
        assert(deadline.day() === 3);
    });

    it("2. should be 20th deadline (use special case)", () => {
        const deadline = withHolding(2017, 1, {
            useSpecialCase: true
        });
        assert(deadline.date() === 20);
        assert(deadline.day() === 5);
    });

    it("3. should be move deadline date (use special case)", () => {
        const deadline = withHolding(2019, 1, {
            useSpecialCase: true
        });
        assert(deadline.date() === 21);
        assert(deadline.day() === 1);
    });

    it("4. should be move deadline date (10th every month)", () => {
        const deadline = withHolding(2018, 11);
        assert(deadline.date() === 12);
        assert(deadline.day() === 1);
    });

});
