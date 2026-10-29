// tags/outer.marko
const $value = /*@__PURE__*/ _let(5, ($scope) => $value_content($scope, $scope.f?.content));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $value_content = /*@__PURE__*/ _const(6, ($scope) => $dynamicTag($scope, $scope.g));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, {});
}));

// template.marko
const $Body_content__input_label = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.e), 0, "a2");
const $Body_content = _content("a1", "<em> </em>", "D ", $Body_content__input_label);
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$scope.i.make(0);
}));
const $api = ($scope) => function(i) {
	return {
		content: $scope.h,
		i
	};
};
_resumed.a0 = $api;
