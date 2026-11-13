// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $await_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 9, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a5", 0);
const $await_content__setup = $await_content__input_label;
const $await_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<b><!><!></b>", "D%b%", $await_content__setup);
const $Body_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $Body_content__input_p = /*@__PURE__*/ _closure_get_patch("a3", 8, ($scope) => $Body_content__await_promise($scope, $scope._.d), 0, "a4", 0);
const $Body_content__setup = ($scope) => {
	$Body_content__input_p($scope);
	$await_content($scope);
};
const $Body_content = _content$1("a2", "<!><!><!>", "b%", $Body_content__setup);
