// PATCH
[`a1;D ;<li> </li>`, `a0;D ;<aside> </aside>`, (_.a = {
  la: [3, {
    ta: "Milk"
  }, 1, {
    ta: "Apples!"
  }, 2, {
    ta: "Bread!"
  }, "a1"],
  bb: [{
    ta: "Big Sale"
  }, "a0"],
  tc: "hello"
}, _.a)]
"AwEA"

// PATCH holding AwEA
[(_.a = {
  la: [2, {
    ta: "Bread!"
  }, "a1"],
  bb: 0,
  tc: "bye"
}, _.a)]

// PATCH holding AwEA
[(_.a = {
  la: [2, {
    ta: "Bread!"
  }, 4, {
    ta: "Eggs"
  }, "a1"],
  bb: [{
    ta: "Back"
  }, "a0"],
  tc: "again"
}, _.a)]
