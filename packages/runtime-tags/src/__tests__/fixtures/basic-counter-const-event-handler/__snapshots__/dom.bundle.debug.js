// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $increment2__script = _script("__tests__/template.marko_0_increment", ($scope) => _on($scope["#button/0"], "click", $scope.increment));
const $increment2 = /*@__PURE__*/ _const("increment", $increment2__script);
const $clickCount = /*@__PURE__*/ _let("clickCount/2", ($scope) => {
	_text($scope["#text/1"], $scope.clickCount);
	$increment2($scope, $increment($scope));
});
function $setup($scope) {
	$clickCount($scope, 0);
}
function $increment($scope) {
	return function() {
		$clickCount($scope, $scope.clickCount + 1);
	};
}
_resume("__tests__/template.marko_0/increment", $increment);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
