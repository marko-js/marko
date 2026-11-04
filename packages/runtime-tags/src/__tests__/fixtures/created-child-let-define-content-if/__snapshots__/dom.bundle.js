// tags/outer.marko
const $value = /*@__PURE__*/ _let(5, ($scope) => $value_content($scope, $scope.f?.content));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $value_content = /*@__PURE__*/ _const(6, ($scope) => $dynamicTag($scope, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, {});
}));

// template.marko
const $if_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a0");
const $Body_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__input_label);
const $Body_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => $Body_content__if($scope, $scope._.d !== "x" ? 0 : 1), 0, "a2");
const $Body_content = _content("a1", "<!><!><!>", "b%", $Body_content__input_label);
