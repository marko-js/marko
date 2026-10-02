// template.marko
const $template = "<!----><!----><!----><!----><button>reveal</button>";
const $walks = " b b c b";
const $text__OR__raw = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#comment/2"], `${_to_text($scope.text)}${_to_text($scope.raw)}`));
const $text = /*@__PURE__*/ _let("text/4", ($scope) => {
	_text($scope["#comment/0"], $scope.text);
	$text__OR__raw($scope);
});
const $raw = /*@__PURE__*/ _let("raw/5", ($scope) => {
	_text($scope["#comment/1"], $scope.raw);
	$text__OR__raw($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$text($scope, "shown");
	$raw($scope, "raw");
}));
function $setup($scope) {
	$text($scope, "");
	$raw($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
