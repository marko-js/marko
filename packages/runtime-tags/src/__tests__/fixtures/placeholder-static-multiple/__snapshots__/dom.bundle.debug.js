// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $mounted = /*@__PURE__*/ _let("mounted/1", ($scope) => _text($scope["#text/0"], $scope.mounted ? `${_to_text$1("A")}B${_to_text$1($scope.mounted && "C")}D` : ""));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $mounted($scope, true));
function $setup($scope) {
	$mounted($scope, undefined);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
