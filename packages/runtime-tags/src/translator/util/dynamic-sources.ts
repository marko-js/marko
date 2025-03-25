import { types as t } from "@marko/compiler";

import type { Opt } from "./optional";
import {
  type Binding,
  BindingType,
  bindingUtil,
  isReferencedExtra,
  type ReferencedBindings,
} from "./references";
import { getDirectClosures, type Section } from "./sections";

export function getDynamicSourcesForBinding(binding: Binding) {
  if (binding.sources) {
    if (
      Array.isArray(binding.sources)
        ? binding.sources.every(isInputBinding)
        : isInputBinding(binding.sources)
    ) {
      return binding.sources;
    }

    return true as const;
  }
}

export function getDynamicSourcesForReferences(
  referencedBindings: ReferencedBindings,
) {
  if (referencedBindings) {
    let dynamicSources: Opt<Binding>;
    if (Array.isArray(referencedBindings)) {
      for (const binding of referencedBindings) {
        const newDynamicSources = getDynamicSourcesForBinding(binding);
        if (newDynamicSources === true) return true as const;
        dynamicSources = bindingUtil.union(dynamicSources, newDynamicSources);
      }

      return dynamicSources;
    } else {
      return getDynamicSourcesForBinding(referencedBindings);
    }
  }
}

export function getDynamicSourcesForExtra(extra: t.NodeExtra) {
  if (isReferencedExtra(extra)) {
    return getDynamicSourcesForReferences(extra.referencedBindings);
  }
}

export function getDynamicSourcesForExtras(extras: Iterable<t.NodeExtra>) {
  let allDynamicSources: Opt<Binding>;

  for (const extra of extras) {
    const dynamicSources = getDynamicSourcesForExtra(extra);
    if (dynamicSources === true) return true as const;
    allDynamicSources = bindingUtil.union(allDynamicSources, dynamicSources);
  }

  return allDynamicSources;
}

export function getDynamicSourcesForSection(section: Section) {
  const referenced = getDynamicSourcesForReferences(
    section.upstreamExpression?.referencedBindings,
  );
  const closures = getDynamicSourcesForReferences(getDirectClosures(section));

  if (referenced || closures) {
    return {
      referenced,
      closures,
      all:
        referenced === true || closures === true
          ? (true as const)
          : bindingUtil.union(referenced, closures),
    };
  }
}

export function getDynamicSourcesForSections(
  sections: (Section | undefined)[],
) {
  let first: undefined | ReturnType<typeof getDynamicSourcesForSection>;
  let merged: undefined | ReturnType<typeof getDynamicSourcesForSection>;

  for (const section of sections) {
    const sources = section && getDynamicSourcesForSection(section);
    if (sources) {
      if (merged) {
        merged.referenced = mergeDynamicSources(
          merged.referenced,
          sources.referenced,
        );
        merged.closures = mergeDynamicSources(
          merged.closures,
          sources.closures,
        );
        merged.all = mergeDynamicSources(merged.all, sources.all)!;
      } else if (first) {
        merged = {
          referenced: mergeDynamicSources(first.referenced, sources.referenced),
          closures: mergeDynamicSources(first.closures, sources.closures),
          all: mergeDynamicSources(first.all, sources.all)!,
        };
      } else {
        first = sources;
      }
    }
  }

  return merged || first;
}

function mergeDynamicSources(a: true | Opt<Binding>, b: true | Opt<Binding>) {
  if (a === true || b === true) return true;
  return bindingUtil.union(a, b);
}

function isInputBinding(
  binding: Binding,
): binding is Binding & { type: BindingType.input } {
  return binding.type === BindingType.input;
}
