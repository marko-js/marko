// PATCH
M._.a = (_, $) => ([`a0,<p>shown</p>`, `a1;D ;<li> </li>`, {
  ta: "marko",
  bb: "a0",
  lc: [{
    ta: "1"
  }, {
    ta: "2"
  }, {
    ta: "3"
  }, "a1"]
}])

// PATCH
M._.a = (_, $) => ([`a1;D ;<li> </li>`, {
  ta: "marko",
  bb: 0,
  lc: [{
    ta: "3"
  }, "a1"]
}])

// PATCH
M._.a = (_, $) => ([`a0,<p>shown</p>`, `a1;D ;<li> </li>`, {
  ta: "mark",
  bb: "a0",
  lc: [{
    ta: "3"
  }, "a1"]
}])
