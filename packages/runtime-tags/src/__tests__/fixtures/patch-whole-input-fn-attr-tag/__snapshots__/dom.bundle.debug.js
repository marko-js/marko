// tags/reader.marko
const $template$1 = "<button>read</button>";
const $walks$1 = " b";
const $setup__script = _script("__tests__/tags/reader.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input.onRead($scope.input.read() + ":" + $scope.input.opt.v);
}));
const $setup$1 = $setup__script;
const $input$1 = /*@__PURE__*/ _const("input");
var reader_default = /*@__PURE__*/ _template("__tests__/tags/reader.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $shown = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "shown/5", ($scope) => _text($scope["#text/1"], $scope.shown));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$shown($scope, "");
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => $input$1($scope["#childScope/0"], {
	read: $read($scope),
	onRead: $onRead($scope),
	opt: attrTag({ v: $scope.input_label })
}));
const $input = ($scope, input) => $input_label($scope, input.label);
const $onRead = ($scope) => function(v) {
	$shown($scope, v);
};
const $read = ($scope) => () => $scope.input_label;
_resumed["__tests__/template.marko_0/onRead"] = $onRead;
_resumed["__tests__/template.marko_0/read"] = $read;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
