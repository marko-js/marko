// tags/press-button/index.marko
const $template$1 = "<button class=act>press</button>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_onPress__script = _script("__tests__/tags/press-button/index.marko_0_input_onPress", ($scope) => _on($scope["#button/0"], "click", $scope.input_onPress));
const $input_onPress = /* @__PURE__ */ _const("input_onPress", $input_onPress__script);
const $input = ($scope, input) => $input_onPress($scope, input.onPress);
var press_button_default = /* @__PURE__ */ _template("__tests__/tags/press-button/index.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button class=inc>inc</button>${_w0}<div class=log> </div>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&D l`)(" b");
const $count = /* @__PURE__ */ _let("count/3");
const $log = /* @__PURE__ */ _let("log/4", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_onPress($scope["#childScope/1"], $onPress($scope));
	$count($scope, 0);
	$log($scope, "");
	$setup__script($scope);
}
function $onPress($scope) {
	return function() {
		$log($scope, `${$scope.log}[${$scope.count}]`);
	};
}
_resume("__tests__/template.marko_0/onPress", $onPress);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
