// tags/panel.marko
const $for_content__f = /*@__PURE__*/ _init_resume("b2", /*@__PURE__*/ _fill_join_closure("b6", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._._.g()), ($scope) => $scope._._, "b3"), 0));
const $for_content__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$out($scope._._, $scope._._.g());
}));
const $for_content__setup = ($scope) => {
	$for_content__f($scope);
	$for_content__setup__script($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<button class=read> </button>", " D ", $for_content__setup);
const $if_content__setup = ($scope) => $if_content__for($scope, [[1]]);
const $out = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $input_y = ($scope, input_y) => $if($scope, input_y ? 0 : 1);
const $f = ($scope) => function() {
	return $scope.e;
};
_bind_resume("b0 e", $f);

// template.marko
const $y = /*@__PURE__*/ _let(5, ($scope) => $input_y($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$y($scope, !$scope.f);
}));
