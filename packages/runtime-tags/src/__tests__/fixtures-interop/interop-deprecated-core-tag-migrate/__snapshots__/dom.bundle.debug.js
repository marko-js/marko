// template.marko
const $template = "<button id=inc>inc</button><div id=out></div>";
const $walks = " c";
const $input_greeting__OR__count__script = _script("__tests__/template.marko_0_greeting_count", ($scope) => document.getElementById("out").textContent = `${$scope.greeting} ${$scope.count}`);
const $input_greeting__OR__count = /*@__PURE__*/ _or(5, $input_greeting__OR__count__script);
const $count = /*@__PURE__*/ _let("count/4", $input_greeting__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $greeting = /*@__PURE__*/ _const("greeting", $input_greeting__OR__count);
const $input = ($scope, input) => $greeting($scope, input.greeting);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " c", $setup, $input);
