// template.marko
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $inputas_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $inputas_content__input_p = /*@__PURE__*/ _closure_get(6, ($scope) => $inputas_content__await_promise($scope, $scope._.f), 0, "a2", 5);
const $inputas_content__setup = ($scope) => {
	$inputas_content__input_p($scope);
	$await_content($scope);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a1", "<!><!><!>", "b%", $inputas_content__setup));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {}));
