import { getFile } from "@marko/compiler/babel-utils";

import * as BindingType from "./constants/binding-type";
import { isPersisted } from "./marko-config";
import { filter, indexOf, type Opt } from "./optional";
import type { Binding } from "./references";
import type { Section } from "./sections";
import { getSerializeSourcesForRef } from "./serialize-reasons";

export function scopeReasonRuntime() {
  return isPersisted()
    ? ("_persisted_reason" as const)
    : ("_scope_reason" as const);
}

// The stable wire/registry key for a fill: template id plus the fill's
// index, like register child ids but in the fill registry's own index space
// (so suffixes shared with `registeredValues` ids cannot conflict).
export function getPatchFillKey(binding: Binding) {
  return (
    getFile().metadata.marko.id +
    indexOf(getPatchFillBindings(binding.section), binding)
  );
}

// The template's fill bindings.
export function getPatchFillBindings(section: { bindings: Opt<Binding> }) {
  return filter(section.bindings as Opt<Binding>, isPatchFillBinding);
}

// A potential fill: a server-sourced value whose reads intersect client
// state. The server writes every potential fill; the client registration
// rides the intersection itself, so tree-shaking decides which apply.
export function isPatchFillBinding(binding: Binding) {
  if (
    !isPersisted() ||
    binding.section.parent ||
    !binding.sources?.param ||
    binding.sources.state ||
    (binding.type !== BindingType.input &&
      binding.type !== BindingType.param &&
      binding.type !== BindingType.derived)
  ) {
    return false;
  }

  for (const read of binding.reads) {
    if (
      !read.isEffect &&
      getSerializeSourcesForRef(read.referencedBindings)?.state
    ) {
      return true;
    }
  }

  return false;
}

// Sections whose text/attr holes emit direct patch captures: the root, and
// patchable branch bodies (their captures ride the branch scope, which the
// client pairs to the live branch or adopts into a constructed one).
export function isPatchCaptureSection(section: Section) {
  return !section.parent || (!!section.isBranch && !section.parent.parent);
}
