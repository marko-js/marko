// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $loaded = /*@__PURE__*/ _let("loaded/2", ($scope) => _text($scope, "#text/1", $scope.loaded));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", async function() {
	$loaded($scope, await Promise.resolve("yes"));
}));
function $setup($scope) {
	$loaded($scope, "no");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
