export const BranchScopes = "A";
export const ClosureScopes = "B";
export const ClosureSignalIndex = "C";
export const ConditionalRenderer = "D";
export const ControlledObserver = "N";
export const ControlledHandler = "E";
export const ControlledType = "F";
export const ControlledValue = "G";
export const DynamicHTMLLastChild = "H";
export const EventAttributes = "I";
export const KeyedScopes = "O";
export const Lifecycle = "K";
export const Promise = "L";
export const TagVariableChange = "M";

type Self = typeof import("./accessor-prefix");
export type Value = Self[keyof Self];
