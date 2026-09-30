import { execFileSync } from "child_process";
import path from "path";

// `pnpm run digest -- [git diff args]` (default `HEAD`): a change's snapshot
// diff, printing a hunk shared by many files once.
const argv = process.argv.slice(2).filter((arg, i) => i > 0 || arg !== "--");
const diffArgs = argv.length ? argv : ["HEAD"];
const pathspecs = [
  ":(glob)**/__snapshots__/**",
  ":(glob)**/sizes.json",
  ":(glob)**/fixtures*/**/template.marko",
];
const behaviorRe = /^(?:render|error-compile|diagnostics)|\.error\./;
const sizesFamily = "sizes.json";
const templateFamily = "template.marko";
const shownFixtures = 8;
const maxDiffCells = 1e6;

interface Change {
  file: string;
  fixture: string;
  family: string;
  status: string;
  hunks: string[];
}

const changes = readChanges();
const templates = changes.filter((change) => change.family === templateFamily);
const snapshots = changes.filter((change) => change.family !== templateFamily);
const modified = snapshots.filter((change) => !isNewFixture(change));

console.log(`# Snapshot digest: git diff ${diffArgs.join(" ")}\n`);
printSummary();
printBehavior();
printSizes();
printCodegen();

function printSummary() {
  const count = (status: string) =>
    templates.filter((change) => change.status === status).length;
  const fixtures = new Set(snapshots.map((change) => change.fixture));
  console.log(
    `${fixtures.size} fixtures changed (${count("A")} added, ${count("D")} removed).\n`,
  );
  console.log("| family | files |\n| --- | --- |");
  for (const [family, list] of sortBySize(
    Map.groupBy(snapshots, (change) => change.family),
  )) {
    console.log(`| ${family} | ${list.length} |`);
  }
  console.log();
  if (count("A")) {
    console.log(
      `Added: ${templates
        .filter((change) => change.status === "A")
        .map((change) => path.basename(change.fixture))
        .join(", ")}\n`,
    );
  }
}

function printBehavior() {
  const behavior = modified.filter((change) => behaviorRe.test(change.family));
  if (!behavior.length) return;
  console.log("## Behavior\n");
  const full = readHunks(
    behavior.map((change) => change.file),
    3,
  );
  printHunks(behavior, (change) => full.get(change.file) ?? []);
}

function printSizes() {
  const sizes = modified.filter((change) => change.family === sizesFamily);
  if (!sizes.length) return;
  console.log("## sizes.json\n\n| delta | fixtures |\n| --- | --- |");
  for (const [delta, list] of sortBySize(
    Map.groupBy(sizes, (change) =>
      change.hunks.map(describeSizeDelta).join("; "),
    ),
  )) {
    console.log(`| ${delta} | ${list.length}: ${listFixtures(list)} |`);
  }
  console.log();
}

function printCodegen() {
  const codegen = modified.filter(
    (change) =>
      change.family !== sizesFamily && !behaviorRe.test(change.family),
  );
  if (!codegen.length) return;
  console.log("## Codegen\n");
  printHunks(codegen, (change) => change.hunks);
}

// Hunks grouped by the edit they make print once, largest group first.
function printHunks(list: Change[], hunksOf: (change: Change) => string[]) {
  const groups = new Map<string, Map<Change, string>>();
  for (const change of list) {
    for (const hunk of hunksOf(change)) {
      const edit = editOf(hunk, change);
      let same = groups.get(edit);
      if (!same) groups.set(edit, (same = new Map()));
      if (!same.has(change)) same.set(change, hunk);
    }
  }
  for (const same of [...groups.values()].sort((a, b) => b.size - a.size)) {
    const changes = [...same.keys()];
    if (changes.length === 1) {
      console.log(`### ${changes[0].file}\n`);
    } else {
      const families = [...Map.groupBy(changes, (change) => change.family)]
        .map(([family, sameFamily]) => `${family} ${sameFamily.length}`)
        .join(", ");
      console.log(`### ×${changes.length} (${families}), like\n`);
    }
    printDiff(mostCommon([...same.values()]));
    if (changes.length > 1) console.log(listFixtures(changes) + "\n");
  }
}

function mostCommon(hunks: string[]) {
  const counts = new Map<string, number>();
  for (const hunk of hunks) counts.set(hunk, (counts.get(hunk) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1])[0][0];
}

// Paired lines reduce to the distinct token edits between them, with the
// fixture's own name masked, so one edit repeated across fixtures groups.
function editOf(hunk: string, change: Change) {
  const lines = hunk
    .split("\n")
    .map((line) => line.replaceAll(path.basename(change.fixture), "\0"));
  const removed = lines.filter((line) => line[0] === "-");
  const added = lines.filter((line) => line[0] === "+");
  const pairs =
    removed.length === added.length
      ? removed.map((line, i) => [line, added[i]])
      : [[removed.join("\n"), added.join("\n")]];
  const edits = new Set<string>();
  for (const [a, b] of pairs) {
    const aTokens = tokenize(a);
    const bTokens = tokenize(b);
    if (aTokens.length * bTokens.length > maxDiffCells) return hunk;
    for (const edit of tokenEdits(aTokens, bTokens)) edits.add(edit);
  }
  return [...edits].sort().join("\n");
}

