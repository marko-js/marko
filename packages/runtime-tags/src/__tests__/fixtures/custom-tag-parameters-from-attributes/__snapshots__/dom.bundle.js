// tags/custom-tag.marko
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2);
const $input_content__OR__input_name__OR__x = /* @__PURE__ */ _or(8, ($scope) => $dynamicTag($scope, $scope.f, () => ({
	count: $scope.h,
	name: $scope.g
})), 2);
const $x = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_content__OR__input_name__OR__x($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.h + 1);
}));

// template.marko
const $customtag_content__name = ($scope, name) => _text($scope.a, name);
const $customtag_content__count = ($scope, count) => _text($scope.b, count);
const $customtag_content__$params = ($scope, $params2) => {
	$customtag_content__count($scope, ($params2?.[0]).count);
	$customtag_content__name($scope, ($params2?.[0]).name);
};
const $customtag_content = _content_resume("a0", "<div>Count (<!>): <!></div>", "Db%c%l", 0, $customtag_content__$params);
