// template.marko
const $catch_content2__err_message = ($scope, err_message) => _text($scope.b, err_message);
const $catch_content2__$params = ($scope, $params5) => $catch_content2__err_message($scope, $params5[0]?.message);
const $catch_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a2", "caught <!>: <!>", "b%c%", 0, $catch_content2__$params), { 2($scope) {
	_text($scope.a, $scope.c);
} });
_resumed.a2 = $catch_content2;
const $catch_content__err_message = ($scope, err_message) => _text($scope.b, err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a0", "caught <!>: <!>", "b%c%", 0, $catch_content__$params), { 2($scope) {
	_text($scope.a, $scope.c);
} });
_resumed.a0 = $catch_content;
const $try_content__clicks = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, (() => {
	if ($scope._.d) throw new Error("click");
	return $scope._.d;
})()));
const $try2 = /*@__PURE__*/ _try(2, "clicks <!>", "b%", $try_content__clicks);
const $clicks__closure = /*@__PURE__*/ _closure($try_content__clicks);
const $clicks = /*@__PURE__*/ _let(3, ($scope) => {
	let $catch2;
	forOf([`update ${$scope.d}`], (label) => {
		$catch2 = attrTags($catch2, { content: $catch_content2($scope, { 2: label }) });
	});
	$try2($scope, { catch: $catch2 });
	$clicks__closure($scope);
});
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, +$scope.d + 1);
}));
