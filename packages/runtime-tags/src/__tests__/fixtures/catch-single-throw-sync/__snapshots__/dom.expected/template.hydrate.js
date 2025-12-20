// size: 123 (min) 89 (brotli)
_._enable_catch();
const $catch_content__error = ($scope, error) =>
  (($scope, error_message) => _._text($scope.a, error_message))(
    $scope,
    error?.message,
  );
_._content_resume("a0", " ", " b", 0, ($scope, $params2) =>
  $catch_content__error($scope, $params2[0]),
);
