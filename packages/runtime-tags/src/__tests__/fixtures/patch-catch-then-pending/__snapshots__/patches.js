// PATCH
[`a1,<span>ok</span>`, `a2;b%;<!><!><!>`, {
  cAa: [{
    pa: "a1"
  }, "a2", "a3"],
  va0: "b",
  ka: [new Error("x"), "a2"]
}]
"BAIA"

// PATCH holding BAIA
{
  cAa: [{
    pa: "a1"
  }, "a2", "a3"],
  va0: "c"
}
{
  cAa: [{
    cAa: {}
  }, "a2", "a3"]
}
