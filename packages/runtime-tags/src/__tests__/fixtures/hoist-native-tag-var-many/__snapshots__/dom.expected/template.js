export const _template_ = "<!><!><hr><!><hr><!><!>";
export const _walks_ = /* replace, over(2), replace, over(2), replace, over(1) */"D%c%c%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _hoist_el = _$.register("__tests__/template.marko_0/_hoisted_el", _$.hoist("#div/0>", "#text/0("));
const _hoist_el2 = _$.register("__tests__/template.marko_0/_hoisted_el2", _$.hoist("#div/0>", "#text/1("));
const _hoist_el3 = _$.register("__tests__/template.marko_0/_hoisted_el3", _$.hoist("#li/0>", "#ul/0(", "#text/2("));
const _expr_i_j$for_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      i
    },
    j
  } = _scope;
  _$.attr(_scope["#li/0"], "data-index", i * 4 + j);
});
const _i$for_content = /* @__PURE__ */_$.loopClosure("i", "#ul/0", 0, () => _expr_i_j$for_content);
const _j$for_content = /* @__PURE__ */_$.value("j", 0, () => _expr_i_j$for_content);
const _params_3$for_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _j$for_content(_scope, _params_3[0]), () => _j$for_content);
const _setup$for_content = _scope => {
  _i$for_content._(_scope);
};
const _for_content4 = /* @__PURE__ */_$.createRenderer("<li></li>", /* get */" ", _setup$for_content, () => _params_3$for_content);
const _for$for_content = /* @__PURE__ */_$.loopTo("#ul/0", _for_content4);
const _i$for_content2 = /* @__PURE__ */_$.value("i");
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _i$for_content2(_scope, _params_2[0]));
const _setup$for_content2 = _scope => {
  _for$for_content(_scope, [3, 0, 1]);
};
const _for_content3 = /* @__PURE__ */_$.createRenderer("<ul></ul>", /* get */" ", _setup$for_content2, () => _params_2$for_content);
const _for_content2 = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const _for_content = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const _for3 = /* @__PURE__ */_$.loopTo("#text/2", _for_content3);
const _for2 = /* @__PURE__ */_$.loopTo("#text/1", _for_content2);
const _for = /* @__PURE__ */_$.loopTo("#text/0", _for_content);
const _hoisted_el3_effect = _$.effect("__tests__/template.marko_0__hoisted_el3", ({
  _hoisted_el3
}) => {
  {
    let i = 0;
    for (const el of _hoisted_el3) {
      el().innerHTML = `All (${i++})`;
    }
  }
});
const _hoisted_el3 = /* @__PURE__ */_$.value("_hoisted_el3", (_scope, _hoisted_el3) => _hoisted_el3_effect(_scope));
const _hoisted_el2_effect = _$.effect("__tests__/template.marko_0__hoisted_el2", ({
  _hoisted_el2
}) => {
  {
    const first = _hoisted_el2();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
});
const _hoisted_el2 = /* @__PURE__ */_$.value("_hoisted_el2", (_scope, _hoisted_el2) => _hoisted_el2_effect(_scope));
const _to = /* @__PURE__ */_$.state("to", (_scope, to) => _for2(_scope, [to, 0, 1]));
const _hoisted_el_effect = _$.effect("__tests__/template.marko_0__hoisted_el", ({
  _hoisted_el
}) => {
  {
    const first = _hoisted_el();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
});
const _hoisted_el = /* @__PURE__ */_$.value("_hoisted_el", (_scope, _hoisted_el) => _hoisted_el_effect(_scope));
export function _setup_(_scope) {
  _hoisted_el(_scope, _hoist_el(_scope));
  _for(_scope, [5, 0, 1]);
  _to(_scope, 3);
  _hoisted_el2(_scope, _hoist_el2(_scope));
  _hoisted_el3(_scope, _hoist_el3(_scope));
  _for3(_scope, [3, 0, 1]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);