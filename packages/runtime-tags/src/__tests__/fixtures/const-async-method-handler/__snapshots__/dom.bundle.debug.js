// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $loaded = /*@__PURE__*/ _let("loaded/2", ($scope) => _text($scope["#text/1"], $scope.loaded));
const $handlers2 = ($scope, handlers) => $handlers_load($scope, handlers.load);
function $setup($scope) {
	$loaded($scope, "no");
	$handlers2($scope, { load: $handlers($scope) });
}
const $handlers_load__script = _script("__tests__/template.marko_0_handlers_load", ($scope) => _on($scope["#button/0"], "click", $scope.handlers_load));
const $handlers_load = /*@__PURE__*/ _const("handlers_load", $handlers_load__script);
function $handlers($scope) {
	return async function() {
		$loaded($scope, await Promise.resolve("yes"));
	};
}
_resume("__tests__/template.marko_0/handlers", $handlers);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
