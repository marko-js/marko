export const _template_ = "<!><!><button class=once> </button><!><button class=twice> </button>";
export const _walks_ = /* replace, over(1), get, next(1), get, out(1), replace, over(1), get, next(1), get, out(1) */"D%b D l%b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_value_call$define_content2 = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    value,
    call
  } = _scope;
  _$.tagVarSignal(_scope, _return(_scope));
}, () => _$.tagVarSignal);
const _call$define_content2 = /* @__PURE__ */_$.state("call", 0, () => _expr_value_call$define_content2);
const _value$define_content2 = /* @__PURE__ */_$.value("value", 0, () => _expr_value_call$define_content2);
const _pattern_2$define_content = /* @__PURE__ */_$.value("_pattern_2", (_scope, _pattern_2) => _value$define_content2(_scope, _pattern_2.value), () => _value$define_content2);
const _params_3$define_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _pattern_2$define_content(_scope, _params_3?.[0]), () => _pattern_2$define_content);
const _setup$define_content2 = _scope => {
  _call$define_content2(_scope, 2);
};
const _define_content2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRendererWithOwner("", "", _setup$define_content2, () => _params_3$define_content));
const _expr_value_call$define_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    value,
    call
  } = _scope;
  _$.tagVarSignal(_scope, _return2(_scope));
}, () => _$.tagVarSignal);
const _call$define_content = /* @__PURE__ */_$.state("call", 0, () => _expr_value_call$define_content);
const _value$define_content = /* @__PURE__ */_$.value("value", 0, () => _expr_value_call$define_content);
const _pattern_$define_content = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => _value$define_content(_scope, _pattern_.value), () => _value$define_content);
const _params_2$define_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _pattern_$define_content(_scope, _params_2?.[0]), () => _pattern_$define_content);
const _setup$define_content = _scope => {
  _call$define_content(_scope, 1);
};
const _define_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("", "", _setup$define_content, () => _params_2$define_content));
const _Twice_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/3");
const _expr_Text_clickTwiceCount = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    clickTwiceCount
  } = _scope;
  _Twice_input(_scope, () => ({
    value: _onClickTwice2(_scope)
  }));
}, () => _Twice_input);
const _Once_input = /* @__PURE__ */_$.dynamicTagAttrs("#text/0");
const _expr_Text_clickOnceCount = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    clickOnceCount
  } = _scope;
  _Once_input(_scope, () => ({
    value: _onClickOnce2(_scope)
  }));
}, () => _Once_input);
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/3", _scope => _$.setTagVar(_scope, "#text/3!", _onClickTwice), () => _expr_Text_clickTwiceCount);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _scope => _$.setTagVar(_scope, "#text/0!", _onClickOnce), () => _expr_Text_clickOnceCount);
const _onClickTwice_effect = _$.effect("__tests__/template.marko_0_onClickTwice", (_scope, {
  onClickTwice
}) => _$.on(_scope["#button/4"], "click", onClickTwice));
const _onClickTwice = _$.registerBoundSignal("__tests__/template.marko_0_onClickTwice/var", /* @__PURE__ */_$.value("onClickTwice", (_scope, onClickTwice) => _onClickTwice_effect(_scope)));
const _clickTwiceCount = /* @__PURE__ */_$.state("clickTwiceCount", (_scope, clickTwiceCount) => _$.data(_scope["#text/5"], clickTwiceCount), () => _expr_Text_clickTwiceCount);
const _Twice = /* @__PURE__ */_$.value("Twice", (_scope, Twice) => _dynamicTag2(_scope, Twice), () => _dynamicTag2);
const _onClickOnce_effect = _$.effect("__tests__/template.marko_0_onClickOnce", (_scope, {
  onClickOnce
}) => _$.on(_scope["#button/1"], "click", onClickOnce));
const _onClickOnce = _$.registerBoundSignal("__tests__/template.marko_0_onClickOnce/var", /* @__PURE__ */_$.value("onClickOnce", (_scope, onClickOnce) => _onClickOnce_effect(_scope)));
const _clickOnceCount = /* @__PURE__ */_$.state("clickOnceCount", (_scope, clickOnceCount) => _$.data(_scope["#text/2"], clickOnceCount), () => _expr_Text_clickOnceCount);
const _Once = /* @__PURE__ */_$.value("Once", (_scope, Once) => _dynamicTag(_scope, Once), () => _dynamicTag);
export function _setup_(_scope) {
  _Once(_scope, {
    content: _define_content(_scope)
  });
  _clickOnceCount(_scope, 0);
  _Twice(_scope, {
    content: _define_content2(_scope)
  });
  _clickTwiceCount(_scope, 0);
}
function _return(_scope, {
  value,
  call
} = _scope) {
  return function () {
    if (call) {
      _call$define_content2(_scope, call - 1), call;
      value();
    }
  };
}
function _return2(_scope, {
  value,
  call
} = _scope) {
  return function () {
    if (call) {
      _call$define_content(_scope, call - 1), call;
      debugger;
      value();
    }
  };
}
function _onClickTwice2(_scope, {
  clickTwiceCount
} = _scope) {
  return function () {
    _clickTwiceCount(_scope, clickTwiceCount + 1), clickTwiceCount;
  };
}
function _onClickOnce2(_scope, {
  clickOnceCount
} = _scope) {
  return function () {
    _clickOnceCount(_scope, clickOnceCount + 1), clickOnceCount;
  };
}
_$.register("__tests__/template.marko_2/_return", _return);
_$.register("__tests__/template.marko_1/_return", _return2);
_$.register("__tests__/template.marko_0/onClickTwice", _onClickTwice2);
_$.register("__tests__/template.marko_0/onClickOnce", _onClickOnce2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);