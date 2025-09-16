// size: 128 (min) 111 (brotli)
const $if_content__value = _._if_closure(5, 0, 0, ($scope, value) =>
    _._text($scope[0], value),
  ),
  $value = _._let(5, $if_content__value);
(_._script("a0", ($scope) =>
  _._on($scope[1], "click", function () {
    $value($scope, 1);
  }),
),
  init());
