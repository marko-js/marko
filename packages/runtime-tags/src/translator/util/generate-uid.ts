import { getFile, types as t } from "@marko/compiler";

import { traverse } from "./traverse";

const countsForFile = new WeakMap<t.BabelFile, Map<string, number>>();

export function generateUid(name = "") {
  const file = getFile();
  let counts = countsForFile.get(file);

  if (!counts) {
    const { cache } = file.markoOpts;
    const { filename } = file.opts;
    const cacheKey = `uid-counts:${filename}`;
    counts = cache.get(cacheKey) as typeof counts;

    if (counts) {
      if (isTranslate(file)) {
        // Translate for DOM does not impact translate HTML
        // but both inherit the counts from previous stages.
        counts = new Map(counts);
      }
    } else {
      counts = getInitialCounts(file);
      if (!isTranslate(file)) {
        cache.set(cacheKey, counts);
      }
    }

    countsForFile.set(file, counts);
  }

  name = name.replace(/^[^a-z$_]|[^a-z$_0-9]/gi, "") || "temp";
  name = /^_?(.*?)\d*$/.exec(name)?.[1] || name;
  const i = (counts.get(name) || 0) + 1;
  const uniqueName = `_${i > 1 ? name + i : name}`;
  counts.set(name, i);
  return uniqueName;
}

export function generateUidIdentifier(name?: string) {
  return t.identifier(generateUid(name));
}

function getInitialCounts(file: t.BabelFile) {
  const counts = new Map<string, number>();
  const program = file.path;
  const countName = (name: string) => {
    const match = /^_(.*?)([1-9]\d*)?$/.exec(name);
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

function isTranslate(file: t.BabelFile) {
  return (file as any).___compileStage === "translate";
}
