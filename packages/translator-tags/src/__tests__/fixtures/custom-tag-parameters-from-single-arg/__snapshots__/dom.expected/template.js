export const _template_ = `${_customTag_template}<!>`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _input_renderBody_ as _customTag_input_renderBody, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./components/custom-tag.marko";
const _count$customTagBody = /* @__PURE__ */_$.value("count", (_scope, count) => _$.data(_scope["#text/0"], count));
const _params_2$customTagBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _count$customTagBody(_scope, _params_2[0]));
const _customTagBody = _$.register("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<div>Count: <!></div>", /* next(1), over(1), replace */"Db%", void 0, void 0, () => _params_2$customTagBody));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/0"]);
  _customTag_input_renderBody(_scope["#childScope/0"], _customTagBody(_scope));
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/template.marko", _template_, _walks_, _setup_);