// total: 13053 (min) 5049 (brotli)
// tags/custom-tag.marko: 160 (min) 143 (brotli)
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2, 0, 0, 1);
const $input_content__OR__x = /* @__PURE__ */ _or(7, ($scope) => $dynamicTag($scope, $scope.f, () => [$scope.g]));
const $x__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.g + 1);
}));
const $x = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_content__OR__x($scope);
	$x__script($scope);
});

// template.marko: 100 (min) 90 (brotli)
const $customtag_content__count = ($scope, count) => _text($scope.a, count);
const $customtag_content__$params = ($scope, $params2) => $customtag_content__count($scope, $params2[0]);
const $customtag_content = _content_resume("a0", "<div>Count: <!></div>", "Db%l", 0, $customtag_content__$params);
