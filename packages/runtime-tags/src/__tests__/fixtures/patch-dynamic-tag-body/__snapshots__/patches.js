// PATCH
[`a0,hi`, `b;D%;<section><!></section>`, `a1; ; `, (_.a = {
  fa: [">div", {
    class: "b"
  }, "a0"],
  fb: ["b", 0, "a1"],
  cAb: {
    fa: "^a1",
    cAa: {
      ta: "y"
    }
  }
}, _.a)]
"BAEAAA"

// PATCH holding BAEAAA
(_.a = {
  fa: [">section", {
    class: "b"
  }, "a0"],
  fb: [0, 0, "a1"],
  cAb: {
    ta: "z"
  }
}, _.a)

// PATCH holding BAEAAA
(_.a = {
  fa: [">section", {
    class: "c"
  }, "a0"],
  fb: ["b", 0, "a1"],
  cAb: {
    fa: "^a1",
    cAa: {
      ta: "w"
    }
  }
}, _.a)
