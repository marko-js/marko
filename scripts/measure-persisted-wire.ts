import { spawnSync } from "node:child_process";
import { brotliCompressSync, gzipSync } from "node:zlib";

import type { types as BabelTypes } from "@marko/compiler";
import { types as t } from "@marko/compiler";
import { parseExpression } from "@marko/compiler/internal/babel";

const marker = "MARKO_WIRE_MEASURE:";
const fixtures = [
  "persisted-update-title",
  "persisted-update-construct-hop",
  "persisted-update-pending-await-streamed",
  "persisted-update-construct-loop",
  "persisted-update-construct-swap",
];

const categories = [
  "frame/runtime syntax",
  "scope fills/ids/metadata",
  "ordinary values",
  "node/branch markers or references",
  "effect/registry entries",
  "shell templates/walks",
  "shell ids/wrappers",
  "lazy/async framing",
] as const;
type Category = (typeof categories)[number];
type WireRecord = {
  fixture: string;
  interop: boolean;
  optimize: boolean;
  fromRoute?: string;
  targetRoute?: string;
  frames: string[];
};

function isWireRecord(value: unknown): value is WireRecord {
  if (!value || typeof value !== "object") return false;
  const record = value as Partial<WireRecord>;
  return (
    typeof record.fixture === "string" &&
    typeof record.interop === "boolean" &&
    typeof record.optimize === "boolean" &&
    Array.isArray(record.frames) &&
    record.frames.every((frame) => typeof frame === "string")
  );
}

const grep = `runtime-tags/translator (${fixtures.join("|")}) `;
const childEnv: NodeJS.ProcessEnv = {
  ...process.env,
  MARKO_WIRE_MEASURE: "1",
};
for (const key of Object.keys(childEnv)) {
  if (
    /^(?:MARKO_TEST_(?:SLOTS|SLOT_TOTAL|SLICE_SUITES|WORKERS)|MOCHA_(?:OPTIONS|GREP)|(?:GREP|TEST_GREP))$/i.test(
      key,
    )
  ) {
    delete childEnv[key];
  }
}
const result = spawnSync("npm", ["test", "--", "--grep", grep], {
  env: childEnv,
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
});

if (result.error) throw result.error;
const records = [
  ...result.stdout.matchAll(new RegExp(`${marker}([A-Za-z0-9+/=]+)`, "g")),
]
  .map((match) => JSON.parse(Buffer.from(match[1]!, "base64").toString()))
  .filter(isWireRecord)
  .filter((record) => record.optimize && !record.interop);

if (result.status !== 0 || !records.length) {
  process.stderr.write(result.stdout);
  process.stderr.write(result.stderr);
  throw new Error(
    "wire measurement fixture run produced no optimized payloads",
  );
}

const expectedCoverage: Record<string, { payloads: number; frames: number }> = {
  "persisted-update-title:same": { payloads: 1, frames: 1 },
  "persisted-update-construct-hop:cross": { payloads: 2, frames: 2 },
  "persisted-update-construct-hop:same": { payloads: 1, frames: 1 },
  "persisted-update-pending-await-streamed:same": {
    payloads: 2,
    frames: 3,
  },
  "persisted-update-construct-loop:same": { payloads: 3, frames: 3 },
  "persisted-update-construct-swap:same": { payloads: 2, frames: 2 },
};

const names: Record<string, string> = {
  "persisted-update-title": "same-route sparse value/attribute update",
  "persisted-update-construct-hop": "cross-route constructed hop",
  "persisted-update-pending-await-streamed": "async multi-frame update",
  "persisted-update-construct-loop": "keyed loop same/add/remove/reorder",
  "persisted-update-construct-swap": "conditional branch divergence",
};

