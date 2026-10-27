// template.marko
const $if_content__n = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.g), ($scope) => $scope._._, "a1");
const $if_content__setup__script = _script("a0", ($scope) => {
	{
		const main = document.querySelector("main");
		main.dataset.ph = String(+(main.dataset.ph || 0) + 1);
	}
});
const $if_content__setup = ($scope) => {
	$if_content__n($scope);
	$if_content__setup__script($scope);
};
const $placeholder_content__if = /*@__PURE__*/ _if(0, "<b>ph <!></b>", "Db%", $if_content__setup);
const $placeholder_content__n = /*@__PURE__*/ _closure_get(8, ($scope) => $placeholder_content__if($scope, $scope._.g ? 0 : 1), 0, "a2");
const $placeholder_content = _content("a4", "<p>loading</p><!><!>", "b%", $placeholder_content__n);
const $n__closure = /*@__PURE__*/ _closure($placeholder_content__n, $if_content__n);
const $n = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$n__closure($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
