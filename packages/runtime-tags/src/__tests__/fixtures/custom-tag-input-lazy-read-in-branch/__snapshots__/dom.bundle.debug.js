// tags/press-button/index.marko
const $template$1 = "<button class=act>press</button>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_onPress__script = _script("__tests__/tags/press-button/index.marko_0_input_onPress#3", ($scope) => _on($scope["#button/0"], "click", $scope.input_onPress));
const $input_onPress = /*@__PURE__*/ _const("input_onPress", $input_onPress__script);
const $input$1 = ($scope, input) => $input_onPress($scope, input.onPress);
var press_button_default = /*@__PURE__*/ _template("__tests__/tags/press-button/index.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<button class=inc>inc</button><!><div class=log> </div>";
const $walks = " b%bD l";
const $if_content__setup = ($scope) => $input_onPress($scope["#childScope/0"], $onPress($scope));
const $count = /*@__PURE__*/ _let("count/6");
const $log = /*@__PURE__*/ _let("log/7", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$log($scope, "");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
const $onPress = ($scope) => function() {
	$log($scope._, `${$scope._.log}[${$scope._.count}]`);
};
_resumed["__tests__/template.marko_1/onPress"] = $onPress;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
