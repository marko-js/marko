// PATCH
`a1,<p>promo</p>`
{
  $: {
    brand: "Marko"
  },
  ta: "Store",
  bb: [{
    e: "a0"
  }, "a1"],
  xg: "b"
}
;BAE

// PATCH holding BAE
{
  $: {
    brand: "Marko"
  },
  ta: "Store!",
  bb: [{
    e: "a0"
  }, "a1"],
  xg: "b"
}

// PATCH holding BAE
{
  $: {
    brand: "Fresh"
  },
  ta: "Store",
  bb: [{
    e: "a0"
  }, "a1"],
  xg: "b"
}

// PATCH holding BAE
{
  $: {
    brand: "Patch"
  },
  ta: "Store",
  bb: [{
    e: "a0"
  }, "a1"],
  xg: "c"
}
