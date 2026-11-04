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
const $if_content__input_a__OR__x = /*@__PURE__*/ _or_patch("__tests__/tags/owner.marko_2_input_a#0:5_x#1:2/setup", 1, ($scope) => _text($scope["#text/0"], $scope._._.input_a + $scope._.x));
const $if_content__input_a = /*@__PURE__*/ _closure_get_patch("__tests__/tags/owner.marko_2_input_a#0:5/subscribe", "input_a/7", $if_content__input_a__OR__x, ($scope) => $scope._._, "__tests__/tags/owner.marko_0_input_a#5/subscribers", 0);
const $if_content__setup = ($scope) => {
	$if_content__input_a($scope);
	$if_content__x._($scope);
};
const $if_content__x = /*@__PURE__*/ _if_closure_patch("__tests__/tags/owner.marko_2_x#1:2/setup", "#text/0", 0, $if_content__input_a__OR__x);
const $passon_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $passon_content__input_show = /*@__PURE__*/ _closure_get_patch("__tests__/tags/owner.marko_1_input_show#0:4/subscribe", "input_show/6", ($scope) => $passon_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/tags/owner.marko_0_input_show#4/subscribers", 0);
const $passon_content__setup = $passon_content__input_show;
const $passon_content__$params = ($scope, $params2) => $passon_content__x($scope, $params2[0]);
const $passon_content__x = /*@__PURE__*/ _const("x", $if_content__x);
const $passon_content = _content("__tests__/tags/owner.marko_1*content", "<!><!><!>", "b%", $passon_content__setup, $passon_content__$params);
const $setup__script$1 = _script("__tests__/tags/owner.marko_0", ($scope) => document.body.dataset.owner = "1");
function $setup$1($scope) {
	$input_content($scope["#childScope/0"], $passon_content($scope));
	$setup__script$1($scope);
}
const $input_x$1 = ($scope, input_x) => $input_x$2($scope["#childScope/0"], input_x);
const $input$1 = ($scope, input) => {
	$input_x$1($scope, input.x);
	$input_show($scope, input.show);
	$input_a$1($scope, input.a);
};
const $input_show__closure = /*@__PURE__*/ _closure($passon_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_a__closure = /*@__PURE__*/ _closure($if_content__input_a);
const $input_a$1 = /*@__PURE__*/ _const("input_a", $input_a__closure);
var owner_default = /*@__PURE__*/ _template("__tests__/tags/owner.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $show = _let("show/6", ($scope) => $input_show($scope["#childScope/0"], $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$show($scope, true);
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/0"], input_a);
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/0"], input_x);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
