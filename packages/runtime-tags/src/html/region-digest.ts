// Region content digests: the first 96 bits of SHA-256 over the UTF-8
// markup, base64url. Server-only — clients receive digests, never compute
// them. Synchronous because digests are taken mid-flush inside a render.

const K = /* @__PURE__ */ (() => {
  const k = new Int32Array(64);
  const primes: number[] = [];
  for (let n = 2; primes.length < 64; n++) {
    if (primes.every((p) => n % p)) {
      primes.push(n);
      k[primes.length - 1] = (Math.cbrt(n) * 0x100000000) | 0;
    }
  }
  return k;
})();

const B64URL =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

/** Digests region markup to a 16-character identity segment. */
export function regionDigest(html: string) {
  // Inline UTF-8 encoding into padded 64-byte blocks.
  const bytes: number[] = [];
  for (let i = 0; i < html.length; i++) {
    let c = html.codePointAt(i)!;
    if (c > 0xffff) i++;
    if (c < 0x80) bytes.push(c);
    else if (c < 0x800) bytes.push(0xc0 | (c >> 6), 0x80 | (c & 63));
    else if (c < 0x10000) {
      bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    } else {
      bytes.push(
        0xf0 | (c >> 18),
        0x80 | ((c >> 12) & 63),
        0x80 | ((c >> 6) & 63),
        0x80 | (c & 63),
      );
    }
  }
  const bitLen = bytes.length * 8;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  for (let shift = 56; shift >= 0; shift -= 8) {
    bytes.push(shift < 32 ? (bitLen >>> shift) & 0xff : 0);
  }

  let h0 = 0x6a09e667 | 0,
    h1 = 0xbb67ae85 | 0,
    h2 = 0x3c6ef372 | 0,
    h3 = 0xa54ff53a | 0,
    h4 = 0x510e527f | 0,
    h5 = 0x9b05688c | 0,
    h6 = 0x1f83d9ab | 0,
    h7 = 0x5be0cd19 | 0;
  const w = new Int32Array(64);
  for (let block = 0; block < bytes.length; block += 64) {
    for (let t = 0; t < 16; t++) {
      const o = block + t * 4;
      w[t] =
        (bytes[o] << 24) |
        (bytes[o + 1] << 16) |
        (bytes[o + 2] << 8) |
        bytes[o + 3];
    }
    for (let t = 16; t < 64; t++) {
      const a = w[t - 15];
      const b = w[t - 2];
      const s0 = ((a >>> 7) | (a << 25)) ^ ((a >>> 18) | (a << 14)) ^ (a >>> 3);
      const s1 =
        ((b >>> 17) | (b << 15)) ^ ((b >>> 19) | (b << 13)) ^ (b >>> 10);
      w[t] = (w[t - 16] + s0 + w[t - 7] + s1) | 0;
    }
    let a = h0,
      b = h1,
      c = h2,
      d = h3,
      e = h4,
      f = h5,
      g = h6,
      h = h7;
    for (let t = 0; t < 64; t++) {
      const s1 =
        ((e >>> 6) | (e << 26)) ^
        ((e >>> 11) | (e << 21)) ^
        ((e >>> 25) | (e << 7));
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + s1 + ch + K[t] + w[t]) | 0;
      const s0 =
        ((a >>> 2) | (a << 30)) ^
        ((a >>> 13) | (a << 19)) ^
        ((a >>> 22) | (a << 10));
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (s0 + maj) | 0;
      h = g;
      g = f;
      f = e;
      e = (d + t1) | 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) | 0;
    }
    h0 = (h0 + a) | 0;
    h1 = (h1 + b) | 0;
    h2 = (h2 + c) | 0;
    h3 = (h3 + d) | 0;
    h4 = (h4 + e) | 0;
    h5 = (h5 + f) | 0;
    h6 = (h6 + g) | 0;
    h7 = (h7 + h) | 0;
  }

  // First 12 bytes (h0..h2) as exactly 16 base64url characters (96 = 16·6).
  let out = "";
  let acc = 0;
  let accBits = 0;
  for (const word of [h0, h1, h2]) {
    for (let shift = 24; shift >= 0; shift -= 8) {
      acc = (acc << 8) | ((word >>> shift) & 0xff);
      accBits += 8;
      while (accBits >= 6) {
        accBits -= 6;
        out += B64URL[(acc >>> accBits) & 63];
      }
    }
  }
  return out;
}
