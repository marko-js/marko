// size: 314 (min) 165 (brotli)
const _setup$tagSelect_content_effect = _$.effect("a0", (_scope) => {
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
    "a1",
    _$.createRendererWithOwner(
      "<option>A</option><option>B</option><option>C</option>",
      " b b ",
      _setup$tagSelect_content,
    ),
  );
_$.dynamicTagAttrs(0, _tagSelect_content), init();
