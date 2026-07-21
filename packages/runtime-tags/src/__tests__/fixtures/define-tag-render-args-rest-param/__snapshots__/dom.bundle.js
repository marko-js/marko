// template.marko
const $MyTag_content__a = ($scope, a) => _text($scope.a, a);
const $MyTag_content__rest = ($scope, rest) => _text($scope.b, JSON.stringify(rest));
const $MyTag_content__tag_params = ($scope, $params2) => {
	(([, ...rest]) => $MyTag_content__rest($scope, rest))($params2);
	$MyTag_content__a($scope, $params2[0]);
};
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$MyTag_content__tag_params($scope.a, [
		$scope.d,
		"two",
		"three"
	]);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
