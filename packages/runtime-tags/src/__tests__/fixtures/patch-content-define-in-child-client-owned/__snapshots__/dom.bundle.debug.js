// tags/wrap.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $if_content__input_title = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_2_input_title#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/wrap.marko_fill0", "input_title", /*@__PURE__*/ _closure_get("input_title/5", ($scope) => _text($scope["#text/0"], $scope._._.input_title), ($scope) => $scope._._, "__tests__/tags/wrap.marko_2_input_title#0:3/subscribe"), 0));
const $if_content__setup = $if_content__input_title;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__open($scope, $temp.open);
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
}
const $input_open = ($scope, input_open) => $Panel_content__open($scope["#childScope/0"], input_open);
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_open($scope, input.open);
};
const $input_title__closure = /*@__PURE__*/ _closure($if_content__input_title);
const $input_title$1 = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_title", $input_title__closure);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_open($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
