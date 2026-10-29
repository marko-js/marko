// tags/panel.marko
const $Info_content__walks = "D%c%l";
const $Info_content__template = "<p><!>:<!></p>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Info_content__setup($scope["#childScope/0"]);
	$Info_content__id($scope["#childScope/0"], "x");
};
const $Info_content__input_n = /*@__PURE__*/ _init_resume("__tests__/tags/panel.marko_1_input_n#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/panel.marko_fill0", "input_n", /*@__PURE__*/ _closure_get("input_n/5", ($scope) => _text($scope["#text/1"], $scope._.input_n), 0, "__tests__/tags/panel.marko_1_input_n#0:3/subscribe"), 0));
const $Info_content__setup = $Info_content__input_n;
const $Info_content__id = ($scope, id) => _text($scope["#text/0"], id);
const $Info_content__$params = ($scope, $params2) => $Info_content__$temp($scope, $params2[0]);
const $Info_content__$temp = ($scope, $temp) => $Info_content__id($scope, $temp.id);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_n($scope, input.n);
	$input_show$1($scope, input.show);
};
const $input_n__closure = /*@__PURE__*/ _closure($Info_content__input_n);
const $input_n = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_n", $input_n__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $count = _let("count/5", ($scope) => $input_n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
