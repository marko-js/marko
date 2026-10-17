// tags/inner.marko
const $template = "<span>inner</span>";
const $setup__script = _script("b0", ($scope) => console.log("inner setup"));
const $setup = $setup__script;

// template.marko
const $catch_content__setup = ($scope) => $setup($scope.a);
const $catch_content__err_message__script = _script("a1", ($scope) => console.log("catch", $scope.d));
const $catch_content__err_message = /*@__PURE__*/ _const(3, $catch_content__err_message__script);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a4", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $catch_content__setup, $catch_content__$params);
