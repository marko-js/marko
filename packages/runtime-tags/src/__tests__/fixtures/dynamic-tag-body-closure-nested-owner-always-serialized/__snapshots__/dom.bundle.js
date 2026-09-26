// tags/heading.marko
const $inputtype_content__input_depth = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "c1");
const $inputtype_content = _content("c0", "depth <!>", "b%", $inputtype_content__input_depth);
_content_resume($inputtype_content);
const $if_content__setup__script = _script("c2", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.g + 1);
}));
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.g));
const $count = /*@__PURE__*/ _let(6, $if_content__count);

// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
