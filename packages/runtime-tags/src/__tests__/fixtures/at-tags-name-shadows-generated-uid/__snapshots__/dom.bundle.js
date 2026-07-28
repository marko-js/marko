// tags/child/index.marko
const $for_content__s_a = ($scope, s_a) => _text($scope.a, s_a);
const $for_content__$params = ($scope, $params2) => $for_content__s_a($scope, $params2[0]?.a);
const $for = /*@__PURE__*/ _for_of(0, " ", " ", 0, $for_content__$params);
const $input_scope = ($scope, input_scope) => $for($scope, [input_scope]);

// template.marko
const $cond = /*@__PURE__*/ _let(2, ($scope) => {
	let $scope2;
	if ($scope.c) $scope2 = attrTag({ a: 1 });
	else $scope2 = attrTag({ a: 2 });
	$input_scope($scope.b, $scope2);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$cond($scope, !$scope.c);
}));
