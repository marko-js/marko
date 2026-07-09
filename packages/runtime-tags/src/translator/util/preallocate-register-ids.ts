// Analyze-stage pre-allocation of optimized register ids.
//
// `getTemplateId` hands out per-template child ids (`a0`, `a1`, ...) in
// first-come order from a map shared across every entry-kind compile of a
// template (keyed by the `optimizeKnownTemplates` array identity). Translate
// requests those ids live, so when integrators run entry-kind compiles
// concurrently, whichever compile reaches a key first decides its id --
// nondeterministic output at best, and with build caches mixing artifacts
// from differently-ordered runs, server/client id divergence at worst (see
// agent-feedback/bugs.md "Optimized register-id allocation races").
//
// The fix mirrors `registerFunction` (and the `$signal` abort ids): analyze
// runs once per cached file, so it enumerates every child key any
// entry-kind translate can request -- in one fixed canonical order -- and
// allocates them all up front. Translates then only ever LOOK UP existing
// keys; a translate-time request for a key analyze failed to predict is an
// internal error (tripwired in `getResumeRegisterId`), the same
// analyze-proof contract `analyzeUpdateGeneric` uses.
//
// The enumeration reads only analyze-final, entry-kind-independent data:
// bindings, getters, closures, serialize reasons, accessors, and per-tag
// footprints the analyze visitors record here (kept next to the translate
// sites they predict).
import { types as t } from "@marko/compiler";
import { getFile, getTemplateId } from "@marko/compiler/babel-utils";

import { isPersisted } from "./marko-config";
import { forEach, some } from "./optional";
import {
  type Binding,
  getScopeAccessor,
  kBranchSerializeReason,
} from "./references";
import { isDynamicClosure, type Section } from "./sections";
import {
  getSerializeReason,
  getSerializeSourcesForExpr,
  isReasonDynamic,
  isRequestDerivedSerializeReason,
  isStateSerializeReason,
} from "./serialize-reasons";
import { buildResumeRegisterKey } from "./signals";
import { createSectionState } from "./state";
import {
  forEachUpdateSeedBinding,
  forEachUpdateValueBinding,
} from "./update-merges";

/**
 * Per-tag analyze footprints. Each variant is recorded by the analyze half
 * of the visitor whose translate half requests the key, so the prediction
 * lives beside the code it predicts.
 */
export type RegisterIdFootprint =
  | {
      /** An effect signal group footprint for constructs whose effect
       * statement uses refs that differ from any extra's (eg controllable
       * change handlers register under undefined refs). `extra`-carrying
       * effects are discovered by the `isEffect` walk instead. */
      kind: "effect";
      extra?: t.NodeExtra;
    }
  | {
      /** A tag variable's `_var` registration (custom/dynamic tags). */
      kind: "tagVar";
      binding: Binding;
    }
  | {
      /** `<if>`/`<else-if>` chain: conditional update signal + merge. */
      kind: "if";
      binding: Binding;
      extra: t.NodeExtra;
      branchBodySections: (Section | undefined)[];
    }
  | {
      /** `<for>`: participating loops register branch content by id. */
      kind: "for";
      bodySection: Section;
      extra: t.NodeExtra;
    }
  | {
      /** Dynamic tag: renderer-id update signal + merge. */
      kind: "dynamic";
      binding: Binding;
    }
  | {
      /** `<try>` with `@placeholder`: pending-boundary site id, and the
       * body section is a placeholder root for `pending` closure keys. */
      kind: "tryPlaceholder";
      binding: Binding;
      bodySection: Section | undefined;
    }
  | {
      /** Body section owned by its control-flow tag (`<await>`/`<try>`):
       * rendered as a branch renderer, so it never registers content.
       * (`<if>`/`<for>` bodies mark `section.isBranch` in analyze.) */
      kind: "ownedBody";
      bodySection: Section | undefined;
    };

const [getFootprints] = createSectionState<RegisterIdFootprint[]>(
  "registerIdFootprints",
  () => [],
);

// The enumerated key set, shared by every section of a file (sections are
// cached-analysis objects, so this persists exactly as long as the analyze
// itself and is visible to every entry-kind translate). `undefined` means
// the file's analyze predates/skips enumeration (eg it threw first).
const preallocatedKeys = new WeakMap<Section, Set<string>>();

