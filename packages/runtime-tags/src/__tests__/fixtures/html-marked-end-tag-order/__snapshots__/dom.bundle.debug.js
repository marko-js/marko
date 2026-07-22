// template.marko
const $template = "<html><head><title>t</title></head><body><button> </button></body></html>";
const $walks = " DbD D n";
const $input_lang = ($scope, input_lang) => _attr($scope["#html/0"], "lang", input_lang);
const $n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_lang($scope, input.lang);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
