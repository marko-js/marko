// PATCH
[`a0;D ;<li> </li>`, (_.a = {
  ta: "Store",
  lb: [1, {
    ta: "Apples!"
  }, 2, {
    ta: "Bread"
  }, "a0"]
}, _.a)]
"AgE"

// PATCH holding AgE
[(_.a = {
  ta: "Store",
  lb: [1, {
    ta: "Apples!"
  }, 2, {
    ta: "Bread"
  }, 3, {
    ta: "Milk"
  }, "a0"]
}, _.a)]

// PATCH holding AgE
[(_.a = {
  ta: "Store",
  lb: [3, {
    ta: "Milk"
  }, 1, {
    ta: "Apples!"
  }, "a0"]
}, _.a)]

// PATCH holding AgE
[(_.a = {
  ta: "Store",
  lb: []
}, _.a)]

// PATCH holding AgE
[(_.a = {
  ta: "Store",
  lb: [2, {
    ta: "Rye"
  }, 3, {
    ta: "Milk"
  }, "a0"]
}, _.a)]
