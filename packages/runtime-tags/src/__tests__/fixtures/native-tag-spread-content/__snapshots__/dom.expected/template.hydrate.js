// size: 229 (min) 114 (brotli)
(_$.registerContent("a0", "Custom content"),
  _$.effect("a1", ($scope) => _$.attrsEvents($scope, 5)),
  _$.effect("a2", ($scope) => {
    (_$.attrsEvents($scope, 0),
      _$.attrsEvents($scope, 1),
      _$.attrsEvents($scope, 2),
      _$.attrsEvents($scope, 3),
      _$.attrsEvents($scope, 4));
  }),
  _$.registerContent("b0", "Hello"),
  init());
