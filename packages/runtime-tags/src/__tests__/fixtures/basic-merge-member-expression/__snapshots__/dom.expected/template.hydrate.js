// size: 163 (min) 122 (brotli)
const $foo = _._let(3, ($scope, foo) => {
  (_._attr_class($scope[0], foo.class),
    _._attr_class($scope[1], foo.class.class));
});
(_._script("a0", ($scope) =>
  _._on($scope[2], "click", function () {
    $foo($scope, { class: "baz" });
  }),
),
  init());
