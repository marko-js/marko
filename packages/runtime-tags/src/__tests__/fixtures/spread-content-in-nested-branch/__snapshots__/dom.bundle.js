// tags/list.marko
const $if_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $if_content__item = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_attrs_content($scope, "a", $scope._.c);
	$if_content__item__script($scope);
});
const $for_content__if = /*@__PURE__*/ _if(0, "<div></div>", " ", $if_content__item);
const $for_content__show = /*@__PURE__*/ _for_closure(1, ($scope) => $for_content__if($scope, $scope._.f ? 0 : 1));
const $show = /*@__PURE__*/ _let(5, $for_content__show);
const $setup__script$1 = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));

// template.marko
const $item_content__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "a0", 2);
const $item_content = _content("a1", "One <!>", "b%", $item_content__count);
const $count = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($item_content__count));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
