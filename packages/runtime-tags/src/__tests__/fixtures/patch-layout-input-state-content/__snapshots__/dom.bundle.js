// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _init_resume("c0", /*@__PURE__*/ _fill("c2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e))));
const $if = /*@__PURE__*/ _if(0, "<div><!></div>", "D%", $if_content__input_content);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// layout.marko
const $wrap_content = _content$1("a0", "<b>shown</b>");
const $input_open = ($scope, input_open) => $input_show($scope.a, input_open);

// template.marko
const $Layout_content__setup = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope._, !$scope._.b);
}));
const $open = _let(1, ($scope) => $input_open($scope.a, $scope.b));
