import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, flush, flush, wait(4)];

export const skip_equivalent = true; // in-order streaming
