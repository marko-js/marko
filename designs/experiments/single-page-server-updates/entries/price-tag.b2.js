import { _register_update, _place_text } from "@marko/runtime-tags/dom/update";
export const $update = _register_update(".spsu/tags/price-tag.marko#u", (patch, live) => {
  _place_text(patch, live, "#text/0");
});
