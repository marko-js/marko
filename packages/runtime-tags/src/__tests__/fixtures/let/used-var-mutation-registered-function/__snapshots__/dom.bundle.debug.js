// template.marko
const $template = "<button>Click <!></button>";
const $walks = " Db%l";
const identity = (fn) => fn;
const $value = /*@__PURE__*/ _let("value/2", ($scope) => _text($scope["#text/1"], $scope.value));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", identity(() => {
	$value($scope, "updated");
})));
function $setup($scope) {
	$value($scope, "initial");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
