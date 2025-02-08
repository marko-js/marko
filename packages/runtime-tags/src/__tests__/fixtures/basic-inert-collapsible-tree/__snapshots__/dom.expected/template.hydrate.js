// size: 164 (min) 143 (brotli)
const _open$for_content_effect = _$.effect("a0", (_scope, { 11: open }) =>
    _$.on(_scope[2], "click", function () {
      _open$for_content(_scope, !open);
    }),
  ),
  _open$for_content = _$.state(11, (_scope, open) => {
    _$.attr(_scope[0], "hidden", !open),
      _$.data(_scope[3], open ? "[-]" : "[+]"),
      _open$for_content_effect(_scope);
  });
init();
