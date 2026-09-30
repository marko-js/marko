// template.marko
const $template = "<button id=t>t</button><button id=i>i</button><div id=c>x <!><!><!><!> y</div>";
const $walks = " b bDb%b%b%b%l";
const $show = /*@__PURE__*/ _show("#text/5", "#text/2", "#text/4");
const $visible = /*@__PURE__*/ _let("visible/6", ($scope) => $show($scope, $scope.visible));
const $if = /*@__PURE__*/ _if("#text/3", "<b>B</b>");
const $inner = /*@__PURE__*/ _let("inner/7", ($scope) => $if($scope, $scope.inner ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$visible($scope, !$scope.visible);
	});
	_on($scope["#button/1"], "click", function() {
		$inner($scope, !$scope.inner);
	});
});
function $setup($scope) {
	$visible($scope, true);
	$inner($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
