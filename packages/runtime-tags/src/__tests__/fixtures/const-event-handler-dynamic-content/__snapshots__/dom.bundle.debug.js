// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_type($scope["#childScope/0"], card_default);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/card.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/heading.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $inputtype_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/1"], $scope._.n), 0, "__tests__/tags/heading.marko_1_n#4/subscribe");
const $inputtype_content__setup = ($scope) => {
	$inputtype_content__n($scope);
	$inputtype_content__inc($scope);
};
const $inputtype_content__inc__script = _script("__tests__/tags/heading.marko_1_inc#5", ($scope) => _on($scope["#button/0"], "click", $scope._.inc ||= $inc($scope._)));
const $inputtype_content__inc = /*@__PURE__*/ _closure_get("inc", $inputtype_content__inc__script);
const $inputtype_content = _content("__tests__/tags/heading.marko_1*content", "<button id=inc> </button>", " D ", $inputtype_content__setup);
_content_resume($inputtype_content);
const $n__closure = /*@__PURE__*/ _closure($inputtype_content__n);
const $n = /*@__PURE__*/ _let("n/4", $n__closure);
const $inc2 = /*@__PURE__*/ _const("inc");
function $setup($scope) {
	$n($scope, 0);
	$inc2($scope, $inc($scope));
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content);
const $input_type = $dynamicTag;
const $input = ($scope, input) => $input_type($scope, input.type);
const $inc = ($scope) => function() {
	$n($scope, +$scope.n + 1);
};
var heading_default = /*@__PURE__*/ _template("__tests__/tags/heading.marko", $template, "b%c", $setup, $input);
