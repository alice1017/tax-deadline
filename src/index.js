import withHolding from "./handlers/withholding";
import corporate from "./handlers/corporate";

const Tax = {
    corporate: corporate,
    income: () => {},
    withholding: withHolding,
    consumption: () => {}
};
export default Tax;
