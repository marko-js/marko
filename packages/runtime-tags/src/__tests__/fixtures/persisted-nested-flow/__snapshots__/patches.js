// PATCH
M._.a = (_, $) => ([`a3,<em>on sale</em>`, `a2;D%b%;<li><!><!></li>`, `a0;D%b%;<section><!><!></section>`, {
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
}])

// PATCH
M._.a = (_, $) => ([`a3,<em>on sale</em>`, `a2;D%b%;<li><!><!></li>`, `a1;D ;<small> </small>`, `a0;D%b%;<section><!><!></section>`, {
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
}])

// PATCH
M._.a = (_, $) => ([`a3,<em>on sale</em>`, `a2;D%b%;<li><!><!></li>`, {
  la: [2, {
    ta: "Bread",
    bb: "a3"
  }, "a2"],
  bb: 0,
  cc: {
    ta: "sold"
  }
}])