const grouped = new Map<string, WireRecord[]>();
for (const record of records) {
  const kind = record.fromRoute === record.targetRoute ? "same" : "cross";
  const key = `${record.fixture}:${kind}`;
  const group = grouped.get(key);
  if (group) group.push(record);
  else grouped.set(key, [record]);
}
for (const [key, expected] of Object.entries(expectedCoverage)) {
  const group = grouped.get(key);
  const frames =
    group?.reduce((sum, record) => sum + record.frames.length, 0) ?? 0;
  if (!group || group.length < expected.payloads || frames < expected.frames) {
    throw new Error(
      `${key} coverage: ${group?.length ?? 0} payloads/${frames} frames; ` +
        `expected at least ${expected.payloads}/${expected.frames}`,
    );
  }
}

type Totals = {
  raw: number;
  gzip: number;
  brotli: number;
  frames: number;
  categories: Record<Category, number>;
  gzipCategories: Record<Category, number>;
  brotliCategories: Record<Category, number>;
};

const rows = [...grouped.entries()].map(([key, group]) => {
  const totals: Totals = {
    raw: 0,
    gzip: 0,
    brotli: 0,
    frames: 0,
    categories: Object.fromEntries(categories.map((cat) => [cat, 0])) as Record<
      Category,
      number
    >,
    gzipCategories: Object.fromEntries(
      categories.map((cat) => [cat, 0]),
    ) as Record<Category, number>,
    brotliCategories: Object.fromEntries(
      categories.map((cat) => [cat, 0]),
    ) as Record<Category, number>,
  };

  for (const record of group) {
    const payload = record.frames.join("\n") + "\n";
    const bytes = Buffer.byteLength(payload);
    const rawCategories = Object.fromEntries(
      categories.map((cat) => [cat, 0]),
    ) as Record<Category, number>;
    for (const frame of record.frames) {
      const measured = measureFrame(frame);
      for (const category of categories) {
        rawCategories[category] += measured[category];
      }
      // The harness joins frames with one explicit UTF-8 newline delimiter,
      // including the trailing delimiter after the last frame.
      rawCategories["frame/runtime syntax"] += Buffer.byteLength("\n");
    }

    assertEqual(
      Object.values(rawCategories).reduce((sum, value) => sum + value, 0),
      bytes,
      `${key} raw attribution`,
    );
    for (const category of categories) {
      totals.categories[category] += rawCategories[category];
    }
    totals.raw += bytes;
    const gzip = gzipSync(Buffer.from(payload)).length;
    const brotli = brotliCompressSync(Buffer.from(payload)).length;
    totals.gzip += gzip;
    totals.brotli += brotli;
    const gzipCategories = allocateCompression(rawCategories, gzip, bytes);
    const brotliCategories = allocateCompression(rawCategories, brotli, bytes);
    for (const category of categories) {
      totals.gzipCategories[category] += gzipCategories[category];
      totals.brotliCategories[category] += brotliCategories[category];
    }
    totals.frames += record.frames.length;
  }

  return {
    key,
    name: names[group[0]!.fixture],
    payloads: group.length,
    totals,
  };
});

const asyncRow = rows.find(
  (row) => row.key === "persisted-update-pending-await-streamed:same",
);
if (!asyncRow) throw new Error("async fixture coverage row is missing");
for (const category of [
  "scope fills/ids/metadata",
  "ordinary values",
  "node/branch markers or references",
  "effect/registry entries",
  "shell templates/walks",
] as const) {
  if (asyncRow.totals.categories[category] === 0) {
    throw new Error(`async fixture has no nested ${category} attribution`);
  }
}

const overall = rows.reduce(
  (total, row) => {
    total.raw += row.totals.raw;
    total.gzip += row.totals.gzip;
    total.brotli += row.totals.brotli;
    total.frames += row.totals.frames;
    for (const category of categories) {
      total.categories[category] += row.totals.categories[category];
      total.gzipCategories[category] += row.totals.gzipCategories[category];
      total.brotliCategories[category] += row.totals.brotliCategories[category];
    }
    return total;
  },
  {
    raw: 0,
    gzip: 0,
    brotli: 0,
    frames: 0,
    categories: Object.fromEntries(categories.map((cat) => [cat, 0])) as Record<
      Category,
      number
    >,
    gzipCategories: Object.fromEntries(
      categories.map((cat) => [cat, 0]),
    ) as Record<Category, number>,
    brotliCategories: Object.fromEntries(
      categories.map((cat) => [cat, 0]),
    ) as Record<Category, number>,
  },
);

