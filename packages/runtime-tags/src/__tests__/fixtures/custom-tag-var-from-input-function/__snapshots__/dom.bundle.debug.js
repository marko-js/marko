// tags/child.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = ($_) => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _return($scope, $scope.input_value));
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// tags/label-text.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&b%c`)("");
const $if_content__getLabel = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.getLabel()));
const $if_content__setup = $if_content__getLabel;
const $getLabel = _var_resume("__tests__/tags/label-text.marko_0_getLabel#7/var", /*@__PURE__*/ _const("getLabel", $if_content__getLabel));
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => $input_value($scope["#childScope/0"], $value($scope)));
const $if = /*@__PURE__*/ _if("#text/2", "<span> </span>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
function $setup$1($scope) {
	_var($scope, "#childScope/0", $getLabel);
}
const $value = ($scope) => () => $scope.input_label;
_resumed["__tests__/tags/label-text.marko_0/value"] = $value;
var label_text_default = /*@__PURE__*/ _template("__tests__/tags/label-text.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $input_show($scope["#childScope/1"], $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_label($scope["#childScope/1"], "hello");
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
