// tags/l1/tags/l2/tags/l3/index.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = () => {};
const $input_note$3 = ($scope, input_note) => _text($scope["#text/0"], input_note);
const $input$3 = ($scope, input) => $input_note$3($scope, input.note);
var l3_default = /*@__PURE__*/ _template("__tests__/tags/l1/tags/l2/tags/l3/index.marko", $template$3, "D l", 0, $input$3);

// tags/l1/tags/l2/index.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<button class=n> </button>${_w0}`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D l");
const $n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script$1 = _script("__tests__/tags/l1/tags/l2/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$2($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_note$2 = ($scope, input_note) => $input_note$3($scope["#childScope/2"], input_note);
const $input$2 = ($scope, input) => $input_note$2($scope, input.note);
var l2_default = /*@__PURE__*/ _template("__tests__/tags/l1/tags/l2/index.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/l1/index.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
}
const $input_note$1 = ($scope, input_note) => $input_note$2($scope["#childScope/0"], input_note);
const $input$1 = ($scope, input) => $input_note$1($scope, input.note);
var l1_default = /*@__PURE__*/ _template("__tests__/tags/l1/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button class=t>t</button></main>";
const $walks = "D%b l";
const $if_content__input_note = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_note", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_note$1($scope["#childScope/0"], $scope._.input_note)));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_note", $if_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
