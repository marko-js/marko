// template.marko
const $catch_content2 = _content$1("a1", "<span>inner</span>");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a6", "<span> </span>", "D ", 0, $catch_content__$params);
