// template.marko
const $i2pdiv_content__i = /*@__PURE__*/ _fill_join_closure("a3", 2, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.c), 0, "a2"), 0);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content$1("a1", " ", " ", $i2pdiv_content__i));
const $for_content__count__OR__i = /*@__PURE__*/ _fill_join("a3", 2, /*@__PURE__*/ _or(3, ($scope) => $for_content__dynamicTag($scope, $scope.c % 2 ? "p" : "div", ($_) => ({ "data-n": $scope._.f }))));
const $for_content__count = /*@__PURE__*/ _shell_init("a7", /*@__PURE__*/ _for_closure(0, $for_content__count__OR__i));
const $count = /*@__PURE__*/ _fill_let("a5", 5, $for_content__count);
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