process.stdout.write("# Persisted patch wire measurement\n\n");
process.stdout.write(
  `Command: \`npm run measure:wire\` (optimized Marko fixture SSR, ${
    records.length
  } payloads; generated frames are captured before snapshot formatting).\n\n`,
);
process.stdout.write(
  "| Case | Payloads / frames | Raw bytes | Gzip bytes | Brotli bytes |\n| --- | ---: | ---: | ---: | ---: |\n",
);
for (const row of rows) {
  process.stdout.write(
    `| ${row.name} (${row.key.endsWith(":cross") ? "cross-route" : "same-route"}) | ${row.payloads} / ${row.totals.frames} | ${row.totals.raw} | ${row.totals.gzip} | ${row.totals.brotli} |\n`,
  );
}
process.stdout.write(
  `| **Total** | ${records.length} / ${overall.frames} | **${overall.raw}** | **${overall.gzip}** | **${overall.brotli}** |\n\n`,
);
process.stdout.write("## Raw attribution\n\n");
process.stdout.write(
  "| Category | Raw bytes | Gzip allocation | Brotli allocation | Share |\n| --- | ---: | ---: | ---: | ---: |\n",
);
for (const category of categories) {
  const bytes = overall.categories[category];
  process.stdout.write(
    `| ${category} | ${bytes} | ${overall.gzipCategories[category]} | ${overall.brotliCategories[category]} | ${((bytes / overall.raw) * 100).toFixed(1)}% |\n`,
  );
}
process.stdout.write(
  `| **Total** | **${Object.values(overall.categories).reduce((a, b) => a + b, 0)}** | **${Object.values(overall.gzipCategories).reduce((a, b) => a + b, 0)}** | **${Object.values(overall.brotliCategories).reduce((a, b) => a + b, 0)}** | **100.0%** |\n\n`,
);
process.stdout.write(
  "Gzip and Brotli category values are proportional planning allocations of each payload's measured raw category bytes; they are not expected savings or marginal recompression experiments. Raw categories are disjoint and reconcile to the exact UTF-8 payload (including one explicit newline delimiter per frame).\n",
);

function measureFrame(source: string): Record<Category, number> {
  const owners: Array<Category | undefined> = Array.from({
    length: Buffer.byteLength(source),
  });
  const ast = parseExpression(source, {
    sourceType: "script",
    ranges: true,
  }) as BabelTypes.Expression;
  if (!t.isArrayExpression(ast)) {
    throw new Error(`expected array frame, received ${ast.type}`);
  }

  for (const element of ast.elements) {
    if (!element) continue;
    if (t.isStringLiteral(element)) {
      mark(owners, source, element, "effect/registry entries");
    } else if (t.isArrowFunctionExpression(element)) {
      markFill(owners, source, element);
    } else if (t.isArrayExpression(element)) {
      markEntry(owners, source, element);
    }
  }

  const unassigned = owners.reduce(
    (count, category, index) =>
      count +
      (category === undefined && isSyntaxByte(Buffer.from(source)[index]!)
        ? 0
        : category === undefined
          ? 1
          : 0),
    0,
  );
  if (unassigned) {
    throw new Error(
      `${source}: ${unassigned} semantic bytes were left unassigned`,
    );
  }
  const unknownCount = owners.filter(
    (category) => category === undefined,
  ).length;
  for (let index = 0; index < owners.length; index++) {
    if (owners[index] === undefined) owners[index] = "frame/runtime syntax";
  }
  assertEqual(
    owners.filter((category) => category === undefined).length,
    0,
    `frame unknown bytes after syntax complement (before=${unknownCount})`,
  );

  const result = Object.fromEntries(
    categories.map((cat) => [cat, 0]),
  ) as Record<Category, number>;
  for (const category of owners) result[category!]++;
  return result;
}

