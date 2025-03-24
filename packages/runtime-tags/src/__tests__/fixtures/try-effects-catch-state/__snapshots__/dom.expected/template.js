export const _template_ = "<div></div><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const _err$catch_content = /* @__PURE__ */_$.value("err", (_scope, err) => _$.data(_scope["#text/0"], err));
const _params_2$catch_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _err$catch_content(_scope, _params_2[0]));
const _catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, _params_2$catch_content);
const _clickCount$try_content_effect = _$.effect("__tests__/template.marko_1_clickCount", (_scope, {
  _: {
    clickCount
  }
}) => {
  _$.on(_scope["#button/0"], "click", function () {
    _clickCount(_scope._, clickCount + 1), clickCount;
  });
  _scope._["#div/0"].textContent = clickCount;
});
const _clickCount$try_content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], (() => {
    if (clickCount > 1) throw new Error("ERROR!");
  })());
  _clickCount$try_content_effect(_scope);
});
const _try_content = /* @__PURE__ */_$.createRenderer("<button>inc</button> -- <!>", /* get, over(2), replace */" c%", 0, 0, _scope => _clickCount$try_content(_scope));
const _try = /* @__PURE__ */_$.createTry("#text/1", _try_content);
const _clickCount_closure = /* @__PURE__ */_$.dynamicClosure(_clickCount$try_content);
const _clickCount = /* @__PURE__ */_$.state("clickCount/2", (_scope, clickCount) => _clickCount_closure(_scope));
export function _setup_(_scope) {
  _clickCount(_scope, 0);
  _try(_scope, {
    catch: _$.attrTag({
      content: _catch_content(_scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);