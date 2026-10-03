import { types as t } from "@marko/compiler";

import {
  type Binding,
  getCanonicalBinding,
  getNearestDeclared,
  isRest,
} from "./bindings";
import {
  forEachIdentifier,
  forEachIdentifierPath,
} from "./for-each-identifier";
import { generateUidIdentifier } from "./generate-uid";
import { getDeclaredBindingExpression } from "./get-declared-binding-expression";
import { toArray } from "./optional";
import { getSection, type Section } from "./sections";
import { findSlot } from "./slots";
import { toMemberExpression, toPropertyName } from "./to-property-name";

export default function translateVar(
  tag: t.NodePath<t.MarkoTag>,
  initialValue: t.Expression,
  kind: "let" | "const" = "const",
  statements?: t.Statement[],
) {
  const {
    node: { var: tagVar },
  } = tag;

  if (!tagVar) {
    return;
  }

  const varBinding = tagVar.extra?.binding;
  if (!varBinding || varBinding.aliasOf) {
    // A var of another binding declares only the patterns holding a rest; a
    // rest or name its own section declares is declared there alone.
    const section = getSection(tag);
    let allPruned = true;
    forEachIdentifier(tagVar, (id) => {
      const binding = id.extra!.binding!;
      if (binding.pruned) return;
      if (binding.declared) {
        if (binding.section === section) {
          allPruned = false;
        } else {
          translateAliasInSection(tag, id, binding, kind);
        }
      } else if (isRest(binding)) {
        translateRest(tag, id, binding, kind);
      }
    });
    if (allPruned) return;
    removeUndeclared(tagVar, section);
    initialValue = getDeclaredBindingExpression(
      initialValue.extra!.binding!,
      false,
    );
  }

  forEachIdentifierPath(tag.get("var"), (id) => {
    if (id.node === tagVar) return;

    const idExtra = id.node.extra;
    if (!idExtra) return;

    const binding = idExtra.binding;
    if (!binding?.aliasOf) return;

    if (binding.assignments && binding.property !== undefined) {
      const changeName = binding.property + "Change";
      const changeBinding = binding.aliasOf.propertyAliases.get(changeName);
      if (changeBinding && changeName !== changeBinding.name) {
        // add a new property to the destructure list when a change handler is implicitly added
        // eg by assigning to a destructured property.
        const pattern = getDestructurePattern(id);
        if (pattern) {
          pattern.unshiftContainer(
            "properties",
            t.objectProperty(
              t.identifier(changeName),
              t.identifier(changeBinding.name),
            ),
          );
        }
      }
    }
  });

  const declaration = t.variableDeclaration(kind, [
    t.variableDeclarator(tagVar, initialValue),
  ]);
  if (statements) {
    statements.push(declaration);
  } else {
    tag.insertBefore(declaration);
  }
}

// Removes the parts read through what they alias, keeping what is declared
// here.
function removeUndeclared(pattern: t.LVal, section: Section): boolean {
  switch (pattern.type) {
    case "Identifier": {
      const binding = pattern.extra!.binding!;
      return binding.declared && binding.section === section;
    }
    case "ObjectPattern":
      pattern.properties = pattern.properties.filter((prop) =>
        removeUndeclared(
          (prop.type === "RestElement" ? prop.argument : prop.value) as t.LVal,
          section,
        ),
      );
      return pattern.properties.length > 0;
    case "ArrayPattern": {
      let kept = 0;
      pattern.elements = pattern.elements.map((element, i) => {
        if (
          element &&
          removeUndeclared(
            (element.type === "RestElement"
              ? element.argument
              : element) as t.LVal,
            section,
          )
        ) {
          kept = i + 1;
          return element;
        }
        return null;
      });
      pattern.elements.length = kept;
      return kept > 0;
    }
  }
  return false;
}

// Read where what it reads from is hidden, so its own section declares it by
// name, whether or not this tag renders.
function translateAliasInSection(
  tag: t.NodePath<t.MarkoTag>,
  id: t.Identifier,
  alias: Binding,
  kind: "let" | "const",
) {
  const aliased = alias.aliasOf!;
  const value = getDeclaredBindingExpression(aliased);
  getSectionTarget(tag, alias.section).insertBefore(
    t.variableDeclaration(kind, [
      t.variableDeclarator(
        id,
        alias.property === undefined
          ? value
          : toMemberExpression(value, alias.property, aliased.nullable),
      ),
    ]),
  );
}

function translateRest(
  tag: t.NodePath<t.MarkoTag>,
  id: t.Identifier,
  rest: Binding,
  kind: "let" | "const",
) {
  const source = getCanonicalBinding(rest.aliasOf!);
  // A destructured value is only in scope through the names its pattern
  // declares, so a rest of it narrows the rest or copy declared there.
  const from = (!getNearestDeclared(source) && source.declaredAlias) || source;
  let target: t.NodePath = tag;
  let inPlace = true;
  if (rest.section !== getSection(tag) && findSlot(rest)?.reason) {
    // Its own section serializes it, so declares it whether or not this tag
    // renders.
    target = getSectionTarget(tag, rest.section);
    inPlace = false;
  }
  const value = getDeclaredBindingExpression(from, inPlace);
  target.insertBefore(
    t.variableDeclaration(kind, [
      t.variableDeclarator(
        getRestPattern(rest, id, from, false),
        inPlace ? value : withRestFallback(rest, from, value),
      ),
    ]),
  );
}

// The pattern taking `rest` out of `from`'s value. One alone in a function
// that returns the rest can name each key it excludes after that key.
export function getRestPattern(
  rest: Binding,
  id: t.Identifier,
  from: Binding,
  shorthand: boolean,
) {
  const restElement = t.restElement(id);
  if (rest.restOffset !== undefined) {
    return t.arrayPattern([
      ...new Array(rest.restOffset - (from.restOffset || 0)).fill(null),
      restElement,
    ]);
  }
  return t.objectPattern([
    ...toArray(
      rest.excludeProperties,
      shorthand
        ? (name) =>
            name === id.name
              ? toExcludedProperty(name)
              : toShorthandExcludedProperty(name)
        : toExcludedProperty,
    ),
    restElement,
  ]);
}

// A rest taken whether or not the author's destructure would run.
export function withRestFallback(
  rest: Binding,
  from: Binding,
  value: t.Expression,
) {
  return from.nullable
    ? t.logicalExpression(
        "||",
        value,
        rest.restOffset !== undefined
          ? t.arrayExpression([])
          : t.objectExpression([]),
      )
    : value;
}

// Before the tag holding this one in `section`, where a declaration of that
// section goes.
function getSectionTarget(tag: t.NodePath<t.MarkoTag>, section: Section) {
  let target: t.NodePath = tag;
  let cur = tag.parentPath;
  while (cur.node.extra?.section !== section) {
    target = cur;
    cur = cur.parentPath!;
  }
  return cur.parentPath ? cur : target;
}

function toExcludedProperty(name: string) {
  return t.objectProperty(toPropertyName(name), generateUidIdentifier(name));
}

function toShorthandExcludedProperty(name: string) {
  if (!t.isValidIdentifier(name)) return toExcludedProperty(name);
  const id = t.identifier(name);
  return t.objectProperty(id, id, false, true);
}

function getDestructurePattern(id: t.NodePath<t.Identifier>) {
  let cur: t.NodePath | null = id;

  while (cur) {
    if (cur.node.type === "ObjectPattern") {
      return cur as t.NodePath<t.ObjectPattern>;
    }
    cur = cur.parentPath;
  }
}
