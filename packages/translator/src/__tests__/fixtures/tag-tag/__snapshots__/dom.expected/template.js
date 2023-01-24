const MyTag = input => {};
import { data as _data, dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, conditional as _conditional, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input$tagBody = "SIGNAL NOT INITIALIZED";
const _tagBody = /* @__PURE__ */_createRenderer("Hello <!>", /* over(1), replace */"b%");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, MyTag = _scope["MyTag"]) => MyTag, _dynamicAttrsProxy("#text/0"), _scope => _dynamicTagAttrs(_scope, "#text/0", () => ({
  name: "World"
})));
const _MyTag = "SIGNAL NOT INITIALIZED";
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup);