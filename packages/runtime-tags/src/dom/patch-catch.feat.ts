import { withBranches } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  PatchKey,
  type Scope,
} from "../common/types";
import { renderCatch, setConditionalRenderer } from "./control-flow";
import "./patch-child.feat";
import { getContent } from "./patch-shells";
import { _content, createAndSetupBranch, type Renderer } from "./renderer";
import { patchers } from "./resume";
import { findBranchWithKey } from "./scope";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Catch]: [error: unknown, bodyId: string, html?: string];
  }
}

// What a catch replaced, kept on its branch: the body's renderer and the
// try's slots, so the next flush addressing the try rebuilds it.
type Recover = [body: Renderer, catchContent: unknown, placeholder: unknown];

// A catch destroys the body as a client throw does; the entry ships the
// body's shell so a later flush can rebuild the try.
patchers[PatchKey.Catch] = recovering(
  (key) => key.slice(PatchKey.Catch.length),
  withBranches((scope, key, [error, bodyId, html]) => {
    const accessor = key.slice(PatchKey.Catch.length) as Accessor;
    const link = (AccessorPrefix.BranchScopes + accessor) as Accessor;
    const tryBranch = scope[link] as BranchScope;
    const catchContent = tryBranch[AccessorProp.CatchContent];
    // An elided catch slot (`0`) renders the flush's server-rendered html.
    if (!catchContent) {
      tryBranch[AccessorProp.CatchContent] = _content(
        "",
        html,
      )(tryBranch[AccessorProp.Owner]) as never;
    }
    // An ancestor's pending UI settles first so the catch lands where the
    // body was; `renderCatch` unwinds the try's own placeholder.
    const tryPlaceholder = findBranchWithKey(
      tryBranch,
      AccessorProp.PlaceholderContent,
    );
    const awaitCounter = (tryPlaceholder || tryBranch)[
      AccessorProp.AwaitCounter
    ] as AwaitCounter | undefined;
    if (awaitCounter?.i && tryPlaceholder !== tryBranch) {
      awaitCounter.i = 1;
      awaitCounter.c();
    }
    renderCatch(tryBranch, error);
    (scope[link] as BranchScope)[AccessorProp.RecoverContent] = [
      getContent(bodyId),
      catchContent,
      tryBranch[AccessorProp.PlaceholderContent],
    ] as never;
  }),
);

// A try showing its catch: the flush addresses the body, rebuilt from what
// the catch replaced.
patchers[PatchKey.Child] = recovering(
  (key) =>
    key.slice(PatchKey.Child.length + AccessorPrefix.BranchScopes.length),
  patchers[PatchKey.Child]!,
);

// Rebuilds a try showing its catch before the entry applies to it.
function recovering<P extends (scope: Scope, key: string, value: any) => void>(
  accessorOf: (key: string) => string,
  patch: P,
): P {
  return ((scope: Scope, key: string, value: unknown) => {
    const accessor = accessorOf(key) as Accessor;
    const link = (AccessorPrefix.BranchScopes + accessor) as Accessor;
    const recover = (scope[link] as BranchScope | undefined)?.[
      AccessorProp.RecoverContent
    ] as Recover | 0;
    if (recover) {
      setConditionalRenderer(scope, accessor, recover[0], createAndSetupBranch);
      (scope[link] as BranchScope)[AccessorProp.BranchAccessor] = accessor;
      (scope[link] as BranchScope)[AccessorProp.CatchContent] =
        recover[1] as never;
      (scope[link] as BranchScope)[AccessorProp.PlaceholderContent] =
        recover[2] as never;
    }
    patch(scope, key, value);
  }) as P;
}
