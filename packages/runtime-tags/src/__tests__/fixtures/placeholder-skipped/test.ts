import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait(1)];

export const skip_equivalent = true; // in-order streaming
