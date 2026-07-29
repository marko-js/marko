import fs from "fs";
import path from "path";

/**
 * Names a persisted build must not resurrect: anything written in the fixture's
 * templates that the ordinary optimized DOM build already tree-shook away.
 */
export function findRevivedUserCode(
  fixtureDir: string,
  ordinaryBundle: string,
  persistedBundle: string,
) {
  const revived: string[] = [];
  for (const sentinel of readUserCodeSentinels(fixtureDir)) {
    if (
      contains(persistedBundle, sentinel) &&
      !contains(ordinaryBundle, sentinel)
    ) {
      revived.push(sentinel);
    }
  }

  return revived;
}

const identifierReg = /[A-Za-z_$][A-Za-z0-9_$]*/g;
const stringReg = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g;

// Marko syntax and JS keywords say nothing about whether user code survived.
const IGNORED = new Set(
  (
    "if else for of in by let const var return function class new typeof void " +
    "await async try catch finally throw import export from as default this " +
    "true false null undefined static server client style script html body div " +
    "span input button href class id key value content attrs and or not " +
    "template marko tag tags name text type on onClick lifecycle await await$"
  ).split(" "),
);

function readUserCodeSentinels(fixtureDir: string) {
  const sentinels = new Set<string>();
  for (const file of fs.readdirSync(fixtureDir, {
    recursive: true,
  }) as string[]) {
    if (!file.endsWith(".marko")) continue;
    const src = fs.readFileSync(path.join(fixtureDir, file), "utf8");
    for (const match of src.match(stringReg) || []) {
      const body = match.slice(1, -1);
      if (body.length > 3) sentinels.add(body);
    }

    for (const match of src.match(identifierReg) || []) {
      if (match.length > 3 && !IGNORED.has(match)) sentinels.add(match);
    }
  }

  return sentinels;
}

function contains(bundle: string, sentinel: string) {
  return bundle.includes(sentinel);
}
