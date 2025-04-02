export const _template = "<div><!></div>";
export const _walks = /* get, next(1), replace, out(1) */" D%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _input_thing_content = /* @__PURE__ */_$.value("input_thing_content", (_scope, input_thing_content) => _dynamicTag(_scope, input_thing_content));
export const _input_thing_selected = /* @__PURE__ */_$.value("input_thing_selected", (_scope, input_thing_selected) => _$.classAttr(_scope["#div/0"], {
  "selected": input_thing_selected
}));
export const _input_thing = /* @__PURE__ */_$.value("input_thing", (_scope, input_thing) => {
  _input_thing_selected(_scope, input_thing?.selected);
  _input_thing_content(_scope, input_thing?.content);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_thing(_scope, input.thing));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);