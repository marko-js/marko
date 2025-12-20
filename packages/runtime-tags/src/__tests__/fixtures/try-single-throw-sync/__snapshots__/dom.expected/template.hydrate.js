// size: 123 (min) 89 (brotli)
_._enable_catch();
const $catch_content__err = ($scope, err) =>
  (($scope, err_message) => _._text($scope.a, err_message))(
    $scope,
    err?.message,
  );
_._content_resume("a0", " ", " b", 0, ($scope, $params2) =>
  $catch_content__err($scope, $params2[0]),
);
