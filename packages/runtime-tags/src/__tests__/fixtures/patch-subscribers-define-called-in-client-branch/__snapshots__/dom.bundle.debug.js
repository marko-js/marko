// tags/frame.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_x = /*@__PURE__*/ _or_patch("__tests__/tags/frame.marko_0_input_content#3_input_x#4/setup", 5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => [$scope.input_x]));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_x);
const $input_x$2 = /*@__PURE__*/ _const("input_x", $input_content__OR__input_x);
const $input$2 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_x$2($scope, input.x);
};
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$2, "b%c", 0, $input$2);

// tags/panel.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c");
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Info_content__setup($scope["#childScope/0"]);
};
const $frame_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/tags/panel.marko_2_input_n#0:4/subscribe", "input_n/7", ($scope) => _text($scope["#text/1"], $scope._.input_n), 0, "__tests__/tags/panel.marko_0_input_n#4/subscribers", 1);
const $frame_content__setup = $frame_content__input_n;
const $frame_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $frame_content = _content_resume("__tests__/tags/panel.marko_2*content", "<p><!> <!></p>", "D%c%", $frame_content__setup, $frame_content__$params);
const $Info_content__input_n__OR__twice__script = _script_patch("__tests__/tags/panel.marko_1_input_n#0:4_twice#0 >input_n twice", ($scope) => console.log("effect", $scope._.input_n, $scope.twice));
const $Info_content__input_n__OR__twice = /*@__PURE__*/ _or_patch("__tests__/tags/panel.marko_1_input_n#0:4_twice#0/setup", 1, $Info_content__input_n__OR__twice__script);
const $Info_content__twice = /*@__PURE__*/ _const("twice", $Info_content__input_n__OR__twice);
const $Info_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/tags/panel.marko_1_input_n#0:4/subscribe", "input_n/7", ($scope) => {
	$Info_content__twice($scope, $scope._.input_n * 2);
	$Info_content__input_n__OR__twice($scope);
}, 0, "__tests__/tags/panel.marko_0_input_n#4/subscribers", 0);
const $Info_content__setup = $Info_content__input_n;
const $if = /*@__PURE__*/ _if("#text/0", 0, "/&", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
function $setup$1($scope) {
	$input_content($scope["#childScope/1"], $frame_content($scope));
}
const $input_x$1 = ($scope, input_x) => $input_x$2($scope["#childScope/1"], input_x);
const $input$1 = ($scope, input) => {
	$input_n$1($scope, input.n);
	$input_show$1($scope, input.show);
	$input_x$1($scope, input.x);
};
const $input_n__closure = /*@__PURE__*/ _closure($Info_content__input_n, $frame_content__input_n);
const $input_n$1 = /*@__PURE__*/ _const("input_n", $input_n__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>toggle</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $shown = _let("shown/8", ($scope) => $input_show$1($scope["#childScope/1"], $scope.shown));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$shown($scope, !$scope.shown);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$shown($scope, true);
	$setup__script($scope);
}
const $input_n = ($scope, input_n) => {
	$input_n$1($scope["#childScope/0"], input_n);
	$input_n$1($scope["#childScope/1"], input_n);
};
const $input_x = ($scope, input_x) => {
	$input_x$1($scope["#childScope/0"], input_x);
	$input_x$1($scope["#childScope/1"], input_x);
};
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_x($scope, input.x);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
