// total: 13155 (min) 5081 (brotli)
// tags/custom-tag.marko: 225 (min) 153 (brotli)
const $x__OR__y = /* @__PURE__ */ _or(9, _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.h + 1);
	$y($scope, $scope.i + 1);
})));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(3, 0, 0, 1);
const $input_content__OR__x__OR__y = /* @__PURE__ */ _or(10, ($scope) => $dynamicTag($scope, $scope.g, () => [$scope.h, $scope.i]), 2);
const $x = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
const $y = /* @__PURE__ */ _let(8, ($scope) => {
	_text($scope.c, $scope.i);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});

// template.marko: 141 (min) 110 (brotli)
const $customtag_content__count = ($scope, count) => _text($scope.a, count);
const $customtag_content__count2 = ($scope, count2) => _text($scope.b, count2);
const $customtag_content__$params = ($scope, $params2) => {
	$customtag_content__count($scope, $params2[0]);
	$customtag_content__count2($scope, $params2[1]);
};
const $customtag_content = _content_resume("a0", "<div>Counts: <!>,<!></div>", "Db%c%l", 0, $customtag_content__$params);
