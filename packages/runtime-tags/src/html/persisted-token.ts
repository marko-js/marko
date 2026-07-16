import type { PersistedDescriptor, PersistedPossession } from "../common/types";

const MAX_TOKEN_LENGTH = 4096;
// Bounds decoder expansion (range/prefix groups make small tokens claim many
// keys); above it the encoder degrades to a graduated prefix claim.
const MAX_ITEMS = 16384;
const VLQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
const TCHAR = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]*$/;
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder("utf-8", { fatal: true });

export function encodePersistedPossession(
  possession: PersistedPossession,
  descriptor: PersistedDescriptor,
): string {
  const sourceEntries = Object.entries(possession);
  const full = Math.min(sourceEntries.length, MAX_ITEMS);
  const encode = (count: number) =>
    encodePossessionEntries(sourceEntries.slice(0, count), descriptor);
  const token = encode(full);
  if (token || !full) return token;
  // Over budget: claim a document-order prefix that fits (unclaimed sites fall
  // back to fragments), backing off from a sampled bytes-per-entry estimate.
  const sampleCount = Math.min(64, full);
  const sample = encode(sampleCount);
  if (!sample) return "";
  let guess = Math.min(
    full - 1,
    Math.max(
      sampleCount,
      Math.floor((sampleCount * (MAX_TOKEN_LENGTH - 64)) / sample.length),
    ),
  );
  for (; guess >= sampleCount; guess = Math.floor(guess * 0.9)) {
    const attempt = encode(guess);
    if (attempt) return attempt;
  }
  return sample;
}

function encodePossessionEntries(
  sourceEntries: [string, string][],
  descriptor: PersistedDescriptor,
): string {
  try {
    const scalar = encodeScalar(sourceEntries, descriptor);
    if (scalar?.length === 2) return scalar;
    const plain = encodeToken(sourceEntries, descriptor, []);
    const dictionary = buildStringDictionary(sourceEntries);
    if (!dictionary.length) {
      return scalar && (!plain || scalar.length < plain.length)
        ? scalar
        : plain || "";
    }
    const interned = encodeToken(sourceEntries, descriptor, dictionary);
    let shortest = plain;
    if (interned && (!shortest || interned.length < shortest.length)) {
      shortest = interned;
    }
    if (scalar && (!shortest || scalar.length < shortest.length)) return scalar;
    return shortest || "";
  } catch {
    return "";
  }
}

export function decodePersistedPossession(
  token: string,
  descriptor: PersistedDescriptor,
): PersistedPossession | undefined {
  if (!token) return;
  if (token.length > MAX_TOKEN_LENGTH || !TCHAR.test(token)) return;
  try {
    const reader = new Reader(token, createDescriptorState(descriptor, []));
    const mode = reader.take();
    if (mode === "S" || mode === "B") {
      const possession = readScalar(reader, mode);
      if (!reader.done()) return;
      if (encodePersistedPossession(possession, descriptor) !== token) return;
      return possession;
    }
    if (mode !== "P") return;
    if (reader.peek() === "!") {
      reader.take();
      const count = reader.vlq();
      reader.items(count);
      const dictionary: string[] = [];
      for (let i = 0; i < count; i++) dictionary.push(reader.rawString());
      reader.descriptor = createDescriptorState(descriptor, dictionary);
    }
    const count = reader.vlq();
    reader.items(count);
    const possession: PersistedPossession = {};
    for (let i = 0; i < count; i++) {
      if (reader.peek() === "G") {
        readPresenceGroup(reader, possession);
        continue;
      }
      const key = readPossessionKey(reader);
      if (Object.hasOwn(possession, key)) return;
      possession[key] = readPossessionValue(reader);
    }
    if (!reader.done()) return;
    if (encodePersistedPossession(possession, descriptor) !== token) return;
    return possession;
  } catch {
    return;
  }
}

interface DescriptorState {
  sites: readonly string[];
  siteIndexes: Map<string, number>;
  renderers: readonly string[];
  rendererIndexes: Map<string, number>;
  strings: readonly string[];
  stringIndexes: Map<string, number>;
}

interface PossessionSegment {
  site: string;
  key?: string | number;
}

interface PresenceGroup {
  path: PossessionSegment[];
  numbers: [string, number][];
  strings: [string, string][];
}

