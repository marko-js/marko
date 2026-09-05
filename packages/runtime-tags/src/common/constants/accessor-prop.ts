export const Global = "$";
export const Owner = "_";
export const AbortControllers = "A";
export const AbortScopes = "B";
export const AwaitCounter = "O";
export const BranchAccessor = "C";
export const BranchScopes = "D";
export const CatchContent = "E";
export const ClosestBranch = "F";
export const ClosestBranchId = "G";
export const Gen = "H";
export const DetachedAwait = "V";
export const EndNode = "K";
export const Id = "L";
export const Load = "X";
export const LoopKey = "M";
export const LoopIndex = "I";
export const ParentBranch = "N";
export const PendingEffects = "J";
export const PendingRenders = "W";
export const PendingScopes = "Y";
export const PlaceholderBranch = "P";
export const PlaceholderContent = "Q";
export const Renderer = "R";
export const StartNode = "S";
export const Subscriptions = "Z";
export const TagVariable = "T";
export const TagVariableChange = "U";
// Past `Z` the run continues two-lettered (still dot-accessible; no prefixed
// key matches, accessors being lowercase).
export const PatchChanged = "AA";
export const PatchSetup = "AB";
export const ReadyId = "AC";

type Self = typeof import("./accessor-prop");
export type Value = Self[keyof Self];
