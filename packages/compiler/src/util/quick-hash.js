/**
 * Outputs a noncryptographic hash as a safe integer (<= Number.MAX_SAFE_INTEGER).
 */
export class Hash {
  a = 0xdeadbeef;
  b = 0x9e3779b9;

  update(s) {
    let a = this.a;
    let b = this.b;
    for (let i = s.length; i--; ) {
      a = Math.imul(a ^ s.charCodeAt(i), 0x85ebca6b);
      a = (a << 13) | (a >>> 19);
      b = Math.imul(b ^ a, 0xc2b2ae35);
      b = (b << 17) | (b >>> 15);
      a ^= b >>> 11;
      b ^= a >>> 7;
    }

    this.a = a;
    this.b = b;
    return this;
  }

  digest() {
    let a = this.a;
    let b = this.b;
    a = Math.imul(a ^ b, 0x27d4eb2f);
    a ^= a >>> 16;
    b = Math.imul(b ^ a, 0x165667b1);
    b ^= b >>> 15;
    a = Math.imul(a ^ (b >>> 13), 0x5bd1e995);
    return (b & 0x1fffff) * 0x100000000 + a;
  }
}
