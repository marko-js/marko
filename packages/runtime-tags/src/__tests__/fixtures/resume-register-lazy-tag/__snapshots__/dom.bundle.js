// template.marko
let $load_Heading_tag_input_type = /*@__PURE__*/ _load_signal(() => import("./v:heading.marko.input_type.mjs"));
const $Heading_content = _content("b0", "lazy child: registered");
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$load_Heading_tag_input_type($scope.d, $scope.e % 2 ? "h2" : "h1");
});
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));

// heading.marko
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get(5, ($scope) => $inputtype_content__dynamicTag($scope, $scope._.e), 0, "a1", 4);
const $inputtype_content = /*@__PURE__*/ _content("a0", "<!><!><!>", "b%", $inputtype_content__input_content);
const $inputtype_content2 = /*@__PURE__*/ _content_resume($inputtype_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputtype_content);
const $input_type = $dynamicTag;
const $renders = [$inputtype_content2];
