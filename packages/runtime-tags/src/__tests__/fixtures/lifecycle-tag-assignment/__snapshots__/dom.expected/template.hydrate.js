// size: 255 (min) 171 (brotli)
const $x__script = _._script("a0", ($scope) => {
    (_._lifecycle($scope, 5, {
      onMount: function () {
        this.cur = $scope[3];
      },
      onUpdate: function () {
        ($prev($scope, this.cur), (this.cur = $scope[3]));
      },
    }),
      _._on($scope[2], "click", function () {
        $x($scope, $scope[3] + 1);
      }));
  }),
  $x = _._let(3, ($scope) => {
    (_._text($scope[0], $scope[3]), $x__script($scope));
  }),
  $prev = _._let(4, ($scope) => _._text($scope[1], $scope[4]));
init();
