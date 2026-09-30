// template.marko
const $template = "<input><button>strict</button>";
const $walks = " b b";
const $pattern = ($scope, pattern) => _attr($scope["#input/0"], "pattern", pattern);
const $source = /*@__PURE__*/ _let("source/2", ($scope) => $pattern($scope, new RegExp($scope.source)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$source($scope, "^b+$");
}));
function $setup($scope) {
	$source($scope, "^a+$");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
