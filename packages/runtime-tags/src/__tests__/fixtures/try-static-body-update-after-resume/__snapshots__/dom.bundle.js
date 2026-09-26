// template.marko
const $catch_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "caught <!>", "b%"), { 1($scope) {
	_text($scope.a, $scope.b);
} });
_resumed.a0 = $catch_content;
const $try = /*@__PURE__*/ _try(2, "static body");
const $clicks = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	let $catch;
	forOf([`update ${$scope.d}`], (label) => {
		$catch = attrTags($catch, { content: $catch_content($scope, { 1: label }) });
	});
	$try($scope, { catch: $catch });
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.d + 1);
}));
