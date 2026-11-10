// template.marko
const $wrap_content__inner__script = _script_patch("a0 b", ($scope) => $scope.a.textContent = $scope.b);
const $wrap_content__inner = /*@__PURE__*/ _const(1, $wrap_content__inner__script);
const $wrap_content__input_prefix = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => $wrap_content__inner($scope, $scope._.e + "!"), 0, "a3", 0);
const $wrap_content = _content$1("a2", "<div></div>", " ", $wrap_content__input_prefix);
