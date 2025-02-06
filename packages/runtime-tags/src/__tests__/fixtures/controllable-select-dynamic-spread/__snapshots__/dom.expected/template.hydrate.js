// size: 509 (min) 262 (brotli)
const _setup$tagSelect_content_effect = _$.effect("a1", (_scope) => {
    _$.attrsEvents(_scope, 0),
      _$.attrsEvents(_scope, 1),
      _$.attrsEvents(_scope, 2);
  }),
  _setup$tagSelect_content = (_scope) => {
    _$.attrs(_scope, 0, { value: "a" }),
      _$.attrs(_scope, 1, { value: "b" }),
      _$.attrs(_scope, 2, { value: "c" }),
      _setup$tagSelect_content_effect(_scope);
  },
  _tagSelect_content = _$.register(
    "a2",
    _$.createRendererWithOwner(
      "<option>A</option><option>B</option><option>C</option>",
      " b b ",
      _setup$tagSelect_content,
    ),
  ),
  _tagSelect_input = _$.dynamicTagAttrs(0, _tagSelect_content),
  _expr_Text_value = _$.intersection(
    2,
    (_scope) => {
      const { 2: value } = _scope;
      _tagSelect_input(_scope, () => ({
        value: value,
        valueChange: _valueChange(_scope),
      }));
    },
    () => _tagSelect_input,
  ),
  _value = _$.state(
    2,
    (_scope, value) => _$.data(_scope[1], value),
    () => _expr_Text_value,
  );
function _valueChange(_scope) {
  return function (v) {
    _value(_scope, v);
  };
}
_$.register("a0", _valueChange), init();
