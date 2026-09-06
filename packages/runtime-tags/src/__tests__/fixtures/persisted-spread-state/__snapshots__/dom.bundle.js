// template.marko
const $if_content__input_attrs__OR__on__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $if_content__input_attrs__OR__on = /*@__PURE__*/ _fill_join_if("a0", 5, /*@__PURE__*/ _init_join("a4", /*@__PURE__*/ _or(1, ($scope) => {
	_attrs($scope, "a", {
		...$scope._.f,
		class: $scope._.g ? "on" : "off"
	});
	$if_content__input_attrs__OR__on__script($scope);
})), 0, 0);
const $if_content__on = /*@__PURE__*/ _init_if_closure("a5", 0, 0, $if_content__input_attrs__OR__on);
const $on = /*@__PURE__*/ _let(6, $if_content__on);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.g);
}));
