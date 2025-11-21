import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait(2), wait(2)];