function createDescriptorState(
  descriptor: PersistedDescriptor,
  strings: readonly string[],
): DescriptorState {
  const [sites, renderers] = descriptor;
  return {
    sites,
    siteIndexes: indexDescriptorValues(sites),
    renderers,
    rendererIndexes: indexDescriptorValues(renderers),
    strings,
    stringIndexes: indexUniqueValues(strings),
  };
}

function indexDescriptorValues(values: readonly string[]) {
  const indexes = new Map<string, number>();
  for (let i = 0; i < values.length; i++) {
    indexes.set(values[i], i);
  }
  return indexes;
}

function indexUniqueValues(values: readonly string[]) {
  const indexes = indexDescriptorValues(values);
  if (indexes.size !== values.length) {
    throw new TypeError("Persisted token strings must be unique.");
  }
  return indexes;
}

function encodeScalar(
  entries: [string, string][],
  descriptor: PersistedDescriptor,
) {
  if (entries.length !== 1) return;
  const [[key, value]] = entries;
  const boundary = key[0] === "!";
  const path = parsePossessionPath(key.slice(boundary ? 1 : 0));
  if (path.length !== 1 || path[0].key !== undefined) return;
  const [sites, renderers] = descriptor;
  const site = sites.indexOf(path[0].site);
  if (site < 0) return;
  const writer = new Writer(createDescriptorState(descriptor, []));
  if (boundary) {
    if (value !== "1") return;
    writer.add("B");
    writer.vlq(site);
  } else {
    const renderer = renderers.indexOf(value);
    if (renderer < 0) return;
    const packed = site * renderers.length + renderer;
    writer.add("S");
    writer.vlq(packed);
  }
  return writer.value;
}

function readScalar(reader: Reader, mode: "S" | "B") {
  const value = reader.vlq();
  let siteIndex = value;
  let possessionValue = "1";
  if (mode === "S") {
    const rendererCount = reader.descriptor.renderers.length;
    if (!rendererCount) reader.fail();
    siteIndex = Math.floor(value / rendererCount);
    const renderer = reader.descriptor.renderers[value % rendererCount];
    if (renderer === undefined) reader.fail();
    possessionValue = renderer;
  }
  const site = reader.descriptor.sites[siteIndex];
  if (site === undefined) reader.fail();
  return {
    [(mode === "B" ? "!" : "") + formatPossessionPath([{ site }])]:
      possessionValue,
  };
}

function encodeToken(
  sourceEntries: [string, string][],
  descriptor: PersistedDescriptor,
  dictionary: string[],
) {
  try {
    const state = createDescriptorState(descriptor, dictionary);
    const entries = encodeEntries(sourceEntries, state);
    entries.sort();
    const writer = new Writer(state);
    writer.add("P");
    if (dictionary.length) {
      writer.add("!");
      writer.vlq(dictionary.length);
      for (const value of dictionary) writer.rawString(value);
    }
    writer.vlq(entries.length);
    for (const entry of entries) writer.add(entry);
    return writer.value;
  } catch (error) {
    if (error === tokenTooLong) return;
    throw error;
  }
}

