import assert from "power-assert";
import Tax from "../dist";

describe("Test of the `Tax.corporate`", () => {

    // 曜日：0:日, 1:月, 2:火, 3:水, 4:木, 5:金, 6:土

    it("1. should be normal deadline (the end every month)", () => {
        const deadline = Tax.corporate(2019, 7);
        assert(deadline.date() === 31);
        assert(deadline.day() === 3);
        assert(deadline.month() === (7 - 1));
    });

    it("2. should be move deadline date (the end every month)", () => {
        const deadline = Tax.corporate(2019, 6);
        assert(deadline.date() === 1);
        assert(deadline.day() === 1);
        assert(deadline.month() === ((6 + 1) - 1));
    });

});
