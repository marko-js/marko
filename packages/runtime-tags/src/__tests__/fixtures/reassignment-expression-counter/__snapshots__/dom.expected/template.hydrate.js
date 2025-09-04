// size: 242 (min) 125 (brotli)
const $count__script = _._script("a0", ($scope, { 6: count }) => {
    (_._on($scope[0], "click", function () {
      $count($scope, (count += 2));
    }),
      _._on($scope[2], "click", function () {
        $count($scope, (count *= 3));
      }),
      _._on($scope[4], "click", function () {
        $count($scope, (count **= 3));
      }));
  }),
  $count = _._let(6, ($scope, count) => {
    (_._text($scope[1], count),
      _._text($scope[3], count),
      _._text($scope[5], count),
      $count__script($scope));
  });
init();
