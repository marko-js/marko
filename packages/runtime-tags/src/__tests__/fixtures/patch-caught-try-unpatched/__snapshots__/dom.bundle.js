// template.marko
function check(fail) {
	if (fail) throw new Error("down");
}
const $catch_content = _content("a2", "Unavailable");
const $try_content__input_label = /*@__PURE__*/ _fill_join_closure("a5", 4, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a0"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_label($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _fill_join_closure("a6", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, check($scope._._.f)), ($scope) => $scope._._, "a1"), 0);
const $if_content__try = /*@__PURE__*/ _try(0, "<p><!><!></p>", "D%b%", $try_content__setup, 0, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $open = _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
