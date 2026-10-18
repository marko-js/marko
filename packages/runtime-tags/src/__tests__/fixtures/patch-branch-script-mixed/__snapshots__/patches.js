// PATCH
[`a0 !a1,<p>promo</p>`, {
  $: {
    brand: "Marko"
  },
  ta: "Store",
  wg: "b",
  bb: [{
    ea1: "1 g"
  }, "a0"]
}]
;BAE

// PATCH holding BAE
{
  $: {
    brand: "Marko"
  },
  ta: "Store!",
  wg: "b",
  bb: [{
    ea1: "1 g"
  }, "a0"]
}

// PATCH holding BAE
{
  $: {
    brand: "Fresh"
  },
  ta: "Store",
  wg: "b",
  bb: [{
    ea1: "1 g"
  }, "a0"]
}

// PATCH holding BAE
{
  $: {
    brand: "Patch"
  },
  ta: "Store",
  wg: "c",
  bb: [{
    ea1: "1 g"
  }, "a0"]
}
