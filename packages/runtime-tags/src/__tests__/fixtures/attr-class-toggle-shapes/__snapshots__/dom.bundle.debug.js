// template.marko
const $template = "<button>toggle</button><div class=c></div><div></div><div></div><div class=i></div><div class=\"l m l\"></div>";
const $walks = " b b b b c";
const $on = /*@__PURE__*/ _let("on/5", ($scope) => {
	_attr_class_item($scope["#div/1"], "d", $scope.on);
	_attr_class_item($scope["#div/2"], "e", $scope.on);
	_attr_class($scope["#div/3"], ["f", $scope.on ? "g" : "h"]);
	_attr_class_names($scope["#div/4"], "j k", $scope.on);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
