// tags/custom-tag.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $input_content__OR__input_name__OR__x = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.f, ($_) => ({
	count: $scope.h,
	name: $scope.g
})), 2);
const $x = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_content__OR__input_name__OR__x($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.h + 1);
}));

// template.marko
const $customtag_content__$params = ($scope, $params2) => {
	_text($scope.b, $params2[0].count);
	_text($scope.a, $params2[0].name);
};
const $customtag_content = _content("a0", "<div>Count (<!>): <!></div>", "Db%c%", 0, $customtag_content__$params);
