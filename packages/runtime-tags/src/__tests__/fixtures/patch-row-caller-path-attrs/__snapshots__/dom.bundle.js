// tags/navlist.marko
const $for_content__active = ($scope, active) => _attr_class_item($scope.a, "active", active);
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _fill_signal("4 b2", /*@__PURE__*/ _or_resume("b0", 5, ($scope) => $for_content__active($scope, $scope.e === $scope._.e)), _for_closure, 0);
const $for_content__input_path = /*@__PURE__*/ _for_closure(0, $for_content__input_path__OR__item_href);
const $input_path = /*@__PURE__*/ _const(4, $for_content__input_path);

// template.marko
const $path = /*@__PURE__*/ _let(5, ($scope) => $input_path($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$path($scope, $scope.f === "/a" ? "/b" : "/a");
}));
