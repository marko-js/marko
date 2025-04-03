export const $template = _renderEffect_template;
export const $walks = /* beginChild, _renderEffect_walks, endChild */`/${_renderEffect_walks}&`;
import { $setup as _renderEffect, $input as _renderEffect_input, $template as _renderEffect_template, $walks as _renderEffect_walks } from "./tags/render-effect.marko";
export function $setup($scope) {
  _renderEffect($scope["#childScope/0"]);
  _renderEffect_input($scope["#childScope/0"], {
    value: $renderEffect
  });
}
import * as _$ from "@marko/runtime-tags/debug/dom";
function $renderEffect() {}
_$.register("__tests__/template.marko_0/renderEffect", $renderEffect);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);