function buildStringDictionary(sourceEntries: [string, string][]) {
  const counts = new Map<string, number>();
  for (const [key] of sourceEntries) {
    if (key) {
      const path = parsePossessionPath(key.slice(key[0] === "!" ? 1 : 0));
      for (const segment of path) {
        if (typeof segment.key === "string")
          addStringCount(counts, segment.key);
      }
    }
  }
  const candidates = [...counts]
    .filter(([, count]) => count > 1)
    .map(([value, count]) => {
      const encoded = encodeRawString(value);
      return {
        value,
        count,
        encoded,
        score: count * (encoded.length - 2) - encoded.length,
      };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || (a.encoded < b.encoded ? -1 : 1));
  const dictionary: string[] = [];
  for (const candidate of candidates) {
    const referenceLength = 1 + vlqLength(dictionary.length);
    if (
      candidate.count * (candidate.encoded.length - referenceLength) >
      candidate.encoded.length
    ) {
      dictionary.push(candidate.value);
    }
  }
  return dictionary;
}

function addStringCount(counts: Map<string, number>, value: string) {
  counts.set(value, (counts.get(value) || 0) + 1);
}

function encodeRawString(value: string) {
  const writer = new Writer(createDescriptorState([[], []], []));
  writer.rawString(value);
  return writer.value;
}

function vlqLength(value: number) {
  let length = 1;
  while (value >= 32) {
    value = Math.floor(value / 32);
    length++;
  }
  return length;
}

function encodeEntries(
  sourceEntries: [string, string][],
  descriptor: DescriptorState,
) {
  const entries: string[] = [];
  const groups = new Map<string, PresenceGroup>();
  for (const [key, value] of sourceEntries) {
    if (key[0] === "!" && value === "1") {
      const path = parsePossessionPath(key.slice(1));
      const last = path[path.length - 1];
      if (last.key !== undefined) {
        const groupPath = path.slice();
        groupPath[groupPath.length - 1] = { site: last.site };
        const groupKey = formatPossessionPath(groupPath);
        let group = groups.get(groupKey);
        if (!group) {
          group = { path: groupPath, numbers: [], strings: [] };
          groups.set(groupKey, group);
        }
        if (typeof last.key === "number") group.numbers.push([key, last.key]);
        else group.strings.push([key, last.key]);
        continue;
      }
    }
    entries.push(encodeEntry(descriptor, key, value));
  }
  for (const group of groups.values()) {
    addPresenceGroup(entries, descriptor, group.path, group.numbers);
    addPresenceGroup(entries, descriptor, group.path, group.strings);
  }
  return entries;
}

function encodeEntry(descriptor: DescriptorState, key: string, value: string) {
  const writer = new Writer(descriptor);
  writePossessionKey(writer, key);
  writePossessionValue(writer, value);
  return writer.value;
}

function addPresenceGroup<T extends string | number>(
  entries: string[],
  descriptor: DescriptorState,
  path: PossessionSegment[],
  values: [string, T][],
) {
  if (!values.length) return;
  const individual = values.map(([key]) => encodeEntry(descriptor, key, "1"));
  let grouped: string | undefined;
  try {
    const writer = new Writer(descriptor);
    writer.add("G");
    writePossessionPath(writer, path);
    if (typeof values[0][1] === "number") {
      writeNumberSet(
        writer,
        (values as [string, number][]).map(([, value]) => value),
      );
    } else {
      writeStringSet(
        writer,
        (values as [string, string][]).map(([, value]) => value),
      );
    }
    grouped = writer.value;
  } catch (error) {
    if (error !== tokenTooLong) throw error;
  }
  if (
    values.length > 1 &&
    grouped &&
    grouped.length < individual.reduce(sumLength, 0)
  ) {
    entries.push(grouped);
  } else {
    entries.push(...individual);
  }
}

function sumLength(length: number, value: string) {
  return length + value.length;
}

function writePossessionKey(writer: Writer, key: string) {
  const boundary = key[0] === "!";
  const segments = parsePossessionPath(key.slice(boundary ? 1 : 0));
  writer.add(boundary ? "B" : "N");
  writePossessionPath(writer, segments);
}

function writePossessionPath(writer: Writer, segments: PossessionSegment[]) {
  writer.vlq(segments.length);
  for (const segment of segments) {
    const siteIndex = writer.descriptor.siteIndexes.get(segment.site);
    if (siteIndex === undefined) {
      writer.add("S");
      writer.string(segment.site);
    } else {
      writer.add("I");
      writer.vlq(siteIndex);
    }
    if (segment.key === undefined) {
      writer.add("X");
    } else {
      writeLoopKey(writer, segment.key);
    }
  }
}

function readPossessionKey(reader: Reader) {
  const kind = reader.take();
  if (kind !== "B" && kind !== "N") reader.fail();
  return (kind === "B" ? "!" : "") + formatPossessionPath(readPath(reader));
}

function readPath(reader: Reader) {
  const count = reader.vlq();
  if (!count) reader.fail();
  reader.items(count);
  const segments: PossessionSegment[] = [];
  for (let i = 0; i < count; i++) {
    const siteKind = reader.take();
    let site: string;
    if (siteKind === "I") {
      site = reader.descriptor.sites[reader.vlq()];
      if (site === undefined) reader.fail();
    } else if (siteKind === "S") {
      site = reader.string();
    } else {
      reader.fail();
    }
    const keyKind = reader.peek();
    segments.push({
      site,
      key: keyKind === "X" ? (reader.take(), undefined) : readLoopKey(reader),
    });
  }
  return segments;
}

function writePossessionValue(writer: Writer, value: string) {
  const rendererIndex = writer.descriptor.rendererIndexes.get(value);
  if (rendererIndex === undefined) {
    writer.add("S");
    writer.string(value);
  } else {
    writer.add("R");
    writer.vlq(rendererIndex);
  }
}

function readPossessionValue(reader: Reader): string {
  const kind = reader.take();
  if (kind === "R") {
    const renderer = reader.descriptor.renderers[reader.vlq()];
    if (renderer === undefined) reader.fail();
    return renderer;
  }
  if (kind === "S") {
    return reader.string();
  }
  return reader.fail();
}

function writeLoopKey(writer: Writer, value: string | number) {
  if (typeof value === "string") {
    writer.add("T");
    writer.string(value);
  } else {
    writeNumber(writer, value);
  }
}

function readLoopKey(reader: Reader) {
  if (reader.peek() === "T") {
    reader.take();
    return reader.string();
  }
  return readNumber(reader);
}

function writeNumberSet(writer: Writer, values: number[]) {
  values.sort((a, b) => a - b);
  const candidates = [addCandidate(encodeNumberList, writer, values, "F")];
  if (
    values.every(Number.isSafeInteger) &&
    canZigzag(values[0]) &&
    values.every((value, index) => !index || value > values[index - 1])
  ) {
    candidates.push(addCandidate(encodeNumberList, writer, values, "L"));
    candidates.push(addCandidate(encodeNumberRanges, writer, values));
    candidates.push(addCandidate(encodeNumberBitset, writer, values));
  }
  let shortest: string | undefined;
  for (const candidate of candidates) {
    if (candidate && (!shortest || candidate.length < shortest.length)) {
      shortest = candidate;
    }
  }
  if (shortest === undefined) throw tokenTooLong;
  writer.add(shortest);
}

// An over-budget form only removes itself from the race.
function addCandidate<A extends unknown[]>(
  encode: (descriptor: DescriptorState, ...args: A) => string | undefined,
  writer: Writer,
  ...args: A
) {
  try {
    return encode(writer.descriptor, ...args);
  } catch (error) {
    if (error !== tokenTooLong) throw error;
  }
}

function encodeNumberList(
  descriptor: DescriptorState,
  values: number[],
  kind: "F" | "L",
) {
  const writer = new Writer(descriptor);
  writer.add(kind);
  writer.vlq(values.length);
  if (kind === "F") {
    for (const value of values) writeNumber(writer, value);
  } else if (values.length) {
    writer.vlq(zigzag(values[0]));
    for (let i = 1; i < values.length; i++) {
      writer.vlq(values[i] - values[i - 1]);
    }
  }
  return writer.value;
}

function encodeNumberRanges(descriptor: DescriptorState, values: number[]) {
  const ranges: [number, number][] = [];
  for (const value of values) {
    const previous = ranges[ranges.length - 1];
    if (previous && value === previous[1] + 1) previous[1] = value;
    else ranges.push([value, value]);
  }
  const writer = new Writer(descriptor);
  writer.add("R");
  writer.vlq(ranges.length);
  let previousEnd = 0;
  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    writer.vlq(i ? start - previousEnd - 1 : zigzag(start));
    writer.vlq(end - start);
    previousEnd = end;
  }
  return writer.value;
}