function markEntry(
  owners: Array<Category | undefined>,
  source: string,
  entry: BabelTypes.ArrayExpression,
) {
  const values = entry.elements.filter(
    (value): value is BabelTypes.Expression => !!value && t.isExpression(value),
  );
  const first = values[0];
  if (!first) return;
  if (t.isStringLiteral(first)) {
    mark(owners, source, first, "effect/registry entries");
    return;
  }
  if (t.isArrowFunctionExpression(first)) {
    for (const value of values) {
      if (t.isArrowFunctionExpression(value)) markFill(owners, source, value);
      else if (t.isStringLiteral(value))
        mark(owners, source, value, "effect/registry entries");
      else if (t.isArrayExpression(value)) markEntry(owners, source, value);
    }
    return;
  }
  if (
    t.isNumericLiteral(first) &&
    first.value === 0 &&
    t.isStringLiteral(values[1]) &&
    t.isStringLiteral(values[2]) &&
    t.isStringLiteral(values[3])
  ) {
    // A section shell: [0, id, template, walks].
    mark(owners, source, first, "shell ids/wrappers");
    mark(owners, source, values[1], "shell ids/wrappers");
    mark(owners, source, values[2], "shell templates/walks");
    mark(owners, source, values[3], "shell templates/walks");
    return;
  }
  if (t.isNumericLiteral(first)) {
    // A ready batch's first number is the protocol wrapper/id. Its remaining
    // entries are ordinary fills, effects, shells, or dependency markers.
    mark(owners, source, first, "lazy/async framing");
    for (const value of values.slice(1)) {
      if (t.isNumericLiteral(value))
        mark(owners, source, value, "lazy/async framing");
      else if (t.isArrowFunctionExpression(value))
        markFill(owners, source, value);
      else if (t.isStringLiteral(value))
        mark(owners, source, value, "effect/registry entries");
      else if (t.isArrayExpression(value)) {
        markDeps(owners, source, value);
      }
    }
    return;
  }
  markDeps(owners, source, entry);
}

function markFill(
  owners: Array<Category | undefined>,
  source: string,
  fill: BabelTypes.ArrowFunctionExpression,
  refinementFrom?: Category,
) {
  mark(owners, source, fill.body, "frame/runtime syntax", refinementFrom);
  visitFill(owners, source, fill.body, "frame/runtime syntax");
}

function visitFill(
  owners: Array<Category | undefined>,
  source: string,
  node: BabelTypes.Node,
  refinementFrom?: Category,
) {
  if (!node) return;
  if (t.isArrayExpression(node)) {
    const first = node.elements[0];
    if (first && t.isExpression(first)) {
      mark(owners, source, first, "scope fills/ids/metadata", refinementFrom);
      if (t.isArrowFunctionExpression(first))
        markFill(owners, source, first, "scope fills/ids/metadata");
      else if (t.isArrayExpression(first))
        visitFill(owners, source, first, "scope fills/ids/metadata");
    }
    for (const element of node.elements.slice(1)) {
      if (element && t.isExpression(element))
        visitFill(owners, source, element, refinementFrom);
    }
    return;
  }
  if (t.isObjectExpression(node)) {
    for (const property of node.properties) {
      if (!t.isObjectProperty(property)) continue;
      mark(
        owners,
        source,
        property.key,
        "scope fills/ids/metadata",
        refinementFrom,
      );
      visitValue(owners, source, property.value, "scope fills/ids/metadata");
    }
    return;
  }
  visitValue(owners, source, node, refinementFrom);
}

function visitValue(
  owners: Array<Category | undefined>,
  source: string,
  node: BabelTypes.Node,
  refinementFrom?: Category,
) {
  if (!node) return;
  if (t.isArrowFunctionExpression(node)) {
    markFill(owners, source, node, refinementFrom);
    return;
  }
  if (t.isObjectExpression(node) || t.isArrayExpression(node)) {
    visitFill(owners, source, node, refinementFrom);
    return;
  }
  if (t.isCallExpression(node) || t.isMemberExpression(node)) {
    mark(
      owners,
      source,
      node,
      "node/branch markers or references",
      refinementFrom,
    );
    return;
  }
  if (
    t.isAssignmentExpression(node) ||
    t.isBinaryExpression(node) ||
    t.isLogicalExpression(node) ||
    t.isNewExpression(node)
  ) {
    mark(
      owners,
      source,
      node,
      "node/branch markers or references",
      refinementFrom,
    );
    return;
  }
  if (t.isIdentifier(node)) {
    mark(
      owners,
      source,
      node,
      "node/branch markers or references",
      refinementFrom,
    );
    return;
  }
  if (node.type.endsWith("Literal")) {
    mark(owners, source, node, "ordinary values", refinementFrom);
  }
}

