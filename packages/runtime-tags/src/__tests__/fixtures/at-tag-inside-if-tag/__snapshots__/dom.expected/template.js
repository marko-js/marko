export const _template = `<!>${_customTag_template}`;
export const _walks = /* beginChild, _customTag_walks, endChild */`D/${_customTag_walks}&`;
import { _setup as _customTag, _thing2 as _customTag_input_thing, _template as _customTag_template, _walks as _customTag_walks } from "./tags/custom-tag/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _thing_content2 = _$.registerContent("__tests__/template.marko_2_renderer", "Goodbye");
const _thing_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
export const _x = /* @__PURE__ */_$.value("x", (_scope, x) => {
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
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _x(_scope, input.x));
export function _setup(_scope) {
  _customTag(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);