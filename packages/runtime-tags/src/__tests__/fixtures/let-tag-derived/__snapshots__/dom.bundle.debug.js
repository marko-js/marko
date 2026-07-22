// template.marko
const $template = "<button>Increment</button><!> <!>";
const $walks = " b%c%b";
const $b = /*@__PURE__*/ _let("b/6", /*@__PURE__*/ _render(($scope) => _text($scope["#text/2"], $scope.b)));
const $a__render = /*@__PURE__*/ _render(($scope, a) => _text($scope["#text/1"], a));
const $a = ($scope, a) => {
	$a__render($scope, a);
	$b($scope, a * 2);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", () => $b($scope, $scope.b + 1) - 1));
const $setup = $setup__script;
const $input = ($scope, input) => $a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
