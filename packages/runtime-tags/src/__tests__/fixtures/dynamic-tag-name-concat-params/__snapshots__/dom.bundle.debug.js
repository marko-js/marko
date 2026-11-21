// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $inputprefixinputlevel_content__count = /*@__PURE__*/ _closure_get("count/7", ($scope) => _text($scope["#text/1"], $scope._.count), 0, "__tests__/template.marko_1_count#0:6/subscribe");
const $inputprefixinputlevel_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $inputprefixinputlevel_content__setup = ($scope) => {
	$inputprefixinputlevel_content__count($scope);
	$inputprefixinputlevel_content__setup__script($scope);
};
const $inputprefixinputlevel_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button> </button>", " D ", $inputprefixinputlevel_content__setup);
const $count__closure = /*@__PURE__*/ _closure($inputprefixinputlevel_content__count);
const $count = /*@__PURE__*/ _let("count/6", $count__closure);
function $setup($scope) {
	$count($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputprefixinputlevel_content);
const $input_prefix__OR__input_level = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_prefix + $scope.input_level));
const $input_prefix = /*@__PURE__*/ _const("input_prefix", $input_prefix__OR__input_level);
const $input_level = /*@__PURE__*/ _const("input_level", $input_prefix__OR__input_level);
const $input = ($scope, input) => {
	$input_prefix($scope, input.prefix);
	$input_level($scope, input.level);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
