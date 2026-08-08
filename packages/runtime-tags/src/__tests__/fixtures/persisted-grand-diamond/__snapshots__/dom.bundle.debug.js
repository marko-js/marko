// tags/dia-d/index.marko
const $template$4 = "<em> </em>";
const $walks$4 = "D l";
const $setup$4 = () => {};
const $input_note$4 = ($scope, input_note) => _text($scope["#text/0"], input_note);
const $input$4 = ($scope, input) => $input_note$4($scope, input.note);
var dia_d_default = /*@__PURE__*/ _template("__tests__/tags/dia-d/index.marko", $template$4, "D l", $setup$4, $input$4);

// tags/dia-b/index.marko
const $template$3 = $template$4;
const $walks$3 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$3 = () => {};
const $input_note$3 = ($scope, input_note) => $input_note$4($scope["#childScope/0"], input_note);
const $input$3 = ($scope, input) => $input_note$3($scope, input.note);
var dia_b_default = /*@__PURE__*/ _template("__tests__/tags/dia-b/index.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/dia-c/index.marko
const $template$2 = $template$4;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup$2 = () => {};
const $input_note$2 = ($scope, input_note) => $input_note$4($scope["#childScope/0"], input_note);
const $input$2 = ($scope, input) => $input_note$2($scope, input.note);
var dia_c_default = /*@__PURE__*/ _template("__tests__/tags/dia-c/index.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/dia-a/index.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$3, $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$3, $walks$2);
const $setup$1 = () => {};
const $input_note$1 = ($scope, input_note) => {
	$input_note$3($scope["#childScope/0"], input_note);
	$input_note$2($scope["#childScope/1"], input_note);
};
const $input$1 = ($scope, input) => $input_note$1($scope, input.note);
var dia_a_default = /*@__PURE__*/ _template("__tests__/tags/dia-a/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_note = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_note", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_note$1($scope["#childScope/0"], $scope._.input_note)));
const $if_content__setup = $if_content__input_note;
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
