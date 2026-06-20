import { types as t } from "@marko/compiler";

import { type Binding, BindingType, getCanonicalBinding } from "./references";
import { type Section, sectionUtil } from "./sections";
import { skip, traverse } from "./traverse";

const selectorClosureBySection = new WeakMap<Section, Binding>();

export function isForSelectorClosure(
  bodySection: Section,
  closure: Binding,
): boolean {
  return selectorClosureBySection.get(bodySection) === closure;
}

// todo: just use refs/reads instwad of crawl.
export function detectForSelector(
  body: t.NodePath<t.MarkoTagBody>,
  bodySection: Section,
  keyBinding: Binding,
): void {
  if (!bodySection.referencedClosures) return;

  const eligibility = new Map<Binding, boolean>();

  traverse((node, parent) => {
    const read = node.extra?.read;
    if (!read) return;

    const binding = read.binding;
    if (
      node.extra!.section === bodySection &&
      !sameBinding(binding, keyBinding) &&
      isClosureInto(binding, bodySection)
    ) {
      const ok =
        !read.getter &&
        read.props === undefined &&
        isKeyComparison(node, parent, keyBinding);
      const prev = eligibility.get(binding);
      eligibility.set(binding, prev === undefined ? ok : prev && ok);
    }

    return skip;
  }, body.node.body);

  for (const [closure, ok] of eligibility) {
    if (ok) {
      selectorClosureBySection.set(bodySection, closure);
      return;
    }
  }
}

function isKeyComparison(
  node: t.Node,
  parent: t.Node | undefined,
  keyBinding: Binding,
): boolean {
  if (
    parent?.type !== "BinaryExpression" ||
    (parent.operator !== "===" && parent.operator !== "!==")
  ) {
    return false;
  }
  const sibling = parent.left === node ? parent.right : parent.left;
  const siblingRead = sibling.extra?.read;
  return (
    !!siblingRead &&
    siblingRead.props === undefined &&
    sameBinding(siblingRead.binding, keyBinding)
  );
}

function isClosureInto(binding: Binding, bodySection: Section): boolean {
  return (
    binding.type !== BindingType.constant &&
    binding.section !== bodySection &&
    sectionUtil.has(binding.closureSections, bodySection)
  );
}

function sameBinding(a: Binding, b: Binding): boolean {
  return getCanonicalBinding(a) === getCanonicalBinding(b);
}
