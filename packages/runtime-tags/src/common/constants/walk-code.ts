export const Get = 32;
export const Replace = 37;
export const EndChild = 38;

export const BeginChild = 47;
export const BeginChildWithVar = 48;
export const DynamicTagWithVar = 49;

export const Next = 67;
export const NextEnd = 91;

export const Over = 97;
export const OverEnd = 106;

export const Out = 107;
export const OutEnd = 116;

export const Multiplier = 117;
export const MultiplierEnd = 126;

type Self = typeof import("./walk-code");
export type Value = Self[keyof Self];
