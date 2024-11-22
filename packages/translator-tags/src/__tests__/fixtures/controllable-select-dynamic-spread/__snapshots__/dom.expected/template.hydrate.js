// size: 312 (min) 156 (brotli)
const _setup$tagSelectBody_effect = _$.effect("b", (_scope) => {
    _$.attrsEvents(_scope, 0),
      _$.attrsEvents(_scope, 1),
      _$.attrsEvents(_scope, 2);
  }),
  _setup$tagSelectBody = (_scope) => {
    _$.attrs(_scope, 0, { value: "a" }),
      _$.attrs(_scope, 1, { value: "b" }),
      _$.attrs(_scope, 2, { value: "c" }),
      _setup$tagSelectBody_effect(_scope);
  },
  _tagSelectBody = _$.register(
    "c",
    _$.createRendererWithOwner(
      "<option>A</option><option>B</option><option>C</option>",
      " b b ",
      _setup$tagSelectBody,
    ),
  );
_$.dynamicTagAttrs(0, _tagSelectBody), init();