/** Tripwire lookup for `getResumeRegisterId`. */
export function getPreallocatedRegisterKeys(section: Section) {
  return preallocatedKeys.get(section);
}

export function recordRegisterIdFootprint(
  section: Section,
  footprint: RegisterIdFootprint,
) {
  getFootprints(section).push(footprint);
}

/**
 * Runs at program analyze exit, after `finalizeReferences` and
 * `analyzeUpdateGeneric`. Enumerates the register-key union in canonical
 * order (sections ascending; classes in a fixed sequence within each).
 */
export function preallocateRegisterIds(program: t.NodePath<t.Program>) {
  const programExtra = program.node.extra;
  const sections = programExtra.sections;
  if (!sections) return;
  const updateGeneric = !!programExtra.domExports?.updateGeneric;
  const persisted = isPersisted();
  const keys: string[] = [];
  const seen = new Set<string>();
  const add = (key: string) => {
    if (!seen.has(key)) {
      seen.add(key);
      keys.push(key);
    }
  };

  // Section-level structure derived from footprints.
  const ownedSections = new Set<Section>();
  const placeholderRoots = new Set<Section>();
  for (const section of sections) {
    for (const footprint of getFootprints(section)) {
      if (footprint.kind === "ownedBody" && footprint.bodySection) {
        ownedSections.add(footprint.bodySection);
      }
      if (footprint.kind === "tryPlaceholder" && footprint.bodySection) {
        placeholderRoots.add(footprint.bodySection);
      }
    }
  }
  const underTryPlaceholder = (section: Section) => {
    let cur = section.parent;
    while (cur) {
      if (placeholderRoots.has(cur)) return true;
      cur = cur.parent;
    }
    return false;
  };

  // Update-globals sections (mixed state+`$global` statements) discovered
  // from referenced extras (`section`/sources are analyze reference data,
  // read after `finalizeReferences`). Dynamic style names need no
  // enumeration: `dynamicStyleName` allocates during the style tag's own
  // analyze, once per cached file, like `registerFunction`.
  const updateGlobalsSections = new Set<Section>();
  t.traverseFast(program.node, (node) => {
    const extra = node.extra;
    if (extra?.section && !extra.isEffect && persisted && !updateGeneric) {
      const sources = getSerializeSourcesForExpr(extra);
      if (sources && sources.state && sources.global) {
        updateGlobalsSections.add(extra.section as Section);
      }
    }
  });

  for (const section of sections) {
    // 1. Element/hoist getters (`_el`/`_hoist_resume` + the html side's
    // matching serializations) -- `binding.getters` is finalize output.
    forEach(section.bindings, (binding) => {
      for (const [hoistSection, hasReference] of binding.getters) {
        if (hoistSection) {
          if (hasReference) {
            add(buildResumeRegisterKey(hoistSection, binding, "hoist"));
          }
        } else {
          add(buildResumeRegisterKey(section, binding));
        }
      }
    });

    // 2. Analyze-recorded footprints (effects, tag vars, structural
    // update ids).
    for (const footprint of getFootprints(section)) {
      switch (footprint.kind) {
        case "effect":
          add(
            buildResumeRegisterKey(
              section,
              footprint.extra?.referencedBindings,
            ),
          );
          break;
        case "tagVar":
          add(buildResumeRegisterKey(section, footprint.binding, "var"));
          break;
        case "if":
          if (
            persisted &&
            !isStateSerializeReason(getSerializeSourcesForExpr(footprint.extra))
          ) {
            const sources = getSerializeSourcesForExpr(footprint.extra);
            if (
              isReasonDynamic(sources) ||
              footprint.branchBodySections.some(
                (branchBodySection) =>
                  branchBodySection &&
                  isRequestDerivedSerializeReason(
                    getSerializeReason(
                      branchBodySection,
                      kBranchSerializeReason,
                    ),
                  ),
              )
            ) {
              add(
                buildResumeRegisterKey(
                  section,
                  undefined,
                  `update_if_${getScopeAccessor(footprint.binding)}`,
                ),
              );
            }
          }
          break;
        case "for":
          if (persisted) {
            const sources = getSerializeSourcesForExpr(footprint.extra);
            if (
              !isStateSerializeReason(sources) &&
              (isReasonDynamic(sources) ||
                isRequestDerivedSerializeReason(
                  getSerializeReason(
                    footprint.bodySection,
                    kBranchSerializeReason,
                  ),
                ))
            ) {
              add(
                buildResumeRegisterKey(
                  footprint.bodySection,
                  "content",
                  "update",
                ),
              );
            }
          }
          break;
        case "dynamic":
          if (persisted && getSerializeReason(section, footprint.binding)) {
            add(
              buildResumeRegisterKey(
                section,
                undefined,
                `update_dynamic_${getScopeAccessor(footprint.binding)}`,
              ),
            );
          }
          break;
        case "tryPlaceholder":
          if (persisted) {
            add(
              buildResumeRegisterKey(
                section,
                undefined,
                `update_boundary_${getScopeAccessor(footprint.binding)}`,
              ),
            );
          }
          break;
      }
    }

    // 4. Pending closures: a closure consumed under a `<try>` placeholder
    // registers so pending effects can resolve it by id.
    // `_closure_get` carries the pending id; `<if>`/`<for>` branch
    // sections install closure signal builders instead, which only defer
    // to `_closure_get` for dynamic closures.
    forEach(section.referencedClosures, (closure) => {
      if (
        (!section.isBranch || isDynamicClosure(section, closure)) &&
        (underTryPlaceholder(section) ||
          some(closure.closureSections, underTryPlaceholder))
      ) {
        add(buildResumeRegisterKey(section, closure, "pending"));
      }
    });

    if (persisted && !updateGeneric) {
      // 5. Update seed merges: `let` state applied through the binding's
      // registered signal (`?update` exit) / registered in the persisted
      // entry (`registerUpdateValueSignals`).
      forEachUpdateSeedBinding(section, (binding) => {
        add(buildResumeRegisterKey(section, binding, "var"));
      });

      // 6. Update value merges that must re-run the binding's value signal.
      forEachUpdateValueBinding(section, (binding, needsSignal) => {
        if (needsSignal && !binding.pruned) {
          add(buildResumeRegisterKey(section, binding, "var"));
        }
      });

      // 7. Mixed state+`$global` statements re-invoke through a per-section
      // registered function after the patch's `$global` assign lands.
      if (updateGlobalsSections.has(section)) {
        add(buildResumeRegisterKey(section, undefined, "update_globals"));
      }
    }

    // 8. Content renderers (`_content`/`_content_resume` + `?update`
    // content merges dispatched by renderer id): every non-root section
    // rendered as a tag body through `translateAttrs`/`buildContent` --
    // `<if>`/`<for>` bodies (`isBranch`) and `<await>` bodies render
    // through branch renderer args instead and never register.
    if (section.parent && !section.isBranch && !ownedSections.has(section)) {
      add(buildResumeRegisterKey(section, "content"));
    }
  }

  // 9. The root update merge (`?update` default export id; also the key
  // parents' `load=` dispatch computes cross-file). Enumerated for every
  // persisted template -- update-generic templates normally never build an
  // update module, but a `load=` parent forces one (lazy children always
  // dispatch through `_update_load`), and the child can't see its parents.
  if (persisted) {
    add(buildResumeRegisterKey(sections[0], "update"));
  }

  if (process.env.MARKO_REGISTER_ID_LOG) {
    const filename = program.hub.file.opts.filename;
    (require("fs") as typeof import("fs")).appendFileSync(
      process.env.MARKO_REGISTER_ID_LOG,
      keys.map((key) => `${filename}\tenum\t${key}\t-\n`).join(""),
    );
  }

  for (const section of sections) {
    preallocatedKeys.set(section, seen);
  }

  // Under optimize with a shared known-templates config, allocate every
  // key's child id NOW (analyze runs once per cached file), so translates
  // only ever look up existing slots and compile scheduling can't permute
  // ids. Unknown templates hash their child keys (already deterministic).
  const { markoOpts, opts } = getFile();
  if (markoOpts.optimize && markoOpts.optimizeKnownTemplates?.length) {
    for (const key of keys) {
      getTemplateId(markoOpts, opts.filename as string, key);
    }
  }
}
