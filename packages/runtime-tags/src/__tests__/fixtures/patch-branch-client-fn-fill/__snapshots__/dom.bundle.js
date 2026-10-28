// template.marko
const $if_content__getTitle = /*@__PURE__*/ _fill_signal("5 a2", /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f())));
const $if_content__setup = $if_content__getTitle;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, true);
}));
const $getTitle = ($scope) => () => $scope.e;
_bind_resume("a0 e", $getTitle);
