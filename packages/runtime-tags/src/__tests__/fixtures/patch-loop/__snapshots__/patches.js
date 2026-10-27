// PATCH
[`a0;D ;<li> </li>`, {
  ta: "Store",
  lb: [1, {
    ta: "Apples!"
  }, 2, {
    ta: "Bread"
  }, "a0"]
}]
;BAE

// PATCH holding BAE
{
  ta: "Store",
  lb: [1, {
    ta: "Apples!"
  }, 2, {
    ta: "Bread"
  }, 3, {
    ta: "Milk"
  }, "a0"]
}

// PATCH holding BAE
{
  ta: "Store",
  lb: [3, {
    ta: "Milk"
  }, 1, {
    ta: "Apples!"
  }, "a0"]
}

// PATCH holding BAE
{
  ta: "Store",
  lb: []
}

// PATCH holding BAE
{
  ta: "Store",
  lb: [2, {
    ta: "Rye"
  }, 3, {
    ta: "Milk"
  }, "a0"]
}
