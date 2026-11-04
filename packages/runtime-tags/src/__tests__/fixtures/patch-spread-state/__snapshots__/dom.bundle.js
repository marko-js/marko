// template.marko
const $if_content__input_attrs__OR__on__script = _script("a0", ($scope) => _attrs_script($scope, "a"));
const $if_content__input_attrs__OR__on = /*@__PURE__*/ _or_patch("a1", 1, ($scope) => {
	_attrs($scope, "a", {
		...$scope._.f,
		class: $scope._.g ? "on" : "off"
	});
	$if_content__input_attrs__OR__on__script($scope);
});
const $if_content__on = /*@__PURE__*/ _if_closure_patch("a6", 0, 0, $if_content__input_attrs__OR__on);
const $on = _let(6, $if_content__on);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.g);
}));
