// tags/of-rows.marko
const $if_content__dynamicTag$2 = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__item_content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag$2($scope, $scope._.b));
const $row_content__if$1 = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__item_content);
const $row_content__show$1 = /*@__PURE__*/ _closure_get(6, ($scope) => $row_content__if$1($scope, $scope._.f ? 0 : 1), 0, "e0", 5);
const $show$2 = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($row_content__show$1));
const $setup__script$3 = _script("e2", ($scope) => _on($scope.a, "click", function() {
	$show$2($scope, true);
}));

// tags/in-rows.marko
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__value_content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.b));
const $row_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__value_content);
const $row_content__show = /*@__PURE__*/ _closure_get(5, ($scope) => $row_content__if($scope, $scope._.e ? 0 : 1), 0, "c0", 4);
const $show$1 = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($row_content__show));
const $setup__script$2 = _script("c2", ($scope) => _on($scope.a, "click", function() {
	$show$1($scope, true);
}));

// tags/nested-rows.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__cell_content = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.b));
const $cell_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__cell_content);
const $cell_content__show = /*@__PURE__*/ _closure_get(6, ($scope) => $cell_content__if($scope, $scope._.f ? 0 : 1), 0, "d0", 5);
const $show = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($cell_content__show));
const $setup__script$1 = _script("d2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// template.marko
const $cell_content__count = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a4", 4);
const $cell_content = _content("a5", "Cell <!>", "b%", $cell_content__count);
const $item_content2__count = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a2", 4);
const $item_content2 = _content("a3", "In <!>", "b%", $item_content2__count);
const $item_content__count = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a0", 4);
const $item_content = _content("a1", "Of <!>", "b%", $item_content__count);
const $count = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($item_content__count, $item_content2__count, $cell_content__count));
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
