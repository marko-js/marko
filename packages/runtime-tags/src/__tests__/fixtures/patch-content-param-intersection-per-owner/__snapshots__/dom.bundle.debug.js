// tags/pass-on.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_x = /*@__PURE__*/ _or_patch("__tests__/tags/pass-on.marko_0_input_content#3_input_x#4/setup", 5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => [$scope.input_x]));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_x);
const $input_x$2 = /*@__PURE__*/ _const("input_x", $input_content__OR__input_x);
const $input$2 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_x$2($scope, input.x);
};
var pass_on_default = /*@__PURE__*/ _template("__tests__/tags/pass-on.marko", $template$2, "b%c", 0, $input$2);

// tags/owner.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $passon_content__input_a__OR__x = /*@__PURE__*/ _or_patch("__tests__/tags/owner.marko_1_input_a#0:4_x#2/setup", 3, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.x));
const $passon_content__input_a = /*@__PURE__*/ _closure_get_patch("__tests__/tags/owner.marko_1_input_a#0:4/subscribe", "input_a/5", $passon_content__input_a__OR__x, 0, "__tests__/tags/owner.marko_0_input_a#4/subscribers", 0);
const $passon_content__setup = $passon_content__input_a;
const $passon_content__x = /*@__PURE__*/ _const("x", $passon_content__input_a__OR__x);
const $passon_content__$params = ($scope, $params2) => $passon_content__x($scope, $params2[0]);
const $passon_content = _content_resume("__tests__/tags/owner.marko_1*content", "<p> </p>", "D ", $passon_content__setup, $passon_content__$params);
const $setup__script$1 = _script("__tests__/tags/owner.marko_0", ($scope) => document.body.dataset.owner = "1");
function $setup$1($scope) {
	$input_content($scope["#childScope/0"], $passon_content($scope));
	$setup__script$1($scope);
}
const $input_x$1 = ($scope, input_x) => $input_x$2($scope["#childScope/0"], input_x);
const $input$1 = ($scope, input) => {
	$input_x$1($scope, input.x);
	$input_a$1($scope, input.a);
};
const $input_a__closure = /*@__PURE__*/ _closure($passon_content__input_a);
const $input_a$1 = /*@__PURE__*/ _const("input_a", $input_a__closure);
var owner_default = /*@__PURE__*/ _template("__tests__/tags/owner.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>go</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $a = _let("a/7", ($scope) => $input_a$1($scope["#childScope/0"], $scope.a));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$a($scope, "c2");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$a($scope, "c1");
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => {
	$input_x$1($scope["#childScope/0"], input_x);
	$input_x$1($scope["#childScope/1"], input_x);
};
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/1"], input_a);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_a($scope, input.a);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
