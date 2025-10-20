// size: 299 (min) 210 (brotli)
const names = ["Dylan", "Michael", "Ryan", "Luke"],
  $index__script = _._script("a0", ($scope, { 3: index }) =>
    _._on($scope[2], "click", function () {
      ($index($scope, (index = index === names.length - 1 ? -1 : index + 1)),
        $user($scope, -1 !== index && { id: index, name: names[index] }));
    }),
  ),
  $index = _._let(3, $index__script),
  $user = _._let(4, ($scope, user) => {
    ($user_id($scope, user?.id), $user_name($scope, user?.name));
  }),
  $user_id = _._const(5, ($scope, user_id) => _._text($scope[0], user_id)),
  $user_name = _._const(6, ($scope, user_name) =>
    _._text($scope[1], user_name),
  );
init();
