import withHolding from "./handlers/withholding";

const Tax = {
    corporate: () => {},
    income: () => {},
    withholding: withHolding,
    consumption: () => {}
};
export default Tax;
