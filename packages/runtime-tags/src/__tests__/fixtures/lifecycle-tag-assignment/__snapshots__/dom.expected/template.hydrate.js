// size: 256 (min) 180 (brotli)
const $x__script = _._script("a0", ($scope, { 3: x }) => {
    (_._lifecycle($scope, 5, {
      onMount: function () {
        this.cur = x;
      },
      onUpdate: function () {
        ($prev($scope, this.cur), (this.cur = x));
      },
    }),
      _._on($scope[2], "click", function () {
        $x($scope, ++x);
      }));
  }),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[0], x), $x__script($scope));
  }),
  $prev = _._let(4, ($scope, prev) => _._text($scope[1], prev));
init();
