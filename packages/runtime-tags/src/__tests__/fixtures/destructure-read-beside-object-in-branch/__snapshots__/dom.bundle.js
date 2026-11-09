// template.marko
const $if_content__todo = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f?.id + JSON.stringify($scope._.f)));
const $if_content__setup = $if_content__todo;
const $todo = /*@__PURE__*/ _let(5, $if_content__todo);
const $if = /*@__PURE__*/ _if(0, "<div> </div>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$todo($scope, null);
	$show($scope, false);
}));
