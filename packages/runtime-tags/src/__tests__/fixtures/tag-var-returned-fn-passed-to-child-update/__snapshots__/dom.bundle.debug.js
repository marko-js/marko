// tags/make.marko
const $template$3 = "";
const $walks$3 = "";
const $setup$3 = ($_) => {};
const $input_v$1 = /*@__PURE__*/ _const("input_v", ($scope) => _return($scope, $_return($scope)));
const $input$2 = ($scope, input) => $input_v$1($scope, input.v);
const $_return = ($scope) => () => $scope.input_v;
_resumed["__tests__/tags/make.marko_0/_return"] = $_return;
var make_default = /*@__PURE__*/ _template("__tests__/tags/make.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$2));

// tags/reader.marko
const $template$2 = "<p></p>";
const $walks$2 = " b";
const $setup$2 = ($_) => {};
const $input__script = _script("__tests__/tags/reader.marko_0_input#2", ($scope) => _el_read($scope["#p/0"]).textContent = $scope.input.fn());
const $input$1 = /*@__PURE__*/ _const("input", $input__script);
var reader_default = /*@__PURE__*/ _template("__tests__/tags/reader.marko", $template$2, " b", 0, $input$1);

// tags/pair.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", " b");
const $fn = _var_resume("__tests__/tags/pair.marko_0_fn#6/var", ($scope, fn) => $input$1($scope["#childScope/2"], { fn }));
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/0"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
function $setup$1($scope) {
	_var($scope, "#childScope/0", $fn);
}
var pair_default = /*@__PURE__*/ _template("__tests__/tags/pair.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $v = /*@__PURE__*/ _let("v/2", ($scope) => $input_v($scope["#childScope/1"], $scope.v));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$v($scope, "b");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$v($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
