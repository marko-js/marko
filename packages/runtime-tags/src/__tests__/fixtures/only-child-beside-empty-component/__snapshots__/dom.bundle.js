// tags/noop.marko
const $input_v__script = _script("b0", ($scope) => void $scope.c);
const $input_v = /*@__PURE__*/ _const(2, $input_v__script);

// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $Nothing_content__v__script = _script("a1", ($scope) => void $scope.c);
const $Nothing_content__v = /*@__PURE__*/ _const(2, $Nothing_content__v__script);
const $if = /*@__PURE__*/ _if(0, "<span>on</span>");
const $for = /*@__PURE__*/ _for_of_unkeyed(3, "<li> </li>", "D ", 0, $for_content__$params);
const $open = /*@__PURE__*/ _let(6, ($scope) => {
	$input_v($scope.b, $scope.g);
	$input_v($scope.c, !$scope.g);
	$Nothing_content__v($scope.e, $scope.g);
	$if($scope, $scope.g ? 0 : 1);
	$for($scope, [$scope.g ? [1, 2] : [1]]);
});
const $setup__script = _script("a2", ($scope) => _on($scope.f, "click", function() {
	$open($scope, !$scope.g);
}));
