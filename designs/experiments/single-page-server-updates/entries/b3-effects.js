// B3: per-section registered fns, server-driven via effect strings
import { _section_update, _place_text, _place_attr, _branch_swap } from "@marko/runtime-tags/dom/update";
import { $input_product_featured } from "../product.marko";
import "./price-tag.b3.js";

_section_update(".spsu/product.marko#u", 0, (patch, live) => {
  _place_text(patch, live, "#text/0");
  _place_attr(patch, live, "#a/1", "href");
  if ("input_product_featured" in patch) $input_product_featured(live, patch.input_product_featured);
  if ("input_product_sale_percent" in patch) live.input_product_sale_percent = patch.input_product_sale_percent;
  _branch_swap(patch, live, "#text/5");
});
_section_update(".spsu/product.marko#u/1", ["#text/5"], (patch, live) => {
  _place_text(patch, live, "#text/0");
});
_section_update(".spsu/product.marko#u/2", ["#ul/6", "#LoopKey", "<li> <!></li>", " D%l b"], (patch, live) => {
  _place_text(patch, live, "#text/1");
});
