// template.marko
_resume_dynamic_tag();
const $inputtag_content3 = _content_resume("a4", "aliased");
const $inputtag_content2 = _content_resume("a3", "inline");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a2", "spread"));
const $input_tag__OR__attrs = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.g, () => ({
	...$scope.j,
	id: "spread"
})));
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag(2, $inputtag_content3);
const $input_tag__OR__aliased = /*@__PURE__*/ _or(11, ($scope) => $dynamicTag3($scope, $scope.g, () => ({
	...$scope.j,
	id: "aliased"
})));
const $attrs2 = /*@__PURE__*/ _const(9, ($scope) => {
	$input_tag__OR__attrs($scope);
	$input_tag__OR__aliased($scope);
});
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1, $inputtag_content2);
const $input_tag__OR__n = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag2($scope, $scope.g, () => ({
	onClick: $onClick($scope),
	id: "inline"
})));
const $n = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope, "d", $scope.h);
	$attrs2($scope, { onClick: $attrs($scope) });
	$input_tag__OR__n($scope);
});
const $attrs = ($scope) => function() {
	$n($scope, +$scope.h + 1);
};
const $onClick = ($scope) => function() {
	$n($scope, $scope.h + 10);
};
_resume("a0", $attrs);
_resume("a1", $onClick);
