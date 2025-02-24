// size: 1399 (min) 451 (brotli)
const _expr_value_call$define_content2 = _$.intersection(
    2,
    (_scope) => {
      _$.tagVarSignal(_scope, _return(_scope));
    },
    () => _$.tagVarSignal,
  ),
  _call$define_content2 = _$.state(
    3,
    0,
    () => _expr_value_call$define_content2,
  ),
  _value$define_content2 = _$.value(
    2,
    0,
    () => _expr_value_call$define_content2,
  ),
  _pattern_2$define_content = _$.value(
    1,
    (_scope, _pattern_2) => _value$define_content2(_scope, _pattern_2.value),
    () => _value$define_content2,
  ),
  _params_3$define_content = _$.value(
    0,
    (_scope, _params_3) => _pattern_2$define_content(_scope, _params_3?.[0]),
    () => _pattern_2$define_content,
  ),
  _setup$define_content2 = (_scope) => {
    _call$define_content2(_scope, 2);
  };
_$.register(
  "a4",
  _$.createRendererWithOwner(
    "",
    "",
    _setup$define_content2,
    () => _params_3$define_content,
  ),
);
const _expr_value_call$define_content = _$.intersection(
    2,
    (_scope) => {
      _$.tagVarSignal(_scope, _return2(_scope));
    },
    () => _$.tagVarSignal,
  ),
  _call$define_content = _$.state(3, 0, () => _expr_value_call$define_content),
  _value$define_content = _$.value(2, 0, () => _expr_value_call$define_content),
  _pattern_$define_content = _$.value(
    1,
    (_scope, _pattern_) => _value$define_content(_scope, _pattern_.value),
    () => _value$define_content,
  ),
  _params_2$define_content = _$.value(
    0,
    (_scope, _params_2) => _pattern_$define_content(_scope, _params_2?.[0]),
    () => _pattern_$define_content,
  ),
  _setup$define_content = (_scope) => {
    _call$define_content(_scope, 1);
  };
_$.register(
  "a5",
  _$.createRendererWithOwner(
    "",
    "",
    _setup$define_content,
    () => _params_2$define_content,
  ),
);
const _expr_Twice_clickTwiceCount = _$.intersection(
    2,
    (_scope) => {
      const { 9: Twice, 10: clickTwiceCount } = _scope;
      _dynamicTag2(_scope, Twice, () => ({ value: _onClickTwice2(_scope) }));
    },
    () => _dynamicTag2,
  ),
  _expr_Once_clickOnceCount = _$.intersection(
    2,
    (_scope) => {
      const { 6: Once, 7: clickOnceCount } = _scope;
      _dynamicTag(_scope, Once, () => ({ value: _onClickOnce2(_scope) }));
    },
    () => _dynamicTag,
  ),
  _dynamicTag2 = _$.dynamicTag(3, 0, () => _onClickTwice),
  _dynamicTag = _$.dynamicTag(0, 0, () => _onClickOnce),
  _onClickTwice_effect = _$.effect("a6", (_scope, { 11: onClickTwice }) =>
    _$.on(_scope[4], "click", onClickTwice),
  ),
  _onClickTwice = _$.registerBoundSignal(
    "a7",
    _$.value(11, (_scope, onClickTwice) => _onClickTwice_effect(_scope)),
  ),
  _clickTwiceCount = _$.state(
    10,
    (_scope, clickTwiceCount) => _$.data(_scope[5], clickTwiceCount),
    () => _expr_Twice_clickTwiceCount,
  ),
  _onClickOnce_effect = _$.effect("a8", (_scope, { 8: onClickOnce }) =>
    _$.on(_scope[1], "click", onClickOnce),
  ),
  _onClickOnce = _$.registerBoundSignal(
    "a9",
    _$.value(8, (_scope, onClickOnce) => _onClickOnce_effect(_scope)),
  ),
  _clickOnceCount = _$.state(
    7,
    (_scope, clickOnceCount) => _$.data(_scope[2], clickOnceCount),
    () => _expr_Once_clickOnceCount,
  );
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
function _onClickTwice2(_scope, { 10: clickTwiceCount } = _scope) {
  return function () {
    _clickTwiceCount(_scope, clickTwiceCount + 1);
  };
}
function _onClickOnce2(_scope, { 7: clickOnceCount } = _scope) {
  return function () {
    _clickOnceCount(_scope, clickOnceCount + 1);
  };
}
_$.register("a2", _return),
  _$.register("a0", _return2),
  _$.register("a3", _onClickTwice2),
  _$.register("a1", _onClickOnce2),
  init();
