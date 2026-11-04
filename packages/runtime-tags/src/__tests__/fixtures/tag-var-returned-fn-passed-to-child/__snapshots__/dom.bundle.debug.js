// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", " b");
const $fn = _var_resume("__tests__/template.marko_0_fn#6/var", ($scope, fn) => $input$1($scope["#childScope/2"], { fn }));
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/0"], input_v);
const $input = ($scope, input) => $input_v($scope, input.v);
function $setup($scope) {
	_var($scope, "#childScope/0", $fn);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/make.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => _return($scope, $_return($scope)));
const $input$1 = ($scope, input) => $input_v($scope, input.v);
const $_return = ($scope) => () => $scope.input_v;
_resumed["__tests__/tags/make.marko_0/_return"] = $_return;
var make_default = /*@__PURE__*/ _template("__tests__/tags/make.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// tags/reader.marko
const $template = "<p></p>";
const $walks = " b";
const $setup = ($_) => {};
const $input__script = _script("__tests__/tags/reader.marko_0_input#2", ($scope) => _el_read($scope["#p/0"]).textContent = $scope.input.fn());
const $input = /*@__PURE__*/ _const("input", $input__script);
var reader_default = /*@__PURE__*/ _template("__tests__/tags/reader.marko", $template, " b", 0, $input);
