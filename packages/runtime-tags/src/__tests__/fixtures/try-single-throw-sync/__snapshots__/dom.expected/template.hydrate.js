// size: 129 (min) 96 (brotli)
_._enable_catch();
const $catch_content__err_message = ($scope, err_message) =>
    _._text($scope.a, err_message),
  $catch_content__$params = ($scope, $params2) =>
    $catch_content__err($scope, $params2[0]),
  $catch_content__err = ($scope, err) =>
    $catch_content__err_message($scope, err?.message);
_._content_resume(`a0`, ` `, ` b`, 0, $catch_content__$params);
