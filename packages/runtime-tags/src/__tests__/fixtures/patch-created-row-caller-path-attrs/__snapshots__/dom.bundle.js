// tags/navlist.marko
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _or_patch("b0", 5, ($scope) => _attr_class_item($scope.a, "active", $scope.e === $scope._.e));
const $for_content__input_path = /*@__PURE__*/ _for_closure_patch("b2", 0, $for_content__input_path__OR__item_href, 5);
const $input_path = /*@__PURE__*/ _const(4, $for_content__input_path);

// template.marko
const $if_content__path = /*@__PURE__*/ _if_closure_patch("a4", 0, 0, ($scope) => $input_path($scope.a, $scope._.g));
const $path = _let(6, $if_content__path);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$path($scope, $scope.g === "/a" ? "/b" : "/a");
}));
