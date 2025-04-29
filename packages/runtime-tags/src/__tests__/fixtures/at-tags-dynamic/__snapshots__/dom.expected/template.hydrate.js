// size: 289 (min) 125 (brotli)
_$.effect("a0", ($scope) => _$.attrsEvents($scope, 0)),
  _$.effect("a1", ($scope) => _$.attrsEvents($scope, 0)),
  _$.effect("a2", ($scope) => _$.attrsEvents($scope, 0)),
  _$.registerContent("b0", "Outside"),
  _$.localClosures(_$.registerContent("b1", " ", " "), {
    2($scope, row) {
      _$.data($scope[0], row);
    },
  }),
  _$.registerContent("b2", "bar"),
  _$.registerContent("b3", "foo"),
  init();
