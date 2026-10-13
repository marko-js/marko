import { types as t } from "@marko/compiler";
import { getFile } from "@marko/compiler/babel-utils";

import { isTranslate } from "./get-compile-stage";
import type { Section } from "./sections";
import { createProgramState } from "./state";
import { traverse } from "./traverse";

const kUidCounts = Symbol("uid counts");
declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    [kUidCounts]?: Map<string, number>;
  }
}

const countsForFile = new WeakMap<t.BabelFile, Map<string, number>>();
export function generateUid(name = "") {
  const file = getFile();
  let counts = countsForFile.get(file);

  if (!counts) {
    // Counts live on the analyzed program so a re-analysis starts over, and
    // each translate continues a copy so dom and html do not affect each other.
    counts = (file.path.node.extra ??= {})[kUidCounts] ??=
      getInitialCounts(file);
    if (isTranslate()) counts = new Map(counts);
    countsForFile.set(file, counts);
  }

  name = name.replace(/^[^a-z$_]|[^a-z$_0-9]/gi, "") || "temp";
  name = /^\$?(.*?)\d*$/.exec(name)?.[1] || name;
  const i = (counts.get(name) || 0) + 1;
  const uniqueName = `$${i > 1 ? name + i : name}`;
  counts.set(name, i);
  return uniqueName;
}

export function generateUidIdentifier(name?: string) {
  return t.identifier(generateUid(name));
}

// A `const` before the tag holding `expr`, read through the identifier returned.
export function declareConstBefore(
  tag: t.NodePath<t.MarkoTag>,
  name: string,
  expr: t.Expression,
) {
  const id = generateUidIdentifier(name);
  tag.insertBefore(
    t.variableDeclaration("const", [t.variableDeclarator(id, expr)]),
  );
  return id;
}

const [getSharedUIDs] = createProgramState(() => new Map<string, string>());
export function getSharedUid(name: string, section?: Section) {
  const sharedUIDs = getSharedUIDs();
  const nameKey = section ? `${section.id}:${name}` : name;
  let uniqueName = sharedUIDs.get(nameKey);
  if (!uniqueName) {
    uniqueName = generateUid(name);
    sharedUIDs.set(nameKey, uniqueName);
  }

  return uniqueName;
}

export function usedSharedUid(name: string) {
  return getSharedUIDs().has(name);
}

function getInitialCounts(file: t.BabelFile) {
  const counts = new Map<string, number>();
  const program = file.path;
  const countName = (name: string) => {
    const match = /^\$(.*?)([1-9]\d*)?$/.exec(name);
    if (match) {
      const name = match[1];
      const count = match[2] ? +match[2] + 1 : 1;
      counts.set(name, Math.max(counts.get(name) || 0, count));
    }
  };

  for (const name in program.scope.globals) {
    countName(name);
  }

  traverse((node, parent, grandParent) => {
    if (node.type === "Identifier" && t.isBinding(node, parent!, grandParent)) {
      countName(node.name);
    }
  }, program.node);

  return counts;
}
