// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__content = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $Inner_content2__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__content);
const $Inner_content2__open = ($scope, open) => $Inner_content2__if($scope, open ? 0 : 1);
const $Inner_content__input_title = /*@__PURE__*/ _fill_join_closure("a7", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a4"), 0);
const $Inner_content = _content$1("a5", "<em> </em>", "D ", $Inner_content__input_title);
const $Outer_content__open = ($scope, open) => $Inner_content2__open($scope.a, open);
const $count = /*@__PURE__*/ _fill_let("a8", 5, ($scope) => $Outer_content__open($scope.a, $scope.f % 2 === 0));
const $setup__script = _script("a6", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
