// PATCH
[`a0,<p>shown</p>`, `a1;D ;<li> </li>`, (_.a = {
  ta: "marko",
  bb: "a0",
  lc: [{
    ta: "1"
  }, {
    ta: "2"
  }, {
    ta: "3"
  }, "a1"]
}, _.a)]
"AwEA"

// PATCH holding AwEA
(_.a = {
  ta: "marko",
  bb: 0,
  lc: [{
    ta: "3"
  }, "a1"]
}, _.a)

// PATCH holding AwEA
(_.a = {
  ta: "mark",
  bb: "a0",
  lc: [{
    ta: "3"
  }, "a1"]
}, _.a)