function encodeNumberBitset(descriptor: DescriptorState, values: number[]) {
  if (!values.length) return;
  const minimum = values[0];
  const span = values[values.length - 1] - minimum + 1;
  if (!Number.isSafeInteger(span) || span > MAX_TOKEN_LENGTH * 6) return;
  const bits = new Uint8Array(Math.ceil(span / 8));
  for (const value of values) {
    const index = value - minimum;
    bits[index >> 3] |= 1 << (index & 7);
  }
  const writer = new Writer(descriptor);
  writer.add("B");
  writer.vlq(zigzag(minimum));
  writer.vlq(span);
  writeBase64(writer, bits);
  return writer.value;
}

function writeStringSet(writer: Writer, values: string[]) {
  values.sort();
  const plain = addCandidate(encodeStringList, writer, values);
  const prefixed = addCandidate(encodePrefixedStringSet, writer, values);
  // Ties keep the plain form so selection stays deterministic.
  if (prefixed && (!plain || prefixed.length < plain.length)) {
    writer.add(prefixed);
  } else if (plain) {
    writer.add(plain);
  } else {
    throw tokenTooLong;
  }
}

function encodeStringList(descriptor: DescriptorState, values: string[]) {
  const writer = new Writer(descriptor);
  writer.add("Q");
  writer.vlq(values.length);
  for (const value of values) writer.string(value);
  return writer.value;
}

