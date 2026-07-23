export const NativeTag = 0;
export const CustomTag = 1;
export const DynamicTag = 2;
export const AttributeTag = 3;

type Self = typeof import("./tag-name-type");
export type Value = Self[keyof Self];
