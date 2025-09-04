// size: 151 (min) 136 (brotli)
const $x = _._let(1, ($scope, x) => _._text($scope[0], x));
(_._script("a0", ($scope) =>
  _._lifecycle($scope, 2, {
    x: 1,
    setX: function (value) {
      $x($scope, value);
    },
    onMount: function () {
      this.setX(this.x);
    },
  }),
),
  init());
