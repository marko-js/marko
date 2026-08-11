// template.marko
const $template = "<button>b</button><div> </div>";
const $walks = " bD l";
const key = "bump";
const $handlers2__script = _script("__tests__/template.marko_0_handlers#3", ($scope) => _on($scope["#button/0"], "click", $scope.handlers[key]));
const $handlers2 = /*@__PURE__*/ _const("handlers", $handlers2__script);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$handlers2($scope, { [key]: $handlers($scope) });
});
function $setup($scope) {
	$n($scope, 0);
}
const $handlers = ($scope) => function() {
	$n($scope, +$scope.n + 1);
};
_resume("__tests__/template.marko_0/handlers", $handlers);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
