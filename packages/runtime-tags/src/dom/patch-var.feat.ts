import { AccessorProp, PatchKey, type Scope } from "../common/types";
import { constructPatchers, getRegisteredWithScope } from "./resume";

// The wiring a child's `_return` writes through, registered at its owner.
constructPatchers[PatchKey.Var] = (scope, _key, id) => {
  scope[AccessorProp.TagVariable] = getRegisteredWithScope<
    (owner: Scope) => unknown
  >(id as string)(scope[AccessorProp.Owner]!);
};
