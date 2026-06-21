// template.marko
const $template = "<title></title><button>go</button>";
const $walks = " b b";
const $name = /* @__PURE__ */ _let("name/2", ($scope) => _text_content($scope["#title/0"], `back\\slash ${_to_text($scope.name)}`));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$name($scope, "earth");
}));
function $setup($scope) {
	$name($scope, "world");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
