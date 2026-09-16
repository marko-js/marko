// PATCH
[`a3,<em>on sale</em>`, `a2;D%b%;<li><!><!></li>`, `a0;D%b%;<section><!><!></section>`, (_.a = {
  la: [3, {
    ta: "Milk",
    bb: "a3"
  }, 1, {
    ta: "Apples",
    bb: 0
  }, 2, {
    ta: "Bread",
    bb: 0
  }, "a2"],
  bb: [{
    ta: "2 deals",
    bb: 0
  }, "a0"],
  cc: {
    ta: "hot"
  }
}, _.a)]
"BgEBAA"

// PATCH holding BgEBAA
[`a1;D ;<small> </small>`, (_.a = {
  la: [3, {
    ta: "Milk",
    bb: 0
  }, 2, {
    ta: "Bread",
    bb: "a3"
  }, "a2"],
  bb: [{
    ta: "1 deal",
    bb: [{
      ta: "ends soon"
    }, "a1"]
  }, "a0"],
  cc: {
    ta: "hot"
  }
}, _.a)]
"BgEAAAA"

// PATCH holding BgEAAAA
[(_.a = {
  la: [2, {
    ta: "Bread",
    bb: "a3"
  }, "a2"],
  bb: 0,
  cc: {
    ta: "sold"
  }
}, _.a)]
