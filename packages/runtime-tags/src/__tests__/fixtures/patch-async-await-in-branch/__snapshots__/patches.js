// PATCH
[`a1;D ;<em> </em>`, `a2;b%;<!><!><!>`, {
  ta: "Store",
  bb: [{
    pa: "a1",
    cAa: {
      ta: "hi"
    }
  }, "a2"]
}]
"BQIA"

// PATCH holding BQIA
{
  ta: "Store!",
  bb: [{
    pa: "a1"
  }, "a2"]
}
{
  cAb: {
    cAa: {
      ta: "slow"
    }
  }
}

// PATCH holding BQIA
[`a3,<em>closed</em>`, {
  ta: "Store!",
  bb: [1, {}, "a3"]
}]
"BQIAAA"

// PATCH holding BQIAAA
{
  ta: "Open",
  bb: [{
    pa: "a1"
  }, "a2"]
}
{
  cAb: {
    cAa: {
      ta: "back"
    }
  }
}
