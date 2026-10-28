// tags/label.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup__script = _script("__tests__/tags/label.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onHide();
}));
const $setup$1 = $setup__script;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => {
	$input_onHide($scope, input.onHide);
	$input_label($scope, input.label);
};
const $input_onHide = /*@__PURE__*/ _const("input_onHide");
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__input_promise = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_promise", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_promise)));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $x = /*@__PURE__*/ _let("x/6", ($scope) => $if($scope, $scope.x ? 0 : 1));
const $input_v = $x;
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "hide");
	$input_onHide($scope["#childScope/0"], $onHide($scope));
}
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_promise($scope, input.promise);
};
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_promise", $if_content__input_promise);
const $onHide = ($scope) => function() {
	$x($scope, "");
};
_resumed["__tests__/template.marko_0/onHide"] = $onHide;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