// Stem + trailing canonical decimal suffix runs (`k0`…`k4999` becomes one
// stem and one number set); non-decomposing values ride as residuals.
function encodePrefixedStringSet(
  descriptor: DescriptorState,
  values: string[],
) {
  const stems = new Map<string, number[]>();
  const residual: string[] = [];
  for (const value of values) {
    const stem = decomposeDecimalSuffix(value);
    if (stem) {
      const suffixes = stems.get(stem[0]);
      if (suffixes) suffixes.push(stem[1]);
      else stems.set(stem[0], [stem[1]]);
    } else {
      residual.push(value);
    }
  }
  if (!stems.size) return;
  const writer = new Writer(descriptor);
  writer.add("D");
  writer.vlq(stems.size);
  for (const stem of [...stems.keys()].sort()) {
    writer.string(stem);
    writeNumberSet(writer, stems.get(stem)!);
  }
  writer.vlq(residual.length);
  for (const value of residual) writer.string(value);
  return writer.value;
}

function decomposeDecimalSuffix(
  value: string,
): [stem: string, suffix: number] | undefined {
  const match = /^([\s\S]*?)(\d+)$/.exec(value);
  if (match) {
    const suffix = Number(match[2]);
    // Only canonical suffixes round-trip (`k007` re-encodes as `k7`).
    if (match[1] + suffix === value && canZigzag(suffix)) {
      return [match[1], suffix];
    }
  }
}

function readPresenceGroup(reader: Reader, possession: PersistedPossession) {
  reader.take();
  const path = readPath(reader);
  const last = path[path.length - 1];
  if (last.key !== undefined) reader.fail();
  const kind = reader.peek();
  const values =
    kind === "Q"
      ? readStringSet(reader)
      : kind === "D"
        ? readPrefixedStringSet(reader)
        : readNumberSet(reader);
  for (const value of values) {
    last.key = value;
    const key = "!" + formatPossessionPath(path);
    if (Object.hasOwn(possession, key)) reader.fail();
    possession[key] = "1";
  }
}

function readNumberSet(reader: Reader) {
  const kind = reader.take();
  if (kind === "B") return readNumberBitset(reader);
  const count = reader.vlq();
  if (!count) reader.fail();
  const values: number[] = [];
  if (kind === "F") {
    reader.items(count);
    for (let i = 0; i < count; i++) values.push(readNumber(reader));
  } else if (kind === "L") {
    reader.items(count);
    values.push(unzigzag(reader.vlq()));
    for (let i = 1; i < count; i++) {
      const value = values[i - 1] + reader.vlq();
      if (!Number.isSafeInteger(value)) reader.fail();
      values.push(value);
    }
  } else if (kind === "R") {
    let previousEnd = 0;
    for (let i = 0; i < count; i++) {
      const encodedStart = reader.vlq();
      const start = i ? previousEnd + encodedStart + 1 : unzigzag(encodedStart);
      const length = reader.vlq() + 1;
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(length)) {
        reader.fail();
      }
      reader.items(length);
      for (let j = 0; j < length; j++) values.push(start + j);
      previousEnd = start + length - 1;
      if (!Number.isSafeInteger(previousEnd)) reader.fail();
    }
  } else {
    reader.fail();
  }
  return values;
}

function readNumberBitset(reader: Reader) {
  const minimum = unzigzag(reader.vlq());
  const span = reader.vlq();
  if (!span || span > MAX_TOKEN_LENGTH * 6) reader.fail();
  const bytes = readBase64(reader, Math.ceil(span / 8));
  const values: number[] = [];
  for (let i = 0; i < span; i++) {
    if (bytes[i >> 3] & (1 << (i & 7))) values.push(minimum + i);
  }
  reader.items(values.length);
  return values;
}

function readStringSet(reader: Reader) {
  reader.take();
  const count = reader.vlq();
  if (!count) reader.fail();
  reader.items(count);
  const values: string[] = [];
  for (let i = 0; i < count; i++) values.push(reader.string());
  return values;
}

function readPrefixedStringSet(reader: Reader) {
  reader.take();
  const stemCount = reader.vlq();
  if (!stemCount) reader.fail();
  const values: string[] = [];
  for (let i = 0; i < stemCount; i++) {
    const stem = reader.string();
    for (const suffix of readNumberSet(reader)) values.push(stem + suffix);
  }
  const residualCount = reader.vlq();
  reader.items(residualCount);
  for (let i = 0; i < residualCount; i++) values.push(reader.string());
  return values;
}

