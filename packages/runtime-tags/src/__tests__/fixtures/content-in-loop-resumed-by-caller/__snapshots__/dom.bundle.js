// tags/list.marko
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $for_content__input_row = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__dynamicTag($scope, $scope._.e), 5);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", $for_content__input_row);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $row_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a0");
const $row_content = _content("a1", " ", " ", $row_content__n);
const $items = /*@__PURE__*/ _let(2, ($scope) => $input_items($scope.a, $scope.c));
const $n = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($row_content__n));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.d + 1);
	$items($scope, [...$scope.c, $scope.c.length + 1]);
}));
