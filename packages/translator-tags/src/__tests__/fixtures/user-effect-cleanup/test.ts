import { wait } from "../../utils/resolve";
export const steps = [{ value: 0 }, wait(4), { value: 1 }, wait(4)] as const;
