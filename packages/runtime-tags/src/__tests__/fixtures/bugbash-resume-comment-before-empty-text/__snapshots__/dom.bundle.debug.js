// template.marko
const $template = "<button>go</button><div><!--hi--> </div>";
const $walks = " bDb l";
const $b = /*@__PURE__*/ _let("b/2", ($scope) => _text($scope["#text/1"], $scope.b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$b($scope, "B");
}));
function $setup($scope) {
	$b($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
