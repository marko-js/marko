// size: 145 (min) 120 (brotli)
const _open$for_content_effect = effect("a0", (_scope, { 11: open }) =>
    on(_scope[2], "click", function () {
      _open$for_content(_scope, !open);
    }),
  ),
  _open$for_content = state(11, (_scope, open) => {
    attr(_scope[0], "hidden", !open),
      data(_scope[3], open ? "[-]" : "[+]"),
      _open$for_content_effect(_scope);
  });
init();
