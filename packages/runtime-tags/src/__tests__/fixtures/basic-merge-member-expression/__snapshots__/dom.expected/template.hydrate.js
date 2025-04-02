// size: 158 (min) 110 (brotli)
const _foo = _$.state(3, (_scope, foo) => {
  _$.classAttr(_scope[0], foo.class), _$.classAttr(_scope[1], foo.class);
});
_$.effect("a0", (_scope) =>
  _$.on(_scope[2], "click", function () {
    _foo(_scope, { class: "baz" });
  }),
),
  init();
