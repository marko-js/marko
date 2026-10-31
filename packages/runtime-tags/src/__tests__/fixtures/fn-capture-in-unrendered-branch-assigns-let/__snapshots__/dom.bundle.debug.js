// components/child.marko
const $template$1 = "<button>go</button>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $input_onClick__script = _script("__tests__/components/child.marko_0_input_onClick#3", ($scope) => _on($scope["#button/0"], "click", $scope.input_onClick));
const $input_onClick = /*@__PURE__*/ _const("input_onClick", $input_onClick__script);
const $input$1 = ($scope, input) => $input_onClick($scope, input.onClick);
var child_default = /*@__PURE__*/ _template("__tests__/components/child.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<!><!><span> </span>";
const $walks = "b%bD l";
const $if_content__inc = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_onClick($scope["#childScope/0"], $scope._.inc));
const $if_content__setup = $if_content__inc;
const $inc2 = /*@__PURE__*/ _const("inc", $if_content__inc);
const $input_step__OR__count = /*@__PURE__*/ _or(7, ($scope) => $inc2($scope, $inc($scope)));
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_step__OR__count($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $input_step = /*@__PURE__*/ _const("input_step", $input_step__OR__count);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_step($scope, input.step);
	$input_show($scope, input.show);
};
const $inc = ($scope) => () => {
	$count($scope, $scope.count + $scope.input_step);
};
_resumed["__tests__/template.marko_0/inc"] = $inc;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
