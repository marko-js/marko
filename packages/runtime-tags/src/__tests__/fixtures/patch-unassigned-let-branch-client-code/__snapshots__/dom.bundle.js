// template.marko
const $if_content__input_w = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f)));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_w);
const $show = fill("a2", /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1)));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	console.log("hi");
}));
