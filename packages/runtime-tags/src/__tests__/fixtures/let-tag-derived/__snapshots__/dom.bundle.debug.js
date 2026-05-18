// template.marko
const $template = "<button>Increment</button><!> <!>";
const $walks = " b%c%b";
const $setup = () => {};
const $b__script = _script("__tests__/template.marko_0_b", ($scope) => _on($scope["#button/0"], "click", () => $b($scope, $scope.b + 1) - 1));
const $b = /* @__PURE__ */ _let("b/6", ($scope) => {
	_text($scope["#text/2"], $scope.b);
	$b__script($scope);
});
const $a = ($scope, a) => {
	_text($scope["#text/1"], a);
	$b($scope, a * 2);
};
const $input = ($scope, input) => $a($scope, input.a);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
