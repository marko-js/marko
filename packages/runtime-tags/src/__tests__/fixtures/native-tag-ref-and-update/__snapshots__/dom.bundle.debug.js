// template.marko
const $template = "<button>Initial</button>";
const $walks = " b";
const $btn_getter = _el("__tests__/template.marko_0_#button", "#button/0");
const $count = /*@__PURE__*/ _let("count/1", ($scope) => _attr($scope["#button/0"], "data-count", $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => (0, $btn_getter($scope))().textContent = "after");
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