function tokenEdits(a: string[], b: string[]) {
  const lcs = Array.from({ length: a.length + 1 }, () =>
    new Array<number>(b.length + 1).fill(0),
  );
  for (let i = a.length; i--;) {
    for (let j = b.length; j--;) {
      lcs[i][j] =
        a[i] === b[j]
          ? lcs[i + 1][j + 1] + 1
          : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }
  const edits: string[] = [];
  let removed = "";
  let added = "";
  let i = 0;
  let j = 0;
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i] === b[j]) {
      if (removed || added) edits.push(`${removed}\0${added}`);
      removed = added = "";
      i++;
      j++;
    } else if (
      j < b.length &&
      (i === a.length || lcs[i][j + 1] >= lcs[i + 1][j])
    ) {
      added += b[j++];
    } else {
      removed += a[i++];
    }
  }
  if (removed || added) edits.push(`${removed}\0${added}`);
  return edits;
}

function tokenize(text: string) {
  return text.replace(/^[-+]/gm, "").match(/[\w$]+|\s+|[^\w$\s]/g) ?? [];
}

function readChanges() {
  const status = new Map<string, string>();
  for (const line of git(
    "diff",
    "--name-status",
    "--no-renames",
    ...diffArgs,
    "--",
    ...pathspecs,
  )
    .split("\n")
    .filter(Boolean)) {
    const [code, file] = line.split("\t");
    status.set(file, code);
  }
  const hunks = readHunks([...status.keys()], 0);
  return [...status].map(([file, code]): Change => {
    const [fixture, family] = splitFixture(file);
    return {
      file,
      fixture,
      family,
      status: code,
      hunks: hunks.get(file) ?? [],
    };
  });
}

function readHunks(files: string[], context: number) {
  const hunks = new Map<string, string[]>();
  if (!files.length) return hunks;
  let current: string[] | undefined;
  let removedFile = "";
  let hunk: string[] = [];
  const flush = () => {
    if (current && hunk.length) current.push(hunk.join("\n"));
    hunk = [];
  };
  for (const line of git(
    "diff",
    "--no-color",
    "--no-ext-diff",
    "--no-renames",
    `-U${context}`,
    ...diffArgs,
    "--",
    ...files,
  ).split("\n")) {
    if (line.startsWith("diff --git ")) {
      flush();
      current = undefined;
    } else if (line.startsWith("--- ")) {
      removedFile = line.slice(6);
    } else if (line.startsWith("+++ ")) {
      hunks.set(
        line === "+++ /dev/null" ? removedFile : line.slice(6),
        (current = []),
      );
    } else if (line.startsWith("@@")) {
      flush();
    } else if (current && /^[-+ ]/.test(line)) {
      hunk.push(line);
    }
  }
  flush();
  return hunks;
}

function isNewFixture(change: Change) {
  return templates.some(
    (template) =>
      template.fixture === change.fixture &&
      (template.status === "A" || template.status === "D"),
  );
}

function describeSizeDelta(hunk: string) {
  const removed: number[] = [];
  const added: number[] = [];
  const keys: string[] = [];
  for (const line of hunk.split("\n")) {
    const match = /^([-+])\s*"([^"]+)":\s*(\d+)/.exec(line);
    if (!match) continue;
    if (match[1] === "-") {
      removed.push(+match[3]);
      keys.push(match[2]);
    } else {
      added.push(+match[3]);
    }
  }
  if (!keys.length || removed.length !== added.length) return "reshaped";
  return keys
    .map((key, i) => `${key} ${signed(added[i] - removed[i])}`)
    .join(", ");
}

function splitFixture(file: string) {
  const marker = "/__snapshots__/";
  const index = file.indexOf(marker);
  return index === -1
    ? [path.dirname(file), path.basename(file)]
    : [file.slice(0, index), file.slice(index + marker.length)];
}

function sortBySize<T>(
  groups: Map<string, T[]>,
  size: (list: T[]) => number = (list) => list.length,
) {
  return [...groups].sort((a, b) => size(b[1]) - size(a[1]));
}

function listFixtures(list: Change[]) {
  const names = [
    ...new Set(list.map((change) => path.basename(change.fixture))),
  ];
  return (
    names.slice(0, shownFixtures).join(", ") +
    (names.length > shownFixtures
      ? `, … (+${names.length - shownFixtures})`
      : "")
  );
}

function printDiff(hunk: string) {
  console.log("```diff\n" + hunk + "\n```\n");
}

function signed(n: number) {
  return n > 0 ? `+${n}` : String(n);
}

function git(...args: string[]) {
  return execFileSync("git", args, { encoding: "utf8", maxBuffer: 1024 ** 3 });
}
