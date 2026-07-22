// template.marko
const $template = "<button>bump</button><div>static body</div>";
const $walks = " c";
const $message = /*@__PURE__*/ _let("message/1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.message + "!");
}));
function $setup($scope) {
	$message($scope, "hi");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " c", $setup);
