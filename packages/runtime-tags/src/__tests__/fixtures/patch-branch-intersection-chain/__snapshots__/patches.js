// PATCH
[`a0 a5 a6;Db%;<p>A <!></p>`, (_.a = {
  ba: "a0",
  va0: "Store!"
}, _.a)]
"BAE"

// PATCH holding BAE
[`a1 a7 a8;Db%;<p>B <!></p>`, (_.a = {
  ba: [1, {}, "a1"],
  va0: "Store!"
}, _.a)]
"BAEA"

// PATCH holding BAEA
(_.a = {
  ba: [1, {}, "a1"],
  va0: "Plaza"
}, _.a)

// PATCH holding BAEA
[`a2 a9;Db%;<p>None <!></p>`, (_.a = {
  ba: [2, {}, "a2"],
  va0: "Plaza"
}, _.a)]
"BAEAAA"

// PATCH holding BAEAAA
(_.a = {
  ba: [2, {}, "a2"],
  va0: "Plaza!"
}, _.a)
