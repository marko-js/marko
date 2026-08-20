// template.marko
const $await_content2__outer = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c));
const $await_content2__setup = $await_content2__outer;
const $await_content2__inner = ($scope, inner) => _text($scope.b, inner);
const $await_content2__$params = ($scope, $params3) => $await_content2__inner($scope, $params3[0]);
const $await_content2 = _resume("a3", /*@__PURE__*/ _await_content(0, "<em><!>:<!></em>", "D%c%", $await_content2__setup));
const $await_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $await_content__input_inner = /*@__PURE__*/ _closure_get(8, ($scope) => $await_content__await_promise($scope, $scope._._.g), ($scope) => $scope._._);
const $await_content__setup = ($scope) => {
	$await_content__input_inner($scope);
	$await_content2($scope);
};
const $await_content = _resume("a4", /*@__PURE__*/ _await_content(0, "<!><!><!>", "b%", $await_content__setup));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {}));
