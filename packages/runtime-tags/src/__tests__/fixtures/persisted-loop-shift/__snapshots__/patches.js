// PATCH
M._.a = (_, $) => ([`a1;D ;<li> </li>`, `a0;D ;<aside> </aside>`, {
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
}])

// PATCH
M._.a = (_, $) => ([`a1;D ;<li> </li>`, {
  la: [2, {
    ta: "Bread!"
  }, "a1"],
  bb: 0,
  tc: "bye"
}])

// PATCH
M._.a = (_, $) => ([`a1;D ;<li> </li>`, `a0;D ;<aside> </aside>`, {
  la: [2, {
    ta: "Bread!"
  }, 4, {
    ta: "Eggs"
  }, "a1"],
  bb: [{
    ta: "Back"
  }, "a0"],
  tc: "again"
}])
