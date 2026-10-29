// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $inputtag_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _closure_get("input_a/8", ($scope) => _text($scope["#text/0"], $scope._.input_a.toUpperCase()), 0, "__tests__/template.marko_1_input_a#0:6/subscribe"), 0));
const $inputtag_content__setup = $inputtag_content__input_a;
const $inputtag_content = _content("__tests__/template.marko_1*content", " ", " ", $inputtag_content__setup);
_content_resume($inputtag_content);
const $n = _let("n/7", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputtag_content);
const $input_tag = $dynamicTag;
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_a($scope, input.a);
};
const $input_a__closure = /*@__PURE__*/ _closure($inputtag_content__input_a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
