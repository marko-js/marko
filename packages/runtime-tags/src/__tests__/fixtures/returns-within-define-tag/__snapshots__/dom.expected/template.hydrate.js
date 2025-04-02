// size: 1230 (min) 429 (brotli)
const _expr_value_call$define_content2 = _$.intersection(4, (_scope) => {
    const { 2: value, 3: call } = _scope;
    _$.tagVarSignal(_scope, _return(_scope));
  }),
  _call$define_content2 = _$.state(3, _expr_value_call$define_content2),
  _value$define_content2 = _$.value(2, _expr_value_call$define_content2),
  _temp2$define_content = _$.value(1, (_scope, _temp2) =>
    _value$define_content2(_scope, _temp2.value),
  ),
  _params3$define_content = _$.value(0, (_scope, _params3) =>
    _temp2$define_content(_scope, _params3?.[0]),
  );
_$.registerContent(
  "a4",
  0,
  0,
  (_scope) => {
    _call$define_content2(_scope, 2);
  },
  _params3$define_content,
);
const _expr_value_call$define_content = _$.intersection(4, (_scope) => {
    const { 2: value, 3: call } = _scope;
    _$.tagVarSignal(_scope, _return2(_scope));
  }),
  _call$define_content = _$.state(3, _expr_value_call$define_content),
  _value$define_content = _$.value(2, _expr_value_call$define_content),
  _temp$define_content = _$.value(1, (_scope, _temp) =>
    _value$define_content(_scope, _temp.value),
  ),
  _params2$define_content = _$.value(0, (_scope, _params2) =>
    _temp$define_content(_scope, _params2?.[0]),
  );
_$.registerContent(
  "a5",
  0,
  0,
  (_scope) => {
    _call$define_content(_scope, 1);
  },
  _params2$define_content,
);
const _expr_Twice_clickTwiceCount = _$.intersection(14, (_scope) => {
    const { 12: Twice, 13: clickTwiceCount } = _scope;
    _dynamicTag2(_scope, Twice, () => ({ value: _onClickTwice2(_scope) }));
  }),
  _expr_Once_clickOnceCount = _$.intersection(10, (_scope) => {
    const { 8: Once, 9: clickOnceCount } = _scope;
    _dynamicTag(_scope, Once, () => ({ value: _onClickOnce2(_scope) }));
  }),
  _dynamicTag2 = _$.dynamicTag(4, 0, () => _onClickTwice),
  _dynamicTag = _$.dynamicTag(0, 0, () => _onClickOnce),
  _onClickTwice_effect = _$.effect("a6", (_scope, { 15: onClickTwice }) =>
    _$.on(_scope[6], "click", onClickTwice),
  ),
  _onClickTwice = _$.registerBoundSignal(
    "a7",
    _$.value(15, _onClickTwice_effect),
  ),
  _clickTwiceCount = _$.state(13, (_scope, clickTwiceCount) => {
    _$.data(_scope[7], clickTwiceCount), _expr_Twice_clickTwiceCount(_scope);
  }),
  _onClickOnce_effect = _$.effect("a8", (_scope, { 11: onClickOnce }) =>
    _$.on(_scope[2], "click", onClickOnce),
  ),
  _onClickOnce = _$.registerBoundSignal(
    "a9",
    _$.value(11, _onClickOnce_effect),
  ),
  _clickOnceCount = _$.state(9, (_scope, clickOnceCount) => {
    _$.data(_scope[3], clickOnceCount), _expr_Once_clickOnceCount(_scope);
  });
function _return(_scope, { 2: value, 3: call } = _scope) {
  return function () {
    call && (_call$define_content2(_scope, call - 1), value());
  };
}
function _return2(_scope, { 2: value, 3: call } = _scope) {
  return function () {
    call && (_call$define_content(_scope, call - 1), value());
  };
}
function _onClickTwice2(_scope, { 13: clickTwiceCount } = _scope) {
  return function () {
    _clickTwiceCount(_scope, clickTwiceCount + 1);
  };
}
function _onClickOnce2(_scope, { 9: clickOnceCount } = _scope) {
  return function () {
    _clickOnceCount(_scope, clickOnceCount + 1);
  };
}
_$.register("a2", _return),
  _$.register("a0", _return2),
  _$.register("a3", _onClickTwice2),
  _$.register("a1", _onClickOnce2),
  init();
