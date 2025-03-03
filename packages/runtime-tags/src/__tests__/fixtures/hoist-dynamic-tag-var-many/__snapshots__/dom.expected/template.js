export const _template_ = "<!><!><hr><!><hr><!><!>";
export const _walks_ = /* replace, over(2), replace, over(2), replace, over(1) */"D%c%c%bD";
import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_hoisted_setHtml = _$.register("__tests__/template.marko_0__hoisted_setHtml3/hoist", _$.hoist("setHtml3", "#ul/0(", "#text/2("));
const _dynamicTag$for_content3 = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml3$for_content);
const _setHtml3$for_content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const _params_3$for_content = /* @__PURE__ */_$.value("_params_3");
const _setup$for_content3 = _scope => {
  _dynamicTag$for_content3(_scope, 1 && Child);
};
const _for_content4 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$for_content3, () => _params_3$for_content);
const _for$for_content = /* @__PURE__ */_$.loopTo("#ul/0", _for_content4);
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2");
const _setup$for_content4 = _scope => {
  _for$for_content(_scope, [3, 0, 1]);
};
const _for_content3 = /* @__PURE__ */_$.createRenderer("<ul></ul>", /* get */" ", _setup$for_content4, () => _params_2$for_content);
const _get_hoisted_setHtml2 = _$.hoist("setHtml2", "#text/1(");
const _dynamicTag$for_content2 = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml2$for_content);
const _setHtml2$for_content = _$.registerBoundSignal("__tests__/template.marko_2_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const _setup$for_content2 = _scope => {
  _dynamicTag$for_content2(_scope, 1 && Child);
};
const _for_content2 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$for_content2);
const _get_hoisted_setHtml3 = _$.hoist("setHtml", "#text/0(");
const _dynamicTag$for_content = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _setHtml$for_content);
const _setHtml$for_content = _$.registerBoundSignal("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const _setup$for_content = _scope => {
  _dynamicTag$for_content(_scope, 1 && Child);
};
const _for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* dynamicTagWithVar */"D1D", _setup$for_content);
const _for3 = /* @__PURE__ */_$.loopTo("#text/2", _for_content3);
const _for2 = /* @__PURE__ */_$.loopTo("#text/1", _for_content2);
const _for = /* @__PURE__ */_$.loopTo("#text/0", _for_content);
const _hoisted_setHtml_effect = _$.effect("__tests__/template.marko_0__hoisted_setHtml3", ({
  _hoisted_setHtml3
}) => {
  {
    let i = 0;
    for (const fn of _hoisted_setHtml3) {
      fn(`All (${i++})`);
    }
  }
});
const _hoisted_setHtml = /* @__PURE__ */_$.value("_hoisted_setHtml3", (_scope, _hoisted_setHtml3) => _hoisted_setHtml_effect(_scope));
const _to = /* @__PURE__ */_$.state("to/3", (_scope, to) => _for2(_scope, [to, 0, 1]));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  _get_hoisted_setHtml3(_scope)('First Only');
  _get_hoisted_setHtml2(_scope)('First Only');
});
export function _setup_(_scope) {
  _for(_scope, [5, 0, 1]);
  _to(_scope, 3);
  _for3(_scope, [3, 0, 1]);
  _hoisted_setHtml(_scope, _get_hoisted_setHtml(_scope));
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);