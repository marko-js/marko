import {
  type Accessor,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../../common/types";
import "./child.feat";
import { patchers } from "./apply";

// A created `<define>` body's child key names its owner, its client `_`: a `$`
// per owner up from the tag's scope to the one that defined the body.
const applyChild = patchers[PatchKey.Child]!;
patchers[PatchKey.Child] = (scope, key, value) => {
  let owner = scope,
    at = PatchKey.Child.length;
  for (; key[at] === "$"; at++) owner = owner[AccessorProp.Owner]!;
  if (at > PatchKey.Child.length) {
    const accessor = key.slice(at) as Accessor;
    (scope[accessor] as Scope)[AccessorProp.Owner] ??= owner;
    key = PatchKey.Child + accessor;
  }
  applyChild(scope, key, value);
};
