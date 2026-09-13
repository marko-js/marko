// template.marko
const $if_content__input_attrs__script = _script("a0", ($scope) => _attrs_script($scope, "a"));
const $if_content__input_attrs = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_attrs($scope, "a", $scope._.e);
	$if_content__input_attrs__script($scope);
}));
const $if_content__setup = $if_content__input_attrs;
const $if = /*@__PURE__*/ _if(0, "<a>x</a>", " ", $if_content__setup);
const $on = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.f);
}));
