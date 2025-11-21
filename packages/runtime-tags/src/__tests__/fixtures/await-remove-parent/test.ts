import { flush, wait } from "../../utils/resolve";

export const steps = [{}, wait(1), flush];

export const skip_equivalent = true; // try removed before flush
