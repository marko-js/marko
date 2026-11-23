// template.marko
const $template = "<button><!>|<!></button>";
const $walks = " D%c%l";
const $a = /*@__PURE__*/ _let_change("a/6", ($scope) => _text($scope["#text/1"], $scope.a));
const $b = /*@__PURE__*/ _let_change("b/8", ($scope) => _text($scope["#text/2"], $scope.b));
const $input_on = ($scope, input_on) => {
	$a($scope, 1, input_on ? "log" : "");
	$b($scope, 1, input_on ? "log" : $valueChange);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, +$scope.a + 1);
	$b($scope, +$scope.b + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_on($scope, input.on);
function $valueChange(next) {
	return console.log(next);
}
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
