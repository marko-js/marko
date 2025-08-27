// size: 296 (min) 128 (brotli)
(_$.effect("a0", ($scope) => _$.attrsEvents($scope, 0)),
  _$.effect("a1", ($scope) => _$.attrsEvents($scope, 0)),
  _$.effect("a2", ($scope) => _$.attrsEvents($scope, 0)),
  _$.registerContent("b0", "Outside", "b"),
  _$.localClosures(_$.registerContent("b1", " ", " b"), {
    2($scope, row) {
      _$.data($scope[0], row);
    },
  }),
  _$.registerContent("b2", "bar", "b"),
  _$.registerContent("b3", "foo", "b"),
  init());