function writeNumber(writer: Writer, value: number) {
  if (!Number.isFinite(value)) throw new TypeError("Invalid possession key.");
  if (Number.isSafeInteger(value) && canZigzag(value)) {
    writer.add("I");
    writer.vlq(zigzag(value));
  } else {
    writer.add("F");
    writer.string(String(value));
  }
}

function readNumber(reader: Reader) {
  const kind = reader.take();
  if (kind === "I") return unzigzag(reader.vlq());
  if (kind !== "F") reader.fail();
  const source = reader.string();
  const value = Number(source);
  if (!Number.isFinite(value) || String(value) !== source) reader.fail();
  return value;
}

function parsePossessionPath(source: string) {
  const segments: PossessionSegment[] = [];
  let offset = 0;
  while (offset < source.length) {
    if (source[offset++] !== "i")
      throw new TypeError("Invalid possession path.");
    const siteLength = readDecimalLength(source, offset);
    offset = siteLength.offset;
    const site = source.slice(offset, offset + siteLength.value);
    if (site.length !== siteLength.value) {
      throw new TypeError("Invalid possession path.");
    }
    offset += siteLength.value;
    let key: string | number | undefined;
    if (source[offset] === "=") {
      const keyKind = source[++offset];
      if (keyKind === "s") {
        const keyLength = readDecimalLength(source, offset + 1);
        offset = keyLength.offset;
        key = source.slice(offset, offset + keyLength.value);
        if (key.length !== keyLength.value) {
          throw new TypeError("Invalid possession path.");
        }
        offset += keyLength.value;
      } else if (keyKind === "n") {
        const end = source.indexOf("/", offset + 1);
        const encoded = source.slice(offset + 1, end < 0 ? undefined : end);
        key = Number(encoded);
        if (!Number.isFinite(key) || String(key) !== encoded) {
          throw new TypeError("Invalid possession path.");
        }
        offset = end < 0 ? source.length : end;
      } else {
        throw new TypeError("Invalid possession path.");
      }
    }
    segments.push({ site, key });
    if (offset === source.length) break;
    if (source[offset++] !== "/")
      throw new TypeError("Invalid possession path.");
    if (offset === source.length)
      throw new TypeError("Invalid possession path.");
  }
  if (!segments.length) throw new TypeError("Invalid possession path.");
  return segments;
}

function readDecimalLength(source: string, offset: number) {
  const colon = source.indexOf(":", offset);
  if (colon < 0) throw new TypeError("Invalid possession path.");
  const encoded = source.slice(offset, colon);
  if (!/^(0|[1-9]\d*)$/.test(encoded)) {
    throw new TypeError("Invalid possession path.");
  }
  const value = Number(encoded);
  if (!Number.isSafeInteger(value))
    throw new TypeError("Invalid possession path.");
  return { offset: colon + 1, value };
}

function formatPossessionPath(segments: PossessionSegment[]) {
  return segments
    .map(({ site, key }) => {
      let value = `i${site.length}:${site}`;
      if (typeof key === "string") value += `=s${key.length}:${key}`;
      else if (typeof key === "number") value += `=n${key}`;
      return value;
    })
    .join("/");
}

function canZigzag(value: number) {
  return (
    Number.isSafeInteger(value) &&
    Math.abs(value) <= Math.floor(Number.MAX_SAFE_INTEGER / 2)
  );
}

function zigzag(value: number) {
  return value < 0 ? -value * 2 - 1 : value * 2;
}

function unzigzag(value: number) {
  return value % 2 ? -(value + 1) / 2 : value / 2;
}

class Writer {
  value = "";

  constructor(public descriptor: DescriptorState) {}

  add(value: string) {
    if (this.value.length + value.length > MAX_TOKEN_LENGTH) {
      throw tokenTooLong;
    }
    this.value += value;
  }

  vlq(value: number) {
    do {
      const digit = value % 32;
      value = Math.floor(value / 32);
      this.add(VLQ[digit + (value ? 32 : 0)]);
    } while (value);
  }

  string(value: string) {
    const index = this.descriptor.stringIndexes.get(value);
    if (index !== undefined) {
      this.add("*");
      this.vlq(index);
      return;
    }
    this.rawString(value);
  }

