// template.marko
const $for_content__selected__OR__row_label = /*@__PURE__*/ _or(8, ($scope) => _text($scope.b, $scope._.c === $scope.M && $scope.h));
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 2, "M", ($scope) => {
	_attr_class($scope.a, $scope._.c === $scope.M && "danger");
	$for_content__selected__OR__row_label($scope);
});
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$selected($scope._, $scope.M);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__setup__script($scope);
};
const $for_content__row_label = /*@__PURE__*/ _const(7, $for_content__selected__OR__row_label);
const $for_content__$params = ($scope, $params2) => $for_content__row_label($scope, $params2[0]?.label);
const $selected = /*@__PURE__*/ _let(2, $for_content__selected);
const $for = /*@__PURE__*/ _for_of(0, "<li><span> </span><button class=select>x</button></li>", " E l ", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d, "id"]));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, $scope.d.map((r) => r.id === 1 ? {
		id: 1,
		label: r.label + "!"
	} : r));
}));
