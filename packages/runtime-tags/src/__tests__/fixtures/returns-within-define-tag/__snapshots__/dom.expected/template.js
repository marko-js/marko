export const _template = "<!><!><button class=once> </button><!><button class=twice> </button>";
export const _walks = /* dynamicTagWithVar, over(1), get, next(1), get, out(1), dynamicTagWithVar, over(1), get, next(1), get, out(1) */"D1b D l1b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_value_call$define_content2 = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    value,
    call
  } = _scope;
  _$.tagVarSignal(_scope, _return(_scope));
});
const _call$define_content2 = /* @__PURE__ */_$.state("call/3", _expr_value_call$define_content2);
const _value$define_content2 = /* @__PURE__ */_$.value("value", _expr_value_call$define_content2);
const _temp2$define_content = /* @__PURE__ */_$.value("_temp2", (_scope, _temp2) => _value$define_content2(_scope, _temp2.value));
const _params3$define_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => _temp2$define_content(_scope, _params3?.[0]));
const _setup$define_content2 = _scope => {
  _call$define_content2(_scope, 2);
};
const _define_content2 = _$.registerContent("__tests__/template.marko_2_renderer", 0, 0, _setup$define_content2, _params3$define_content);
const _expr_value_call$define_content = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    value,
    call
  } = _scope;
  _$.tagVarSignal(_scope, _return2(_scope));
});
const _call$define_content = /* @__PURE__ */_$.state("call/3", _expr_value_call$define_content);
const _value$define_content = /* @__PURE__ */_$.value("value", _expr_value_call$define_content);
const _temp$define_content = /* @__PURE__ */_$.value("_temp", (_scope, _temp) => _value$define_content(_scope, _temp.value));
const _params2$define_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _temp$define_content(_scope, _params2?.[0]));
const _setup$define_content = _scope => {
  _call$define_content(_scope, 1);
};
const _define_content = _$.registerContent("__tests__/template.marko_1_renderer", 0, 0, _setup$define_content, _params2$define_content);
const _expr_Twice_clickTwiceCount = /* @__PURE__ */_$.intersection(14, _scope => {
  const {
    Twice,
    clickTwiceCount
  } = _scope;
  _dynamicTag2(_scope, Twice, () => ({
    value: _onClickTwice2(_scope)
  }));
});
const _expr_Once_clickOnceCount = /* @__PURE__ */_$.intersection(10, _scope => {
  const {
    Once,
    clickOnceCount
  } = _scope;
  _dynamicTag(_scope, Once, () => ({
    value: _onClickOnce2(_scope)
  }));
});
const _dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/4", 0, () => _onClickTwice);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _onClickOnce);
const _onClickTwice_effect = _$.effect("__tests__/template.marko_0_onClickTwice", (_scope, {
  onClickTwice
}) => _$.on(_scope["#button/6"], "click", onClickTwice));
const _onClickTwice = _$.registerBoundSignal("__tests__/template.marko_0_onClickTwice/var", /* @__PURE__ */_$.value("onClickTwice", _onClickTwice_effect));
const _clickTwiceCount = /* @__PURE__ */_$.state("clickTwiceCount/13", (_scope, clickTwiceCount) => {
  _$.data(_scope["#text/7"], clickTwiceCount);
  _expr_Twice_clickTwiceCount(_scope);
});
const _Twice = /* @__PURE__ */_$.value("Twice", _expr_Twice_clickTwiceCount);
const _onClickOnce_effect = _$.effect("__tests__/template.marko_0_onClickOnce", (_scope, {
  onClickOnce
}) => _$.on(_scope["#button/2"], "click", onClickOnce));
const _onClickOnce = _$.registerBoundSignal("__tests__/template.marko_0_onClickOnce/var", /* @__PURE__ */_$.value("onClickOnce", _onClickOnce_effect));
const _clickOnceCount = /* @__PURE__ */_$.state("clickOnceCount/9", (_scope, clickOnceCount) => {
  _$.data(_scope["#text/3"], clickOnceCount);
  _expr_Once_clickOnceCount(_scope);
});
const _Once = /* @__PURE__ */_$.value("Once", _expr_Once_clickOnceCount);
export function _setup(_scope) {
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
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);