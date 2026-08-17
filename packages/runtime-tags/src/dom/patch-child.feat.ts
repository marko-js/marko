import { CONTENT_REGISTER_ID } from "../common/meta";
import {
  type Accessor,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { _content } from "./renderer";
import { _resume, failPatch, patchers, patchScope } from "./resume";

// Pairs a custom tag's child scope through its parent: the entry's value is
// the child's partial and the live child sits at the same accessor (a
// construct's walk created it; it takes the parent as owner here).
patchers[PatchKey.Child] = (scope, key, value) => {
  const child = scope[key.slice(PatchKey.Child.length) as Accessor] as Scope;
  if (!child) failPatch();
  child[AccessorProp.Owner] ??= scope;
  patchScope(value as Scope, child);
};

// Rebuilds a registered content value from an in-band template, so resume
// can dereference boundary content with no template dom module.
_resume(CONTENT_REGISTER_ID, (template: string, owner?: Scope) =>
  _content("", template)(owner),
);
