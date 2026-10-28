// A bound registration's function for its owner, and the run last binding it.
export const BoundFn = "U";
export const BranchScopes = "A";
export const ClosureScopes = "B";
export const ClosureSignalIndex = "C";
export const ConditionalRenderer = "D";
export const ControlledObserver = "N";
export const ControlledHandler = "E";
export const ControlledType = "F";
export const ControlledValue = "G";
export const DynamicHTMLLastChild = "H";
export const DynamicHTMLValue = "R";
export const EventAttributes = "I";
export const IdFallback = "J";
export const KeyedScopes = "O";
export const Lifecycle = "K";
// A patch's change mark of a value an entry depends on, by its response.
export const PatchChanged = "T";
export const Promise = "L";
export const TagVariableChange = "M";
export const TryBranch = "Q";
// The instances of a content its owner holds where a client consumer keeps them.
export const WithheldScopes = "P";

type Self = typeof import("./accessor-prefix");
export type Value = Self[keyof Self];
