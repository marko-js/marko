export const _template = "<!><!><hr><!><hr><!><!>";
export const _walks = /* replace, over(2), replace, over(2), replace, over(1) */"D%c%c%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_hoisted_el = _$.register("__tests__/template.marko_0__hoisted_el3/hoist", _$.hoist("Getter:#li/0", "LoopScopeMap:#ul/0", "LoopScopeMap:#text/2"));
const _expr_i_j$for_content = /* @__PURE__ */_$.intersection(3, _scope => {
  const {
    _: {
      i
    },
    j
  } = _scope;
  _$.attr(_scope["#li/0"], "data-index", i * 4 + j);
});
const _i$for_content = /* @__PURE__ */_$.loopClosure("i", "#ul/0", _expr_i_j$for_content);
const _j$for_content = /* @__PURE__ */_$.value("j", _expr_i_j$for_content);
const _params3$for_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => _j$for_content(_scope, _params3[0]));
const _for_content4 = /* @__PURE__ */_$.createRenderer("<li></li>", /* get */" ", 0, _params3$for_content, _scope => _i$for_content._(_scope));
const _for$for_content = /* @__PURE__ */_$.loopTo("#ul/0", _for_content4);
const _i$for_content2 = /* @__PURE__ */_$.value("i");
const _params2$for_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _i$for_content2(_scope, _params2[0]));
const _setup$for_content = _scope => {
  _for$for_content(_scope, [3, 0, 1]);
};
const _for_content3 = /* @__PURE__ */_$.createRenderer("<ul></ul>", /* get */" ", _setup$for_content, _params2$for_content);
const _get_hoisted_el2 = _$.hoist("Getter:#div/0", "LoopScopeMap:#text/1");
const _for_content2 = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const _get_hoisted_el3 = _$.hoist("Getter:#div/0", "LoopScopeMap:#text/0");
const _for_content = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const _for3 = /* @__PURE__ */_$.loopTo("#text/2", _for_content3);
const _for2 = /* @__PURE__ */_$.loopTo("#text/1", _for_content2);
const _for = /* @__PURE__ */_$.loopTo("#text/0", _for_content);
const _hoisted_el4_effect = _$.effect("__tests__/template.marko_0__hoisted_el3", ({
  _hoisted_el3
}) => {
  {
    let i = 0;
    for (const el of _hoisted_el3) {
      el().innerHTML = `All (${i++})`;
    }
  }
});
const _hoisted_el4 = /* @__PURE__ */_$.value("_hoisted_el3", _hoisted_el4_effect);
const _to = /* @__PURE__ */_$.state("to/3", (_scope, to) => _for2(_scope, [to, 0, 1]));
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => {
  {
    const first = _get_hoisted_el3(_scope)();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
  {
    const first = _get_hoisted_el2(_scope)();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
});
export function _setup(_scope) {
  _for(_scope, [5, 0, 1]);
  _to(_scope, 3);
  _for3(_scope, [3, 0, 1]);
  _hoisted_el4(_scope, _get_hoisted_el(_scope));
  _setup_effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);