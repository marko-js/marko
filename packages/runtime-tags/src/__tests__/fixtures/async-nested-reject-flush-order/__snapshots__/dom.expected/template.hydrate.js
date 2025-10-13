// size: 188 (min) 134 (brotli)
_._enable_catch();
const $catch_content__err_message = _._const(3, ($scope, err_message) =>
    _._text($scope[0], err_message),
  ),
  $catch_content__$params = _._const(1, ($scope, $params2) =>
    $catch_content__err($scope, $params2[0]),
  ),
  $catch_content__err = _._const(2, ($scope, err) =>
    $catch_content__err_message($scope, err?.message),
  );
_._content_resume(
  "a0",
  "<div>Error: <!></div>",
  "Db%l",
  0,
  $catch_content__$params,
);
