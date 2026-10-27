// template.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__body = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if_content__setup = $if_content__body;
const $Outer_content__open = ($scope, open) => $Inner_content__open($scope.a, open);
const $Inner_content__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $Inner_content__open = ($scope, open) => $Inner_content__if($scope, open ? 0 : 1);
const $body_content__input_title = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _fill_join_closure("a8", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "a6"), 0));
const $body_content = _content$1("a1", "<em> </em>", "D ", $body_content__input_title);
const $count = /*@__PURE__*/ _let(5, ($scope) => $Outer_content__open($scope.a, $scope.f % 2 === 0));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
