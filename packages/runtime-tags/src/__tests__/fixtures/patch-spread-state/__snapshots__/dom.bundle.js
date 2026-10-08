// template.marko
const $if_content__input_attrs__OR__on__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $if_content__input_attrs__OR__on = _fill_join_if("a3", 5, /*@__PURE__*/ _shell_join("a6", /*@__PURE__*/ _or(1, ($scope) => {
	_attrs($scope, "a", {
		...$scope._.f,
		class: $scope._.g ? "on" : "off"
	});
	$if_content__input_attrs__OR__on__script($scope);
})), 0, 0, 0);
const $if_content__on = _shell_if_closure("a7", 0, 0, $if_content__input_attrs__OR__on);
const $on = /*@__PURE__*/ _fill_let("a4", 6, $if_content__on);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.g);
}));
