import { CONTENT_REGISTER_ID } from "../common/meta";
import { type Accessor, PatchKey, type Scope } from "../common/types";
import { _content } from "./renderer";
import { _resume, patchers, patchScope } from "./resume";

// Pairs a custom tag's child scope through its parent: the entry's value is
// the child's partial and the live child sits at the same accessor.
patchers[PatchKey.Child] = (scope, key, value) => {
  patchScope(
    value as Scope,
    scope[key.slice(PatchKey.Child.length) as Accessor] as Scope,
  );
};

// Rebuilds a registered content value from an in-band template, so resume
// can dereference boundary content with no template dom module.
_resume(CONTENT_REGISTER_ID, (template: string, owner?: Scope) =>
  _content("", template)(owner),
);
