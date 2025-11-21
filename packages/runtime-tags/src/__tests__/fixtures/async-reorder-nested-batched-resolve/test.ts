import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, flush, wait(4)];
