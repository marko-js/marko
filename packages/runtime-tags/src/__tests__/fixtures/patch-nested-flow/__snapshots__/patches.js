// PATCH
[`a0,<em>on sale</em>`, `a3;D%b%;<li><!><!></li>`, `a1;D%b%;<section><!><!></section>`, {
  la: [3, {
    ta: "Milk",
    bb: "a0"
  }, 1, {
    ta: "Apples",
    bb: 0
  }, 2, {
    ta: "Bread",
    bb: 0
  }, "a3"],
  bb: [{
    ta: "2 deals",
    bb: 0
  }, "a1"],
  cc: {
    ta: "hot"
  }
}]
;DRY

// PATCH holding DRY
[`a2;D ;<small> </small>`, {
  la: [3, {
    ta: "Milk",
    bb: 0
  }, 2, {
    ta: "Bread",
    bb: "a0"
  }, "a3"],
  bb: [{
    ta: "1 deal",
    bb: [{
      ta: "ends soon"
    }, "a2"]
  }, "a1"],
  cc: {
    ta: "hot"
  }
}]
;DR4

// PATCH holding DR4
{
  la: [2, {
    ta: "Bread",
    bb: "a0"
  }, "a3"],
  bb: 0,
  cc: {
    ta: "sold"
  }
}
