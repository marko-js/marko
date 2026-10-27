import { rawShells, shellCount } from "./shells";

// The held-shell token, base64: a varint of the registry size × 2 + mode, then
// the held indices into the sorted registry as delta varints (0) or a bitmap (1).
const TOKEN_BUDGET = 1024;
let registry: { size: number; ids: string[]; at: Map<string, number> };
function shellRegistry() {
  if (registry?.size !== shellCount) {
    const ids = Object.keys(rawShells).sort();
    registry = {
      size: shellCount,
      ids,
      at: new Map(ids.map(toIndexEntry)),
    };
  }
  return registry;
}
function toIndexEntry(id: string, i: number): [string, number] {
  return [id, i];
}
function pushVarint(bytes: number[], n: number) {
  for (; n > 127; n >>>= 7) bytes.push((n & 127) | 128);
  bytes.push(n);
}
export function encodeHeld(ids: Set<string>) {
  const { size, at } = shellRegistry();
  // The bitmap also orders the held indices for the deltas without a sort.
  const bits = new Uint8Array((size >> 3) + 1);
  let used = 0;
  for (const id of ids) {
    const index = at.get(id);
    if (index !== undefined) {
      bits[index >> 3] |= 1 << (index & 7);
      used = Math.max(used, (index >> 3) + 1);
    }
  }
  const bytes: number[] = [];
  pushVarint(bytes, size * 2);
  // Base64 grows bytes by a third; the token ends at the last delta that fits.
  const limit = (TOKEN_BUDGET * 3) >> 2;
  let end = bytes.length;
  for (let byte = 0, prev = -1; byte < used && end === bytes.length; byte++) {
    for (let bit = 0; bits[byte] >> bit; bit++) {
      if (bits[byte] & (1 << bit)) {
        const index = byte * 8 + bit;
        pushVarint(bytes, index - prev - 1);
        prev = index;
        if (bytes.length > limit) break;
        end = bytes.length;
      }
    }
  }
  bytes.length = end;
  // The bitmap ends at its last held index's byte.
  const map: number[] = [];
  pushVarint(map, size * 2 + 1);
  map.push(...bits.subarray(0, used));
  return btoa(String.fromCharCode(...(map.length < end ? map : bytes))).replace(
    /=+$/,
    "",
  );
}
// A bad token (unparsable, or naming another registry) holds nothing: the
// header is the client's, so a bad one costs it shells, never the render.
export function decodeHeld(held: string) {
  const { size, ids } = shellRegistry();
  let bytes: string;
  try {
    bytes = atob(held);
  } catch {
    return;
  }
  let i = 0;
  const next = () => {
    let n = 0;
    for (let shift = 0, byte = 128; byte & 128; shift += 7) {
      byte = bytes.charCodeAt(i++);
      n += (byte & 127) << shift;
    }
    return n;
  };
  const head = next();
  if (head >> 1 !== size) return;
  const held_ = new Set<string>();
  if (head & 1) {
    for (let index = 0; i < bytes.length; index += 8) {
      for (let byte = bytes.charCodeAt(i++), bit = 0; byte >> bit; bit++) {
        if ((byte >> bit) & 1) {
          if (index + bit >= size) return;
          held_.add(ids[index + bit]);
        }
      }
    }
  } else {
    for (let index = -1; i < bytes.length;) {
      index += next() + 1;
      if (index >= size) return;
      held_.add(ids[index]);
    }
  }
  return held_;
}
