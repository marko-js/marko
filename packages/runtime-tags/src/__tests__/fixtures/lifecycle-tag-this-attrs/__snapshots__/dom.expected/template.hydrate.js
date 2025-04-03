// size: 153 (min) 115 (brotli)
const $x = _$.state(1, ($scope, x) => _$.data($scope[0], x));
_$.effect("a0", ($scope) =>
  _$.lifecycle($scope, 3, {
    x: 1,
    setX: function (value) {
      $x($scope, value);
    },
    onMount: function () {
      this.setX(this.x);
    },
  }),
),
  init();
