export const $template = _renderEffect_template;
export const $walks = /* <render-effect> */`/${_renderEffect_walks}&`;
import { $setup as _renderEffect, $input as _renderEffect_input, $template as _renderEffect_template, $walks as _renderEffect_walks } from "./tags/render-effect.marko";
export function $setup($scope) {
  _renderEffect($scope["#childScope/0"]);
  _renderEffect_input($scope["#childScope/0"], {
    value: function () {}
  });
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);