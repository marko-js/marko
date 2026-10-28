// tags/field.marko
const $template$1 = "<textarea></textarea>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input_onKeyDown__script = _script("__tests__/tags/field.marko_0_input_onKeyDown#3", ($scope) => _on($scope["#textarea/0"], "keydown", $scope.input_onKeyDown));
const $input_onKeyDown = /*@__PURE__*/ _const("input_onKeyDown", $input_onKeyDown__script);
const $input$1 = ($scope, input) => $input_onKeyDown($scope, input.onKeyDown);
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $if_content__setup = ($scope) => $input_onKeyDown($scope["#childScope/0"], $onKeyDown($scope));
const $count = _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $onKeyDown = ($scope) => function() {
	$count($scope._, +$scope._.count + 1);
};
_resumed["__tests__/template.marko_1/onKeyDown"] = $onKeyDown;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
