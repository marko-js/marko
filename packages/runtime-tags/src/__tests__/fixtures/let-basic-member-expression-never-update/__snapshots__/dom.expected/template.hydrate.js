// size: 193 (min) 150 (brotli)
const $user = _._let(3, ($scope, user) => $user_id($scope, user?.id)),
  $index__script = _._script("a0", ($scope, { 2: index }) =>
    _._on($scope[1], "click", function () {
      $index($scope, ++index);
    }),
  ),
  $index = _._let(2, ($scope, index) => {
    ($user($scope, -1 !== index && { id: index }), $index__script($scope));
  }),
  $user_id = _._const(4, ($scope, user_id) => _._text($scope[0], user_id));
init();
