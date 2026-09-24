// template.marko
const $Picker_content__walks = " D l", $Picker_content__template = "<button> </button>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<p> </p>`)($Picker_content__template, $Picker_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&D l`)($Picker_content__walks, $Picker_content__walks);
const $Picker_content__input_name = ($scope, input_name) => {
	_attr_class($scope["#button/0"], input_name);
	_text($scope["#text/1"], input_name);
};
const $Picker_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onPick();
}));
const $Picker_content__setup = /*@__PURE__*/ _child_setup($Picker_content__setup__script);
const $Picker_content__tag_input_onPick = /*@__PURE__*/ _const("input_onPick");
const $Picker_content__$params = ($scope, $params2) => $Picker_content__input($scope, $params2[0]);
const $Picker_content__input = ($scope, input) => {
	$Picker_content__input_name($scope, input.name);
	$Picker_content__tag_input_onPick($scope, input.onPick);
};
const $n = /*@__PURE__*/ _let("n/3", ($scope) => _text($scope["#text/2"], $scope.n));
const $inc2 = ($scope, inc) => $Picker_content__tag_input_onPick($scope["#childScope/1"], inc);
function $setup($scope) {
	$Picker_content__setup._($scope["#childScope/0"], $scope);
	$Picker_content__input_name($scope["#childScope/0"], "inline");
	$Picker_content__tag_input_onPick($scope["#childScope/0"], $onPick($scope));
	$Picker_content__setup._($scope["#childScope/1"], $scope);
	$Picker_content__input_name($scope["#childScope/1"], "const");
	$n($scope, 0);
	$inc2($scope, $inc($scope));
}
const $inc = ($scope) => function() {
	$n($scope, +$scope.n + 1);
};
const $onPick = ($scope) => function() {
	$n($scope, $scope.n + 10);
};
_resumed["__tests__/template.marko_0/inc"] = $inc;
_resumed["__tests__/template.marko_0/onPick"] = $onPick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
