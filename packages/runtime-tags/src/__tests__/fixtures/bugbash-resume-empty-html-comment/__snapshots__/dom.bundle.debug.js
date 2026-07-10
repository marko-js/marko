// template.marko
const $template = "<button>go</button><div><!----></div>";
const $walks = " bD l";
const $c = /*@__PURE__*/ _let("c/2", ($scope) => _text($scope["#comment/1"], `${_to_text($scope.c)}`));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, "secret");
}));
function $setup($scope) {
	$c($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
