// template.marko
const $template = "<div> </div><button>set</button>";
const $walks = "D l b";
const $value = /*@__PURE__*/ _let("value/2", ($scope) => _html($scope, $scope.value, "#text/0"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope, "<em>c</em>");
}));
function $setup($scope) {
	$value($scope, "a <strong>b</strong> c");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
