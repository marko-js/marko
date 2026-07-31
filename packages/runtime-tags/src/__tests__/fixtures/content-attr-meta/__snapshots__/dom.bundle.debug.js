// template.marko
const $template = "<meta property=og:image:width content=1200><meta property=og:image:height><button>resize</button>";
const $walks = "b b b";
const $height = /*@__PURE__*/ _let("height/2", ($scope) => _attr($scope, "#meta/0", "content", $scope.height));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$height($scope, 1080);
}));
function $setup($scope) {
	$height($scope, 630);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
