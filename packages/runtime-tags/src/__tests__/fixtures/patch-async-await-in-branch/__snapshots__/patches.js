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
"a:DA"

// PATCH holding a:DA
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

// PATCH holding a:DA
[`a3,<em>closed</em>`, {
  ta: "Store!",
  bb: [1, {}, "a3"]
}]
"a:HA"

// PATCH holding a:HA
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
