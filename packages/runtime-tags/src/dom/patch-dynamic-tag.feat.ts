import { encodeAccessor } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type EncodedAccessor,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import { _dynamic_tag } from "./control-flow";
// The tag's branch pairs through a `PatchChild` entry.
import "./patch-child.feat";
import { getContent } from "./patch-shells";
import type { Renderer } from "./renderer";
import { createPatchers, getRegisteredWithScope, patchers } from "./resume";

// `[renderer, input, contentId, varId]` or a bare renderer; native tags are
// `>div` (`["div"]` alone), `^id` binds the tag's scope, `^^id` its owner, and
// space-separated hops before the id step down from there or the page root.
patchers[PatchKey.DynamicTag] = createPatchers[PatchKey.DynamicTag] = (
  scope,
  key,
  entry,
) => {
  const accessor = key.slice(PatchKey.DynamicTag.length) as Accessor;
  const bare = !Array.isArray(entry);
  let [renderer, input, contentId, varId, ...locals] = (
    bare ? [entry] : entry
  ) as [
    unknown,
    unknown,
    string | 0 | undefined,
    string | 0 | undefined,
    ...Scope[],
  ];
  if (typeof renderer === "string" && (bare || input !== undefined)) {
    if (renderer[0] === ">") {
      renderer = renderer.slice(1);
    } else {
      let id = renderer;
      let owner: Scope | undefined;
      while (id[0] === "^") {
        owner = owner ? owner[AccessorProp.Owner]! : scope;
        id = id.slice(1);
      }
      const hops = id.split(" ");
      id = hops.pop()!;
      if (hops.length) {
        if (!owner) {
          for (owner = scope; owner[AccessorProp.Owner];) {
            owner = owner[AccessorProp.Owner]!;
          }
        }
        for (const hop of hops) owner = owner[hop as Accessor] as Scope;
      }
      if (
        !input &&
        !locals.length &&
        // The live branch renders this content for this owner (`rendererKey`).
        scope[(AccessorPrefix.ConditionalRenderer + accessor) as Accessor] ===
          (owner ? id + " " + owner[AccessorProp.Id] : id)
      ) {
        return;
      }
      renderer = getContent(id, owner, ...locals);
      // Every template of the build has a record; the transport refuses
      // another build's patch, so an unresolved id is a bug.
      if (MARKO_DEBUG && !renderer) {
        throw new Error(
          `A patch names content "${id}" the page cannot resolve.`,
        );
      }
    }
  }
  // A branch made here from a client renderer (not a shell) sets up before the
  // flush's entries reach it; a component renders the content itself.
  let content = contentId ? getContent(contentId) : undefined;
  const component = renderer && typeof renderer !== "string";
  const maker = (component ? renderer : content) as Renderer | undefined;
  const setup =
    !(maker as { [RendererProp.Shell]?: unknown })?.[RendererProp.Shell] &&
    maker?.[RendererProp.Setup];
  const branchKey = (AccessorPrefix.BranchScopes + accessor) as Accessor;
  const prevBranch = scope[branchKey];
  if (setup) {
    const early = Object.create(maker, { [RendererProp.Setup]: {} });
    // Its `<return>` mark rides the setup it hides (a debug check reads it).
    if (MARKO_DEBUG) early[RendererProp.Returns] = setup[RendererProp.Returns];
    if (component) renderer = early;
    else content = early;
  }
  (
    _dynamic_tag(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
      content ? () => content! : 0,
      varId
        ? () => (owner: Scope, value: unknown) =>
            getRegisteredWithScope<(v: unknown) => void>(
              varId as string,
              owner,
            )(value)
        : 0,
      Array.isArray(input) as unknown as 1,
    ) as (scope: Scope, renderer: unknown, getInput?: () => unknown) => void
  )(scope, renderer || undefined, input ? () => input : undefined);
  const branch = scope[branchKey] as Scope;
  if (setup && branch !== prevBranch) {
    setup(
      typeof renderer === "string"
        ? (branch[
            (AccessorPrefix.BranchScopes +
              (MARKO_DEBUG ? `#${renderer.toLowerCase()}/0` : "a")) as Accessor
          ] as Scope)
        : branch,
    );
  }
};
