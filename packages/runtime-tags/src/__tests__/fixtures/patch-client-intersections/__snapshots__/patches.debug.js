// PATCH
{
  "$global:": {
    brand: "Acme Co",
    locale: "fr"
  },
  "PatchText:#text/0": "Store!",
  "PatchAttr:#p/1 title": "fr",
  "PatchText:#text/2": "Acme Co",
  "PatchChild:#childScope/3": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-client-intersections/tags/price-card.marko_0_input_label#4_qty#5/setup": "input_label",
    "PatchMarkedWrite:input_label": "Gadget"
  },
  "PatchChild:#childScope/4": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-client-intersections/tags/promo-tag.marko_0_input_text#4_seen#5/setup": ""
  },
  "PatchChild:#childScope/5": {
    "PatchRender:packages/runtime-tags/src/__tests__/fixtures/patch-client-intersections/tags/site-footer.marko_0_input_year#3_frozen#4/setup": "input_year",
    "PatchMarkedWrite:input_year": 2027
  }
}
