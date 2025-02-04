// size: 378 (min) 187 (brotli)
const _itemContent_input = _$.dynamicTagAttrs(0),
  _dynamicTagName$for_content = _$.conditional(
    0,
    (_scope) => _itemContent_input(_scope, () => ({})),
    () => _itemContent_input,
  ),
  _item_content$for_content = _$.value(
    3,
    (_scope, item_content) => _dynamicTagName$for_content(_scope, item_content),
    () => _dynamicTagName$for_content,
  ),
  _item$for_content = _$.value(
    2,
    (_scope, item) => _item_content$for_content(_scope, item?.content),
    () => _item_content$for_content,
  ),
  _params_2$for_content = _$.value(
    1,
    (_scope, _params_2) => _item$for_content(_scope, _params_2[0]),
    () => _item$for_content,
  );
_$.register(
  "a0",
  _$.createRenderer("<!><!><!>", "D%D", void 0, () => _params_2$for_content),
),
  _$.register("b0", _$.createRendererWithOwner("Again", "")),
  _$.register("b1", _$.createRendererWithOwner("Hello", ""));
