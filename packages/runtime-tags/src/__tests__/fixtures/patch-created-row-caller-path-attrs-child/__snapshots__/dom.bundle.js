// tags/navx.marko
const $for_content__active = ($scope, active) => _attr_class_item($scope.a, "active", active);
const $for_content__input_path__OR__item_href = /*@__PURE__*/ _fill_for("c4", 5, /*@__PURE__*/ _or_resume("c0", 6, ($scope) => $for_content__active($scope, $scope.f === $scope._.f)), 0);
const $for_content__input_path = /*@__PURE__*/ _for_closure(0, $for_content__input_path__OR__item_href);
const $input_path = /*@__PURE__*/ _const(5, $for_content__input_path);

// template.marko
const $if_content__path = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_path($scope.a, $scope._.h)));
const $path = _let(7, $if_content__path);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$path($scope, $scope.h === "/a" ? "/b" : "/a");
}));
