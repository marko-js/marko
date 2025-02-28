export const _template_ = `<!>${_customTag_template}`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`D/${_customTag_walks}&`;
import { _setup_ as _customTag, _pattern__ as _customTag_input_thing, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./tags/custom-tag/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _thing_content2 = _$.registerContent("__tests__/template.marko_2_renderer", "Goodbye");
const _thing_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
export const _x_ = /* @__PURE__ */_$.value("x/3", (_scope, x) => {
  let _thing;
  if (x) {
    _thing = _$.attrTag({
      x: 1,
      content: _thing_content(_scope)
    });
  } else {
    _thing = _$.attrTag({
      x: 2,
      content: _thing_content2(_scope)
    });
  }
  _customTag_input_thing(_scope["#childScope/0"], _thing);
});
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => _x_(_scope, input.x));
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);