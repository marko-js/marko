import { types as t } from "@marko/compiler";
import { getFile } from "@marko/compiler/babel-utils";

import { isTranslate } from "./get-compile-stage";
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
      if (isTranslate()) {
        // Translate for DOM does not impact translate HTML
        // but both inherit the counts from previous stages.
        counts = new Map(counts);
      }
    } else {
      counts = getInitialCounts(file);
      if (!isTranslate()) {
        cache.set(cacheKey, counts);
      }
    }

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

const sharedUIDsForFile = new WeakMap<t.BabelFile, Map<string, string>>();
export function getSharedUid(name: string) {
  const file = getFile();
  let sharedUIDs = sharedUIDsForFile.get(file);

  if (!sharedUIDs) {
    const { cache } = file.markoOpts;
    const { filename } = file.opts;
    const cacheKey = `uid-shared:${filename}`;
    sharedUIDs = cache.get(cacheKey) as typeof sharedUIDs;

    if (sharedUIDs) {
      if (isTranslate()) {
        // Translate for DOM does not impact translate HTML
        // but both inherit the counts from previous stages.
        sharedUIDs = new Map(sharedUIDs);
      }
    } else {
      sharedUIDs = new Map();
      if (!isTranslate()) {
        cache.set(cacheKey, sharedUIDs);
      }
    }

    sharedUIDsForFile.set(file, sharedUIDs);
  }

  let uniqueName = sharedUIDs.get(name);
  if (!uniqueName) {
    uniqueName = generateUid(name);
    sharedUIDs.set(name, uniqueName);
  }

  return uniqueName;
}

export function usedSharedUid(name: string) {
  return !!sharedUIDsForFile.get(getFile())?.has(name);
}

export function getSharedUidIdentifier(name: string) {
  return t.identifier(getSharedUid(name));
}

function getInitialCounts(file: t.BabelFile) {
  const counts = new Map<string, number>();
  const program = file.path;
  const countName = (name: string) => {
    const match = /^$(.*?)([1-9]\d*)?$/.exec(name);
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
