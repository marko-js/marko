// B2: compiled imperative merge functions (code over data)
import { _register_update, _pair_branch, _pair_keyed, _place_text, _place_attr } from "@marko/runtime-tags/dom/update";
import { $input_product_featured } from "../product.marko";
import { $update as _priceTag_update } from "./price-tag.b2.js";

const $if_content__update = (patch, live) => {
  _place_text(patch, live, "#text/0");
};
const $for_content__update = (patch, live) => {
  _place_text(patch, live, "#text/1");
  if ("#childScope/0" in patch) _priceTag_update(patch["#childScope/0"], live["#childScope/0"]);
};
export const $update = _register_update(".spsu/product.marko#u", (patch, live) => {
  _place_text(patch, live, "#text/0");
  _place_attr(patch, live, "#a/1", "href");
  if ("input_product_featured" in patch) $input_product_featured(live, patch.input_product_featured);
  if ("input_product_sale_percent" in patch) live.input_product_sale_percent = patch.input_product_sale_percent;
  _pair_branch(patch, live, "#text/5", [$if_content__update]);
  _pair_keyed(patch, live, "#ul/6", $for_content__update, "<li> <!></li>", " D%l b");
});
