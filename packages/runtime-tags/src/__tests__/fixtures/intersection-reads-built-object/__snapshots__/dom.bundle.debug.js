// template.marko
const $template = "<p> </p><button>+</button>";
const $walks = "D l b";
const $count__OR__b = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/0"], $scope.count + ":" + JSON.stringify($scope.b)));
const $count = /*@__PURE__*/ _let("count/5", $count__OR__b);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $b = /*@__PURE__*/ _const("b", $count__OR__b);
const $input_x = ($scope, input_x) => $b($scope, { value: input_x });
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
