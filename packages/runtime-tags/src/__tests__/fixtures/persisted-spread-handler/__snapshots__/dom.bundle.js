// template.marko
const $if_content__input_attrs__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $onClick = ($scope) => function() {
	$count($scope._, +$scope._.g + 1);
};
_resume("a0", $onClick);
