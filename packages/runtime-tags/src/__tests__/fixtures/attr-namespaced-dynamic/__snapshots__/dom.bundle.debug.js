// template.marko
const $template = "<svg><use></use></svg><div></div><button>Toggle</button>";
const $walks = "D l b b";
const $linked = /*@__PURE__*/ _let("linked/3", ($scope) => {
	_attr_ns($scope["#use/0"], "xlink:href", $scope.linked && "#a", "http://www.w3.org/1999/xlink");
	_attr_ns($scope["#use/0"], "xml:lang", $scope.linked && "en", "http://www.w3.org/XML/1998/namespace");
	_attr_ns($scope["#div/1"], "xml:lang", $scope.linked ? "en" : "fr", "http://www.w3.org/XML/1998/namespace");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$linked($scope, !$scope.linked);
}));
function $setup($scope) {
	$linked($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
