import { AccessorProp, PatchKey, type Scope } from "../../common/types";
import { getRegisteredWithScope } from "../resume";
import { setupPatchers } from "./apply";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Var]: string;
  }
}

// The wiring a child's `_return` writes through, registered at its owner.
setupPatchers[PatchKey.Var] = (scope, _accessor, id) => {
  scope[AccessorProp.TagVariable] = getRegisteredWithScope<
    (owner: Scope) => unknown
  >(id)(scope[AccessorProp.Owner]!);
};
