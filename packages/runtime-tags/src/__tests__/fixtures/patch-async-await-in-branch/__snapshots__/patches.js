// PATCH
[`a1;D ;<em> </em>`, `a2;b%;<!><!><!>`, (_.a = {
  ta: "Store",
  bb: [{
    pa: "a1",
    cAa: {
      ta: "hi"
    }
  }, "a2"]
}, _.a)]
"BQIA"

// PATCH holding BQIA
(_.a = {
  ta: "Store!",
  bb: [{
    pa: "a1"
  }, "a2"]
}, _.a)
(_.b = {
  cAb: {
    cAa: {
      ta: "slow"
    }
  }
}, _.b)

// PATCH holding BQIA
[`a3,<em>closed</em>`, (_.a = {
  ta: "Store!",
  bb: [1, {}, "a3"]
}, _.a)]
"BQIAAA"

// PATCH holding BQIAAA
(_.a = {
  ta: "Open",
  bb: [{
    pa: "a1"
  }, "a2"]
}, _.a)
(_.b = {
  cAb: {
    cAa: {
      ta: "back"
    }
  }
}, _.b)
