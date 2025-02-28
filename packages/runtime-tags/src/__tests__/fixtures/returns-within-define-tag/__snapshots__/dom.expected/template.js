export const _template_ = "<!><!><button class=once> </button><!><button class=twice> </button>";
export const _walks_ = /* dynamicTagWithVar, over(1), get, next(1), get, out(1), dynamicTagWithVar, over(1), get, next(1), get, out(1) */"D1b D l1b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_value_call$define_content2 = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    "value/2": value,
    "call/3": call
  } = _scope;
  _$.tagVarSignal(_scope, _return(_scope));
});
const _call$define_content2 = /* @__PURE__ */_$.state("call/3", (_scope, call) => _expr_value_call$define_content2(_scope));
const _value$define_content2 = /* @__PURE__ */_$.value("value/2", (_scope, value) => _expr_value_call$define_content2(_scope));
const _pattern_2$define_content = /* @__PURE__ */_$.value("_pattern_2/1", (_scope, _pattern_2) => _value$define_content2(_scope, _pattern_2.value));
const _params_3$define_content = /* @__PURE__ */_$.value("_params_3/0", (_scope, _params_3) => _pattern_2$define_content(_scope, _params_3?.[0]));
const _setup$define_content2 = _scope => {
  _call$define_content2(_scope, 2);
};
const _define_content2 = _$.registerContent("__tests__/template.marko_2_renderer", 0, 0, _setup$define_content2, () => _params_3$define_content);
const _expr_value_call$define_content = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    "value/2": value,
    "call/3": call
  } = _scope;
  _$.tagVarSignal(_scope, _return2(_scope));
});
const _call$define_content = /* @__PURE__ */_$.state("call/3", (_scope, call) => _expr_value_call$define_content(_scope));
const _value$define_content = /* @__PURE__ */_$.value("value/2", (_scope, value) => _expr_value_call$define_content(_scope));
const _pattern_$define_content = /* @__PURE__ */_$.value("_pattern_/1", (_scope, _pattern_) => _value$define_content(_scope, _pattern_.value));
const _params_2$define_content = /* @__PURE__ */_$.value("_params_2/0", (_scope, _params_2) => _pattern_$define_content(_scope, _params_2?.[0]));
const _setup$define_content = _scope => {
  _call$define_content(_scope, 1);
};
const _define_content = _$.registerContent("__tests__/template.marko_1_renderer", 0, 0, _setup$define_content, () => _params_2$define_content);
const _expr_Twice_clickTwiceCount = /* @__PURE__ */_$.intersection(14, _scope => {
  const {
    "Twice/12": Twice,
    "clickTwiceCount/13": clickTwiceCount
  } = _scope;
  _dynamicTag2(_scope, Twice, () => ({
    value: _onClickTwice2(_scope)
  }));
});
const _expr_Once_clickOnceCount = /* @__PURE__ */_$.intersection(10, _scope => {
  const {
    "Once/8": Once,
    "clickOnceCount/9": clickOnceCount
  } = _scope;
  _dynamicTag(_scope, Once, () => ({
    value: _onClickOnce2(_scope)
  }));
});
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/4", 0, () => _onClickTwice);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _onClickOnce);
const _onClickTwice_effect = _$.effect("__tests__/template.marko_0_onClickTwice", (_scope, {
  "onClickTwice/15": onClickTwice
}) => _$.on(_scope["#button/6"], "click", onClickTwice));
const _onClickTwice = _$.registerBoundSignal("__tests__/template.marko_0_onClickTwice/var", /* @__PURE__ */_$.value("onClickTwice/15", (_scope, onClickTwice) => _onClickTwice_effect(_scope)));
const _clickTwiceCount = /* @__PURE__ */_$.state("clickTwiceCount/13", (_scope, clickTwiceCount) => {
  _$.data(_scope["#text/7"], clickTwiceCount);
  _expr_Twice_clickTwiceCount(_scope);
});
const _Twice = /* @__PURE__ */_$.value("Twice/12", (_scope, Twice) => _expr_Twice_clickTwiceCount(_scope));
const _onClickOnce_effect = _$.effect("__tests__/template.marko_0_onClickOnce", (_scope, {
  "onClickOnce/11": onClickOnce
}) => _$.on(_scope["#button/2"], "click", onClickOnce));
const _onClickOnce = _$.registerBoundSignal("__tests__/template.marko_0_onClickOnce/var", /* @__PURE__ */_$.value("onClickOnce/11", (_scope, onClickOnce) => _onClickOnce_effect(_scope)));
const _clickOnceCount = /* @__PURE__ */_$.state("clickOnceCount/9", (_scope, clickOnceCount) => {
  _$.data(_scope["#text/3"], clickOnceCount);
  _expr_Once_clickOnceCount(_scope);
});
const _Once = /* @__PURE__ */_$.value("Once/8", (_scope, Once) => _expr_Once_clickOnceCount(_scope));
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
  "value/2": value,
  "call/3": call
} = _scope) {
  return function () {
    if (call) {
      _call$define_content2(_scope, call - 1), call;
      value();
    }
  };
}
function _return2(_scope, {
  "value/2": value,
  "call/3": call
} = _scope) {
  return function () {
    if (call) {
      _call$define_content(_scope, call - 1), call;
      value();
    }
  };
}
function _onClickTwice2(_scope, {
  "clickTwiceCount/13": clickTwiceCount
} = _scope) {
  return function () {
    _clickTwiceCount(_scope, clickTwiceCount + 1), clickTwiceCount;
  };
}
function _onClickOnce2(_scope, {
  "clickOnceCount/9": clickOnceCount
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