// template.marko
const $if_content2__input_html = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _html($scope, $scope._.f, "a"));
const $if_content2__setup = $if_content2__input_html;
const $if_content__input_html = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _html($scope, $scope._.f, "a"));
const $if = /*@__PURE__*/ _if(0, " <hr>", " ", $if_content__input_html);
const $if2 = /*@__PURE__*/ _if(1, "<hr> ", "b ", $if_content2__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => {
	$if($scope, $scope.g ? 0 : 1);
	$if2($scope, $scope.g ? 0 : 1);
});
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.g);
}));
