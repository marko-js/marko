// tags/boxp.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__input_x = /*@__PURE__*/ _fill_signal("input_content __tests__/tags/boxp.marko_fill0,input_x __tests__/tags/boxp.marko_fill1", /*@__PURE__*/ _or_resume("__tests__/tags/boxp.marko_0_input_content#3_input_x#4/init", 5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => ({ x: $scope.input_x }))));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_content__OR__input_x);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_x($scope, input.x);
};
var boxp_default = /*@__PURE__*/ _template("__tests__/tags/boxp.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $boxp_content__l = /*@__PURE__*/ _let("l/5", ($scope) => _text($scope["#text/1"], $scope.l));
const $boxp_content__x = ($scope, x) => $boxp_content__l($scope, String(x));
const $boxp_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$boxp_content__l($scope, $scope.l + "+");
}));
const $boxp_content__setup = $boxp_content__setup__script;
const $boxp_content__$params = ($scope, $params2) => $boxp_content__x($scope, $params2[0].x);
const $boxp_content = _content("__tests__/template.marko_1*content", "<button> </button>", " D ", $boxp_content__setup, $boxp_content__$params);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $boxp_content($scope));
}
const $input_a = ($scope, input_a) => $input_x($scope["#childScope/0"], input_a);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
