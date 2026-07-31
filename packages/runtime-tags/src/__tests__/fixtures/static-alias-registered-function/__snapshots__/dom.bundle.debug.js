// template.marko
const $template = "<button>go</button><div> </div>";
const $walks = " bD l";
const base = $base;
const alias = base;
const $fn = /*@__PURE__*/ _let("fn/2");
const $message = /*@__PURE__*/ _let("message/3", ($scope) => _text($scope, "#text/1", $scope.message));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$message($scope, $scope.fn($scope.message));
}));
function $setup($scope) {
	$fn($scope, alias);
	$message($scope, "Hello");
	$setup__script($scope);
}
function $base(message) {
	return message.toUpperCase() + "!";
}
_resume("__tests__/template.marko_0/base", $base);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
