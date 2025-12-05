import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, flush, flush, wait];

export const skip_equivalent = true; // in-order streaming
