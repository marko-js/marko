// PATCH
(_.a = {
  cAa: {
    pa: 1,
    ka: [new Error("boom"), "\x3Cem>second\x3C/em>"]
  }
}, _.a)

// PATCH
(_.a = {
  cAa: {
    pa: 1,
    ka: [new Error("bang"), "\x3Cem>third\x3C/em>"]
  }
}, _.a)
