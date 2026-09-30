// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params$1 = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $if_content__for$1 = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params$1);
const $if_content__input_item = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__for$1($scope, [$scope._.e]));
const $if$2 = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_item);
const $open$1 = /*@__PURE__*/ _let(5, ($scope) => $if$2($scope, $scope.f ? 0 : 1));
const $setup__script$2 = _script("e0", ($scope) => _on($scope.a, "click", function() {
	$open$1($scope, true);
}));

// tags/grid-row.marko
const $for_content__cell_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__cell_content($scope, $params2[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__input_row_cell = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__for($scope, [$scope._.g]));
const $if$1 = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_row_cell);
const $open = /*@__PURE__*/ _let(7, ($scope) => $if$1($scope, $scope.h ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.h);
}));

// tags/last.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__saved_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.g));
const $if = /*@__PURE__*/ _if(1, "L<!><!>", "b%", $if_content__saved_content);
const $saved = /*@__PURE__*/ _let(5, ($scope) => {
	$saved_content($scope, $scope.f?.content);
	$if($scope, $scope.f ? 0 : 1);
});
const $saved_content = /*@__PURE__*/ _const(6, $if_content__saved_content);
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$saved($scope, [...$scope.e].at(-1));
}));

// template.marko
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a2", " <b> </b>", " bD "), { 2($scope) {
	_text($scope.a, $scope.c);
	_text($scope.b, $scope.c);
} });
_resumed.a2 = $item_content2;
const $cell_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a1", "<em> </em>", "D "), { 1($scope) {
	_text($scope.a, $scope.b);
} });
_resumed.a1 = $cell_content;
const $item_content__items_0__OR__item = /*@__PURE__*/ _or(4, ($scope) => _text($scope.b, $scope.d === $scope._.e));
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "<span><!>:<!></span>", "D%c%", /* @__PURE__ */ _closure_get(5, $item_content__items_0__OR__item)), {
	2($scope) {
		_text($scope.a, $scope.c);
	},
	3: $item_content__items_0__OR__item
});
_resumed.a0 = $item_content;
