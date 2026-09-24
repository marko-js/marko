// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $clickCount = /*@__PURE__*/ _let("clickCount/2", ($scope) => _text($scope["#text/1"], $scope.clickCount));
const $increment2__script = _script("__tests__/template.marko_0_increment#3", ($scope) => _on($scope["#button/0"], "click", $scope.increment ||= $increment($scope)));
const $increment2 = /*@__PURE__*/ _const("increment", $increment2__script);
function $setup($scope) {
	$clickCount($scope, 0);
	$increment2($scope, $increment($scope));
}
const $increment = ($scope) => function() {
	$clickCount($scope, +$scope.clickCount + 1);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
