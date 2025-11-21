import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait(1)];
