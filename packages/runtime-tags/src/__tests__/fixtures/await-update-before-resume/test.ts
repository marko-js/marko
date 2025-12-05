import { after, flush, wait } from "../../utils/resolve";

export const steps = [{}, after(2), flush, wait];
