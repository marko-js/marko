// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $inputtag_content__input_a__OR__n = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_a#0:4_n#4/setup", 5, ($scope) => _text($scope["#text/1"], $scope._.input_a + $scope.n));
const $inputtag_content__input_a__OR__input_b = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_a#0:4_input_b#0:5/setup", 3, ($scope) => _text($scope["#text/2"], $scope._.input_a + $scope._.input_b));
const $inputtag_content__input_a__script = _script_patch("__tests__/template.marko_1_input_a#0:4 >input_a", ($scope) => document.body.dataset.a = $scope._.input_a);
const $inputtag_content__input_a = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_a#0:4/subscribe", "input_a/6", ($scope) => {
	$inputtag_content__input_a__OR__n($scope);
	$inputtag_content__input_a__OR__input_b($scope);
	$inputtag_content__input_a__script($scope);
}, 0, "__tests__/template.marko_0_input_a#4/subscribers", 0);
const $inputtag_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_n#4/fill", "n/4", $inputtag_content__input_a__OR__n);
const $inputtag_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$inputtag_content__n($scope, +$scope.n + 1);
}));
const $inputtag_content__setup = ($scope) => {
	$inputtag_content__input_a($scope);
	$inputtag_content__input_b($scope);
	$inputtag_content__setup__script($scope);
	$inputtag_content__n($scope, 0);
};
const $inputtag_content__input_b = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_b#0:5/subscribe", "input_b/7", $inputtag_content__input_a__OR__input_b, 0, "__tests__/template.marko_0_input_b#5/subscribers", 0);
const $inputtag_content = _content("__tests__/template.marko_1*content", "<button> </button><p> </p>", " D lD ", $inputtag_content__setup);
_content_resume($inputtag_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag = $dynamicTag;
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_tag($scope, input.tag);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($inputtag_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($inputtag_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
