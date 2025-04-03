// size: 261 (min) 153 (brotli)
const $prev = _$.state(4, ($scope, prev) => _$.data($scope[1], prev)),
  $x_effect = _$.effect("a0", ($scope, { 3: x }) => {
    _$.lifecycle($scope, 4, {
      onMount: function () {
        this.cur = x;
      },
      onUpdate: function () {
        $prev($scope, this.cur), (this.cur = x);
      },
    }),
      _$.on($scope[2], "click", function () {
        $x($scope, x + 1);
      });
  }),
  $x = _$.state(3, ($scope, x) => {
    _$.data($scope[0], x), $x_effect($scope);
  });
init();
