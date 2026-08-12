// template.marko
_resume_dynamic_tag();
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $tag__OR__v = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.f, () => ({
	value: $scope.g,
	valueChange: $valueChange($scope)
})));
const $v = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$tag__OR__v($scope);
});
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resume("a0", $valueChange);