function markDeps(
  owners: Array<Category | undefined>,
  source: string,
  deps: BabelTypes.ArrayExpression,
) {
  mark(owners, source, deps, "scope fills/ids/metadata");
  for (const element of deps.elements) {
    if (element && t.isArrowFunctionExpression(element))
      markFill(owners, source, element, "scope fills/ids/metadata");
  }
}

function mark(
  owners: Array<Category | undefined>,
  source: string,
  node: BabelTypes.Node,
  category: Category,
  refinementFrom?: Category,
) {
  const range = requireRange(node);
  markRange(owners, source, range.start, range.end, category, refinementFrom);
}

function markRange(
  owners: Array<Category | undefined>,
  source: string,
  start: number,
  end: number,
  category: Category,
  refinementFrom?: Category,
) {
  const byteLength = Buffer.byteLength(source);
  if (start < 0 || end < start || end > source.length) {
    throw new Error(`invalid AST range ${start}..${end} for ${source}`);
  }
  const byteStart = Buffer.byteLength(source.slice(0, start));
  const byteEnd = Buffer.byteLength(source.slice(0, end));
  if (byteEnd > byteLength)
    throw new Error(`AST range exceeds source: ${source}`);
  for (let index = byteStart; index < byteEnd; index++) {
    const existing = owners[index];
    if (
      existing !== undefined &&
      existing !== category &&
      existing !== refinementFrom &&
      !(existing === "frame/runtime syntax" && refinementFrom !== undefined)
    ) {
      throw new Error(
        `overlapping attribution at byte ${index}: ${existing} and ${category}`,
      );
    }
    owners[index] = category;
  }
}

function requireRange(node: BabelTypes.Node): { start: number; end: number } {
  if (node.start == null || node.end == null) {
    throw new Error(`AST node has no range: ${node.type}`);
  }
  return { start: node.start, end: node.end };
}

function isSyntaxByte(byte: number) {
  return (
    (byte >= 9 && byte <= 13) ||
    (byte >= 32 && byte <= 47) ||
    (byte >= 58 && byte <= 64) ||
    (byte >= 91 && byte <= 96) ||
    (byte >= 123 && byte <= 126)
  );
}

assertReadyBatchSelfTest();

function assertReadyBatchSelfTest() {
  const measured = measureFrame(
    '[[7,_=>[2,{value:42}],"effect",[5,6]],[0,"id","<p> </p>","D l"]]',
  );
  assertEqual(
    measured["lazy/async framing"],
    1,
    "ready batch wrapper attribution",
  );
  for (const category of [
    "scope fills/ids/metadata",
    "ordinary values",
    "effect/registry entries",
    "shell templates/walks",
    "shell ids/wrappers",
  ] as const) {
    if (measured[category] === 0) {
      throw new Error(`ready batch self-test has no ${category} attribution`);
    }
  }
}

function assertEqual(actual: number, expected: number, label: string) {
  if (actual !== expected) {
    throw new Error(
      `${label}: ${actual} bytes attributed, expected ${expected}`,
    );
  }
}

function allocateCompression(
  raw: Record<Category, number>,
  compressed: number,
  totalRaw: number,
): Record<Category, number> {
  const allocated = Object.fromEntries(
    categories.map((category) => [
      category,
      Math.floor((raw[category] / totalRaw) * compressed),
    ]),
  ) as Record<Category, number>;
  let remainder =
    compressed -
    Object.values(allocated).reduce((sum, value) => sum + value, 0);
  for (const category of categories) {
    if (!remainder) break;
    allocated[category]++;
    remainder--;
  }
  return allocated;
}
