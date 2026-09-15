// PATCH
[`b,<i>one</i>`, {
  fa: ["b", {
    a: "b"
  }, 0, "a0"],
  tc: "b!"
}]
"b:AQ"

// PATCH holding b:AQ
[`c,<b>two</b>`, {
  fa: ["c", {
    a: "c"
  }, 0, "a0"],
  tc: "c?"
}]
"b:AQ,c:AQ"
