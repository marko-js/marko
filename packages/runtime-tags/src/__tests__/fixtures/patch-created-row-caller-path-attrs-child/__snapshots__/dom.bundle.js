// tags/navx.marko
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _or_patch("c0", 6, ($scope) => _attr_class_item($scope.a, "active", $scope.f === $scope._.f));
const $for_content__input_path = /*@__PURE__*/ _for_closure_patch("c4", 0, $for_content__input_path__OR__item_href, 7);
const $input_path = /*@__PURE__*/ _const(5, $for_content__input_path);

// template.marko
const $if_content__path = /*@__PURE__*/ _if_closure_patch("a5", 0, 0, ($scope) => $input_path($scope.a, $scope._.h));
const $path = _let(7, $if_content__path);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$path($scope, $scope.h === "/a" ? "/b" : "/a");
}));
