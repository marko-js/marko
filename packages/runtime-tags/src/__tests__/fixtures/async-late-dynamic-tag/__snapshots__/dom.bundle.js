// template.marko
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<em> </em>", "D ");
const $inputas_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $inputas_content__input_p = /*@__PURE__*/ _closure_get(8, ($scope) => $inputas_content__await_promise($scope, $scope._.g), 0, "a1");
const $inputas_content__setup = ($scope) => {
	$inputas_content__input_p($scope);
	$await_content($scope);
};
const $inputas_content = _content("a0", "<!><!><!>", "b%", $inputas_content__setup);
_content_resume($inputas_content);
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {}));
