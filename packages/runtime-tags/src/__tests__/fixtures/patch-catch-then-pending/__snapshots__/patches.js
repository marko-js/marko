// PATCH
[`a0,<span>ok</span>`, `a2;b%;<!><!><!>`, {
  cAa: [{
    pa: "a0"
  }, "a2", "a3"],
  va0: "b",
  ka: [new Error("x"), "a2"]
}]
"BAEB"

// PATCH holding BAEB
{
  cAa: [{
    pa: "a0"
  }, "a2", "a3"],
  va0: "c"
}
{
  cAa: [{
    cAa: {}
  }, "a2", "a3"]
}
