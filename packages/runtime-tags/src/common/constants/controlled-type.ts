export const InputChecked = 0;
export const InputCheckedValue = 1;
export const InputValue = 2;
export const SelectValue = 3;
export const DetailsOrDialogOpen = 4;
export const None = 5;

type Self = typeof import("./controlled-type");
export type Value = Self[keyof Self];
