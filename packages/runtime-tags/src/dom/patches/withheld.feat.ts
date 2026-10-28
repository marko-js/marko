import { isKeptShellId } from "../../common/helpers";
import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import { _resumed } from "../resume";
import { subscribeToScopeSet } from "../signals";
import {
  installPatchShells,
  patchers,
  patchScope,
  setupPatchers,
} from "./apply";
import "./dynamic-tag.feat";
import { registerShell, shells } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Withheld]: Scope;
  }
}

// The kept instances of content its owner holds, and the withheld entry it last
// took, which an instance the client creates later takes too.
export type WithheldScopes = Set<Scope> & { [PatchKey.Withheld]?: Scope };

// The holes of content a client consumer keeps, for each live instance its
// owner holds.
patchers[PatchKey.Withheld] = (scope, contentId, value) => {
  const instances = (scope[AccessorPrefix.WithheldScopes + contentId] ||=
    new Set()) as WithheldScopes;
  instances[PatchKey.Withheld] = value;
  for (const instance of instances) {
    if (instance[AccessorProp.Gen] > 0) patchScope(value, instance);
  }
};

// Content an entry creates joins its owner's set, as a page's instances do, and
// leaves it when destroyed.
const applyDynamicTag = patchers[PatchKey.DynamicTag]!;
patchers[PatchKey.DynamicTag] = setupPatchers[PatchKey.DynamicTag] = (
  scope,
  accessor,
  entry,
) => {
  applyDynamicTag(scope, accessor, entry);
  const renderer = Array.isArray(entry) ? entry[0] : entry;
  const branch = scope[AccessorPrefix.BranchScopes + accessor] as
    | Scope
    | undefined;
  if (typeof renderer === "string" && renderer[0] !== ">" && branch) {
    subscribeToScopeSet(
      branch[AccessorProp.Owner]!,
      AccessorPrefix.WithheldScopes +
        renderer.slice(renderer.lastIndexOf(" ") + 1).replace(/^\^+/, ""),
      branch,
    );
  }
};

// Kept content creates from its shell (its registration): an instance takes the
// owner's record, and main's dynamic tag joins it to the owner's set.
installPatchShells((shell) => {
  const id = registerShell(shell);
  if (isKeptShellId(id)) {
    const key = AccessorPrefix.WithheldScopes + id.slice(1);
    _resumed[id] = (owner?: Scope) => {
      const content = shells[id](owner);
      const setup = content[RendererProp.Setup];
      content[RendererProp.Accessor] = key;
      content[RendererProp.Setup] = (branch) => {
        const entry = (
          branch[AccessorProp.Owner]![key] as WithheldScopes | undefined
        )?.[PatchKey.Withheld];
        if (entry) patchScope(entry, branch);
        setup?.(branch);
      };
      return content;
    };
  }
});
