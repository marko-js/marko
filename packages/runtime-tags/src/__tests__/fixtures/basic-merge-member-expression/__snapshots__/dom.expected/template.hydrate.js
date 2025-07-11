// size: 152 (min) 107 (brotli)
const $foo = _$.state(3, ($scope, foo) => {
  (_$.classAttr($scope[0], foo.class), _$.classAttr($scope[1], foo.class));
});
(_$.effect("a0", ($scope) =>
  _$.on($scope[2], "click", function () {
    $foo($scope, { class: "baz" });
  }),
),
  init());
