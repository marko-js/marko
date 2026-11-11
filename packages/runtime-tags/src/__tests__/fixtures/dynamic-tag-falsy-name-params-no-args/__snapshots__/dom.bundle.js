// template.marko
const $oninputtag_content__$label = ($scope, $label) => _text($scope.a, void 0 !== $label ? $label : "falsy");
const $oninputtag_content__$params = ($scope, $params2) => $oninputtag_content__$label($scope, $params2[0]);
const $oninputtag_content = _content("a0", " ", " ", 0, $oninputtag_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $oninputtag_content);
const $input_tag__OR__on = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.f && $scope.e));
const $on = /*@__PURE__*/ _let(5, $input_tag__OR__on);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.f);
}));