  rawString(value: string) {
    if (value.length > MAX_TOKEN_LENGTH) throw tokenTooLong;
    if (TCHAR.test(value)) {
      this.add(".");
      this.vlq(value.length);
      this.add(value);
      return;
    }
    const bytes = textEncoder.encode(value);
    if (textDecoder.decode(bytes) === value) {
      this.add("~");
      this.vlq(bytes.length);
      writeBase64(this, bytes);
      return;
    }
    this.add("^");
    this.vlq(value.length);
    const codeUnits = new Uint8Array(value.length * 2);
    for (let i = 0; i < value.length; i++) {
      const codeUnit = value.charCodeAt(i);
      codeUnits[i * 2] = codeUnit >> 8;
      codeUnits[i * 2 + 1] = codeUnit & 255;
    }
    writeBase64(this, codeUnits);
  }
}

const tokenTooLong = {};

class Reader {
  offset = 0;
  itemCount = 0;
  byteCount = 0;

  constructor(
    public source: string,
    public descriptor: DescriptorState,
  ) {}

  done() {
    return this.offset === this.source.length;
  }

  peek() {
    const value = this.source[this.offset];
    if (value === undefined) this.fail();
    return value;
  }

  take() {
    const value = this.peek();
    this.offset++;
    return value;
  }

  vlq() {
    let value = 0;
    let factor = 1;
    for (let i = 0; i < 11; i++) {
      const digit = VLQ.indexOf(this.take());
      if (digit < 0) this.fail();
      value += (digit & 31) * factor;
      if (!Number.isSafeInteger(value)) this.fail();
      if (!(digit & 32)) return value;
      factor *= 32;
    }
    return this.fail();
  }

  string() {
    if (this.peek() === "*") {
      this.take();
      const value = this.descriptor.strings[this.vlq()];
      if (value === undefined) this.fail();
      return value;
    }
    return this.rawString();
  }

  rawString() {
    const kind = this.take();
    const length = this.vlq();
    const byteLength = kind === "^" ? length * 2 : length;
    if (!Number.isSafeInteger(byteLength)) this.fail();
    this.byteCount += byteLength;
    if (this.byteCount > MAX_TOKEN_LENGTH) this.fail();
    if (kind === ".") {
      const value = this.source.slice(this.offset, this.offset + byteLength);
      if (value.length !== byteLength || !TCHAR.test(value)) this.fail();
      this.offset += byteLength;
      return value;
    }
    const bytes = readBase64(this, byteLength);
    if (kind === "~") return textDecoder.decode(bytes);
    if (kind !== "^") return this.fail();
    let value = "";
    for (let i = 0; i < bytes.length; i += 2) {
      value += String.fromCharCode(bytes[i] * 256 + bytes[i + 1]);
    }
    return value;
  }

  items(count: number) {
    this.itemCount += count;
    if (this.itemCount > MAX_ITEMS) this.fail();
  }

  fail(): never {
    throw new TypeError("Invalid persisted token.");
  }
}

function writeBase64(writer: Writer, bytes: Uint8Array) {
  for (let i = 0; i < bytes.length; i += 3) {
    const value =
      bytes[i] * 65536 + (bytes[i + 1] || 0) * 256 + (bytes[i + 2] || 0);
    writer.add(VLQ[(value >> 18) & 63] + VLQ[(value >> 12) & 63]);
    if (i + 1 < bytes.length) writer.add(VLQ[(value >> 6) & 63]);
    if (i + 2 < bytes.length) writer.add(VLQ[value & 63]);
  }
}

function readBase64(reader: Reader, byteLength: number) {
  const encodedLength = Math.ceil((byteLength * 4) / 3);
  const encoded = reader.source.slice(
    reader.offset,
    reader.offset + encodedLength,
  );
  if (encoded.length !== encodedLength) reader.fail();
  reader.offset += encodedLength;
  const bytes = new Uint8Array(byteLength);
  let byteOffset = 0;
  for (let i = 0; i < encoded.length; i += 4) {
    let value = 0;
    const length = Math.min(4, encoded.length - i);
    if (length === 1) reader.fail();
    for (let j = 0; j < 4; j++) {
      const digit = j < length ? VLQ.indexOf(encoded[i + j]) : 0;
      if (digit < 0) reader.fail();
      value = value * 64 + digit;
    }
    for (let shift = 16; shift >= 0 && byteOffset < byteLength; shift -= 8) {
      bytes[byteOffset++] = (value >> shift) & 255;
    }
  }
  return bytes;
}
