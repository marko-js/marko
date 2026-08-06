// PATCH
{
  $: {
    brand: "Marko"
  },
  ta: "Marko",
  bb: 0
}

// PATCH
[`a0 a1,<p>promo</p>`, {
  $: {
    brand: "Fresh"
  },
  ta: "Fresh",
  bb: [{
    ga1: "! brand"
  }, "a0"]
}]

// PATCH
[`a0 a1,<p>promo</p>`, {
  $: {
    brand: "Patch"
  },
  ta: "Patch",
  bb: [{
    ga1: "! brand"
  }, "a0"]
}]
