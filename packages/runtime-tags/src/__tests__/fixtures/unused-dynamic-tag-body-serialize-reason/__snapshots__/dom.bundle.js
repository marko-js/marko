// total: 13373 (min) 5165 (brotli)
// template.marko: 376 (min) 217 (brotli)
const $Wrap_content__walks = "b%c", $Wrap_content__template = "<!><!><!>", $Message_content__walks = " b", $Message_content__template = " ";
_resume_dynamic_tag();
const $Wrap_content2__setup = ($scope) => {
	$Message_content__input_before($scope.a, "hello");
	$Message_content__input_after($scope.a, "world");
};
const $Wrap_content2 = _content_resume("a3", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($Message_content__template), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)($Message_content__walks), $Wrap_content2__setup);
const $Message_content__input_before__OR__input_after = /* @__PURE__ */ _or(5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $Message_content__input_before = /* @__PURE__ */ _const(3, $Message_content__input_before__OR__input_after);
const $Message_content__input_after = /* @__PURE__ */ _const(4, $Message_content__input_before__OR__input_after);
const $Wrap_content__dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $Wrap_content__as__OR__onClick__OR__content = /* @__PURE__ */ _or(6, ($scope) => $Wrap_content__dynamicTag($scope, $scope.d, () => ({
	onClick: $scope.e,
	content: $scope.f
})), 2);
const $Wrap_content__onClick = /* @__PURE__ */ _const(4, $Wrap_content__as__OR__onClick__OR__content);
const $x = /* @__PURE__ */ _let(1, ($scope) => $Wrap_content__onClick($scope.a, $onClick($scope)));
function $onClick($scope) {
	return function() {
		console.log($x($scope, $scope.b + 1) - 1);
	};
}
_resume("a0", $onClick);
