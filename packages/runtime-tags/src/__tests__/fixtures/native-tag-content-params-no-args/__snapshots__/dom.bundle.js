// template.marko
const $inputtag_content__$label = ($scope, $label2) => _text($scope.a, void 0 !== $label2 ? $label2 : "body");
const $inputtag_content__$params = ($scope, $params4) => $inputtag_content__$label($scope, $params4[0]);
const $inputtag_content = _content("a2", " ", " ", 0, $inputtag_content__$params);
const $Count_content__$pattern = ($scope, $pattern2) => _text($scope.a, $pattern2.count);
const $Count_content__$pattern2 = ($scope, $pattern) => $Count_content__$pattern($scope, void 0 !== $pattern ? $pattern : { count: 1 });
const $Count_content__$params = ($scope, $params3) => $Count_content__$pattern2($scope, $params3[0]);
const $Count_content = _content("a1", "<b> </b>", "D ", 0, $Count_content__$params);
const $Label_content__$label = ($scope, $label) => _text($scope.a, void 0 !== $label ? $label : "none");
const $Label_content__$params = ($scope, $params2) => $Label_content__$label($scope, $params2[0]);
const $Label_content = _content("a0", "<i> </i>", "D ", 0, $Label_content__$params);
const $on__OR__Label__OR__Count__script = _script("a4", ($scope) => _attrs_script($scope, "b"));
const $on__OR__Label__OR__Count = /*@__PURE__*/ _or(12, ($scope) => {
	_attr_content($scope, "a", $scope.i ? $scope.j : $scope.l);
	_attrs_content($scope, "b", $scope.i ? { content: $scope.l } : { content: $scope.j });
	$on__OR__Label__OR__Count__script($scope);
}, 2);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(3);
const $input_tag__OR__on__OR__Label_content__OR__Count_content = /*@__PURE__*/ _or(14, ($scope) => $dynamicTag2($scope, $scope.h, ($_) => ({ content: $scope.i ? $scope.k : $scope.n })), 3);
const $on = /*@__PURE__*/ _let(8, ($scope) => {
	$on__OR__Label__OR__Count($scope);
	$input_tag__OR__on__OR__Label_content__OR__Count_content($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.e, "click", function() {
	$on($scope, !$scope.i);
}));
