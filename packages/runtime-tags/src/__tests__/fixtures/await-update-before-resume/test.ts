import { flush, wait } from "../../utils/resolve";

export const steps = [{}, wait(1), flush, wait(2)];
