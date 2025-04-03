// size: 103 (min) 71 (brotli)
_$.effect("a0", ($scope) => _$.attrsEvents($scope, 1)),
  _$.effect("a1", ($scope) => {
    _$.attrsEvents($scope, 0), _$.attrsEvents($scope, 2);
  }),
  init();
