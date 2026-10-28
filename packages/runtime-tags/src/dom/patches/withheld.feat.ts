import { isKeptShellId, keptShellId } from "../../common/helpers";
import {
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  RendererProp,
  type Scope,
} from "../../common/types";
import { runId } from "../queue";
import { _resumed } from "../resume";
import { creating, installPatchShells, patchers, patchScope } from "./apply";
import "./dynamic-tag.feat";
import { registerShell, shells } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Withheld]:
      | Scope
      | [patch: Scope, contentId: string, ownerHops?: string];
  }
}

// The kept instances of content its owner holds no site reaches, and the record
// it last took, which an instance the client creates takes too.
export type WithheldScopes = Set<Scope> & { [PatchKey.Withheld]?: Scope };

// Kept content's holes: at a site, for the instance there, as a document renders
// it; at its owner, for each instance no site reaches.
patchers[PatchKey.Withheld] = (scope, accessor, value) => {
  if (Array.isArray(value)) {
    const [patch, id, hops] = value;
    let branch = scope[AccessorPrefix.BranchScopes + accessor] as
      | Scope
      | undefined;
    if (branch) {
      const key = scope[AccessorPrefix.ConditionalRenderer + accessor];
      const owner = " " + branch[AccessorProp.Owner]![AccessorProp.Id];
      // A live branch holds it (`rendererKey`): in a `<for>` row the page rendered, by
      // its id; in one a patch created, by its shell's.
      if (key !== id + owner && key !== keptShellId(id) + owner)
        branch = undefined;
    }
    // Else a consumer this flush created renders it, from its shell, not its
    // registration: it joins no owner's set, so only its site reaches it.
    if (
      !branch &&
      hops !== undefined &&
      creating &&
      scope[AccessorProp.Gen] === runId
    ) {
      patchers[PatchKey.DynamicTag]!(scope, accessor, hops + keptShellId(id));
      branch = scope[AccessorPrefix.BranchScopes + accessor] as Scope;
    }
    if (branch) patchScope(patch, branch);
  } else {
    const instances = (scope[AccessorPrefix.WithheldScopes + accessor] ||=
      new Set()) as WithheldScopes;
    instances[PatchKey.Withheld] = value;
    // One this flush created took its holes at its site.
    for (const instance of instances) {
      if (
        instance[AccessorProp.Gen] > 0 &&
        instance[AccessorProp.Gen] < runId
      ) {
        patchScope(value, instance);
      }
    }
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
        patchScope(
          (branch[AccessorProp.Owner]![key] as WithheldScopes | undefined)?.[
            PatchKey.Withheld
          ],
          branch,
        );
        setup?.(branch);
      };
      return content;
    };
  }
});
