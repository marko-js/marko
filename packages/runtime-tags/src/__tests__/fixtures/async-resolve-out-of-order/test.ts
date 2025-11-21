import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait(3)];

export const skip_equivalent = true; // in-order streaming
