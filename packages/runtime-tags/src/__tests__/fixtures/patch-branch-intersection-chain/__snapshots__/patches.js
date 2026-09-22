// PATCH
[`a0 a5 a6;Db%;<p>A <!></p>`, {
  ba: "a0",
  va0: "Store!"
}]
"BAE"

// PATCH holding BAE
[`a1 a7 a8;Db%;<p>B <!></p>`, {
  ba: [1, {}, "a1"],
  va0: "Store!"
}]
"BAEA"

// PATCH holding BAEA
{
  ba: [1, {}, "a1"],
  va0: "Plaza"
}

// PATCH holding BAEA
[`a2 a9;Db%;<p>None <!></p>`, {
  ba: [2, {}, "a2"],
  va0: "Plaza"
}]
"BAEAAA"

// PATCH holding BAEAAA
{
  ba: [2, {}, "a2"],
  va0: "Plaza!"
}
