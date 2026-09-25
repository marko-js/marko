import type { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import type { ResolvedExport } from "../visitors/function";
import * as BindingType from "./constants/binding-type";
import { createCyclicMemo } from "./cyclic-memo";
import { forEach, Sorted, type SortedOpt } from "./optional";
import { type Binding, bindingUtil } from "./references";
import { forEachSection, type Section, sectionUtil } from "./sections";
import { getResumeRegisterId } from "./signals";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** The template's file, for other templates to import its content from. */
    filename?: string;
    /** This template's params (its own, or a `<define>`'s) given a value the
     * analysis cannot resolve to a string or a param, where they may name a tag. */
    unresolvedTagArgs?: SortedOpt<Binding>;
    /** The content of rendered templates that a value this template passes
     * them, which the analysis cannot resolve to a string, may name. */
    unresolvedTagExports?: SortedOpt<ResolvedExport>;
  }
}

export const exportUtil = new Sorted(function compareExports(
  a: ResolvedExport,
  b: ResolvedExport,
) {
  return a.registerId < b.registerId ? -1 : a.registerId > b.registerId ? 1 : 0;
});

// A template's own content, and the exports of rendered templates' content.
interface Content {
  sections: SortedOpt<Section>;
  exports: SortedOpt<ResolvedExport>;
}
const NO_CONTENT: Content = { sections: undefined, exports: undefined };

// The content a tag named by this value renders, in the value's template or
// in the templates it is passed to.
const getRenderedContent = createCyclicMemo((binding: Binding) => {
  let content: Content =
    binding.renders || binding.rendersExports
      ? { sections: binding.renders, exports: binding.rendersExports }
      : NO_CONTENT;
  binding.propertyAliases.forEach((alias) => {
    content = mergeContent(content, getRenderedContent(alias));
  });
  binding.aliases.forEach((alias) => {
    content = mergeContent(content, getRenderedContent(alias));
  });
  forEach(binding.passedTo, (param) => {
    content = mergeContent(content, getRenderedContent(param));
  });
  return content;
}, NO_CONTENT);

// The content a template registers whatever its callers pass.
const getRegisteredContent = createCyclicMemo((template: t.ProgramExtra) => {
  let content: Content = template.unresolvedTagExports
    ? { sections: undefined, exports: template.unresolvedTagExports }
    : NO_CONTENT;
  forEach(template.unresolvedTagArgs, (param) => {
    content = mergeContent(content, getRenderedContent(param));
  });
  return content;
}, NO_CONTENT);

const getNamedContent = createCyclicMemo((template: t.ProgramExtra) => {
  let content: SortedOpt<Section>;
  const addRenders = (binding: Binding) => {
    content = sectionUtil.union(content, binding.renders);
    binding.propertyAliases.forEach(addRenders);
    binding.aliases.forEach(addRenders);
  };
  for (const section of template.sections!) {
    if (section.params) addRenders(section.params);
  }
  return content;
}, undefined);

// What a template leaves its callers to register for a param, as the exports
// they import: read at each call site, so no caller holds the template's bindings.
export function getCallerContent(template: t.ProgramExtra, binding: Binding) {
  const rendered = getRenderedContent(binding);
  if (rendered === NO_CONTENT) return;
  const registered = getRegisteredContent(template);
  let exports = exportUtil.difference(rendered.exports, registered.exports);
  forEach(
    sectionUtil.difference(rendered.sections, registered.sections),
    (section) => {
      exports = exportUtil.add(exports, getContentExport(template, section));
    },
  );
  return exports;
}

// Params the analysis does not see given their values (a loop's, content's,
// an escaped `<define>`'s) may be anything.
export function addUnresolvedTagParams() {
  const template = getProgram().node.extra;
  forEachSection((section) => {
    if (
      section.params &&
      section !== template.section &&
      !isDefineOnlyCalled(section) &&
      getRenderedContent(section.params) !== NO_CONTENT
    ) {
      template.unresolvedTagArgs = bindingUtil.add(
        template.unresolvedTagArgs,
        section.params,
      );
    }
  });
}

// The content this template's input may name, which its callers register.
export function getInputContent() {
  const template = getProgram().node.extra;
  const params = template.section!.params;
  return params && getCallerContent(template, params);
}

// The rendered templates' content this template registers itself.
export function getRegisteredExports() {
  return getRegisteredContent(getProgram().node.extra).exports;
}

export function hasRegisteredContent() {
  return getRegisteredContent(getProgram().node.extra) !== NO_CONTENT;
}

// Content named by a param here that nothing here registers.
export function isContentLeftToCallers(section: Section) {
  const template = getProgram().node.extra;
  return (
    sectionUtil.has(getNamedContent(template), section) &&
    !sectionUtil.has(getRegisteredContent(template).sections, section)
  );
}

function getContentExport(
  template: t.ProgramExtra,
  section: Section,
): ResolvedExport {
  const filename = template.filename!;
  return {
    filename,
    exportName: section.name,
    registerId: getResumeRegisterId(section, "content", undefined, filename),
  };
}

function mergeContent(a: Content, b: Content): Content {
  return b === NO_CONTENT
    ? a
    : a === NO_CONTENT
      ? b
      : {
          sections: sectionUtil.union(a.sections, b.sections),
          exports: exportUtil.union(a.exports, b.exports),
        };
}

// A define whose tag variable is only ever a tag name has only known callers.
function isDefineOnlyCalled(bodySection: Section) {
  const binding = bodySection.downstream?.binding;
  return (
    !Array.isArray(binding) &&
    binding?.type === BindingType.derived &&
    !binding.reads.size
  );
}
