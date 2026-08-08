// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $tag = /*@__PURE__*/ _let(3, ($scope) => $dynamicTag($scope, $scope.d));
const $setup__script = _script("a1", ($scope) => {
	_attr_select_value_script($scope, "b");
	_on($scope.c, "click", function() {
		$tag($scope, $scope.d === "input" ? "br" : "input");
	});
});
const $valueChange = ($scope) => function(next) {
	$tag($scope, next);
};
_resume("a0", $valueChange);
