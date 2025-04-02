export const _template = "<!><!><!>";
export const _walks = /* replace, over(1) */"D%bD";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _template as _recurse_template, _walks as _recurse_walks } from "./recurse.marko";
_$.enableCatch();
const _placeholder_content = _$.registerContent("__tests__/tags/recurse.marko_4_renderer", "LOADING...");
const _input_level$await_content = /* @__PURE__ */_$.dynamicClosureRead("input_level", (_scope, input_level) => _input(_scope["#childScope/0"], {
  level: input_level - 1
}), _scope => _scope._._._);
const _setup$await_content = _scope => {
  _setup(_scope["#childScope/0"]);
};
const _await_content = /* @__PURE__ */_$.createRenderer(`<!>${_recurse_template}<!>`, /* beginChild, _recurse_walks, endChild */`D/${_recurse_walks}&D`, _setup$await_content, 0, _scope => _input_level$await_content(_scope));
const _await$try_content = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
const _setup$try_content = _scope => {
  _await$try_content(_scope, new Promise(setImmediate));
};
const _try_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$try_content);
const _try$if_content = /* @__PURE__ */_$.createTry("#text/1", _try_content);
const _input_level$if_content = /* @__PURE__ */_$.conditionalClosure("input_level", "#text/0", 0, (_scope, input_level) => _$.attr(_scope["#div/0"], "data-level", input_level));
const _setup$if_content = _scope => {
  _try$if_content(_scope, {
    placeholder: _$.attrTag({
      content: _placeholder_content(_scope)
    })
  });
};
const _if_content = /* @__PURE__ */_$.createRenderer("<div><!></div>", /* get, next(1), replace */" D%", _setup$if_content, 0, _scope => _input_level$if_content._(_scope));
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
const _input_level_closure = /* @__PURE__ */_$.dynamicClosure(_input_level$await_content);
export const _input_level = /* @__PURE__ */_$.value("input_level", (_scope, input_level) => {
  _if(_scope, input_level ? 0 : 1);
  _input_level$if_content(_scope);
  _input_level_closure(_scope);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_level(_scope, input.level));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/recurse.marko", _template, _walks, _setup, _input);