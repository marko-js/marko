// template.marko
_resume_dynamic_tag();
const $detailsTag_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $detailsTag_content__text__OR__textareaTag = /*@__PURE__*/ _or(1, ($scope) => $detailsTag_content__dynamicTag($scope, $scope._.h, () => ({
	value: $scope._.e,
	valueChange: $valueChange($scope)
})));
const $detailsTag_content__text = /*@__PURE__*/ _closure_get(8, $detailsTag_content__text__OR__textareaTag);
const $detailsTag_content__setup = ($scope) => {
	$detailsTag_content__text($scope);
	$detailsTag_content__textareaTag($scope);
};
const $detailsTag_content__textareaTag = /*@__PURE__*/ _closure_get(9, $detailsTag_content__text__OR__textareaTag);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a2", "<summary>toggle</summary><!><!>", "b%", $detailsTag_content__setup));
const $open__OR__detailsTag = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.f, () => ({
	open: $scope.d,
	openChange: $openChange($scope)
})));
const $open = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope, "b", $scope.d ? "open" : "closed");
	$open__OR__detailsTag($scope);
});
const $text__closure = /*@__PURE__*/ _closure($detailsTag_content__text);
const $text = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope, "c", $scope.e);
	$text__closure($scope);
});
const $valueChange = ($scope) => function(next) {
	$text($scope._, next);
};
const $openChange = ($scope) => function(next) {
	$open($scope, next);
};
_resume("a1", $valueChange);
_resume("a0", $openChange);
