// size: 491 (min) 242 (brotli)
const _setup$tagSelect_content_effect = _$.effect("a2", (_scope) => {
    _$.attrsEvents(_scope, 0),
      _$.attrsEvents(_scope, 1),
      _$.attrsEvents(_scope, 2);
  }),
  _tagSelect_content = _$.registerContent(
    "a1",
    "<option>A</option><option>B</option><option>C</option>",
    " b b ",
    (_scope) => {
      _$.attrs(_scope, 0, { value: "a" }),
        _$.attrs(_scope, 1, { value: "b" }),
        _$.attrs(_scope, 2, { value: "c" }),
        _setup$tagSelect_content_effect(_scope);
    },
  ),
  _expr_value_tag = _$.intersection(4, (_scope) => {
    const { 2: value, 3: tag } = _scope;
    _dynamicTag(_scope, tag ? "select" : {}, () => ({
      value: value,
      valueChange: _valueChange(_scope),
    }));
  }),
  _dynamicTag = _$.dynamicTag(0, _tagSelect_content),
  _value = _$.state(2, (_scope, value) => {
    _$.data(_scope[1], value), _expr_value_tag(_scope);
  });
function _valueChange(_scope) {
  return function (v) {
    _value(_scope, v);
  };
}
_$.register("a0", _valueChange), init();
