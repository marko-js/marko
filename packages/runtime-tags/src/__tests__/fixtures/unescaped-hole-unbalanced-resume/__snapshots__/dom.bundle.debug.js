// template.marko
const $template = "<div> <span>after</span></div><button>set</button>";
const $walks = "D l b";
const $html = /*@__PURE__*/ _let("html/2", ($scope) => _html($scope, $scope.html, "#text/0"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$html($scope, "closed");
}));
function $setup($scope) {
	$html($scope, "<b>open");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
