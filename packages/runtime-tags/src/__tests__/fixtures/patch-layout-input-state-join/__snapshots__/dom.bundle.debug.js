// layout.marko
const $template$1 = "<html><body><main><!><!></main></body></html>";
const $walks$1 = "F%b%n";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_a __tests__/layout.marko_fill0 __tests__/layout.marko_fill0/unpatched,input_b __tests__/layout.marko_fill1 __tests__/layout.marko_fill1/unpatched", /*@__PURE__*/ _or_resume("__tests__/layout.marko_1_input_a#0:5_input_b#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), _if_closure, "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_show$1($scope, input.show);
	$input_a($scope, input.a);
	$input_b$1($scope, input.b);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Layout_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope._, +$scope._.a + 1);
}));
const $Layout_content__setup = $Layout_content__setup__script;
const $Layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button>inc</button>", " ", $Layout_content__setup);
const $a = /*@__PURE__*/ _let("a/5", ($scope) => $input_a($scope["#childScope/0"], $scope.a));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Layout_content($scope));
	$a($scope, 1);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_b($scope, input.b);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
