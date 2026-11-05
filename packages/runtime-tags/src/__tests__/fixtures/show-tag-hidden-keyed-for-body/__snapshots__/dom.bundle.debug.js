// template.marko
const $template = "<button id=t>t</button><button id=i>i</button><div id=c>x <!><!><i>tail</i><!> y</div>";
const $walks = " b bDb%b%c%l";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $show = /*@__PURE__*/ _show("#text/4", "#text/2");
const $visible = /*@__PURE__*/ _let("visible/5", ($scope) => $show($scope, $scope.visible));
const $for = /*@__PURE__*/ _for_of("#text/3", "<b> </b>", "D ", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/6", ($scope) => $for($scope, [$scope.items, (n) => n]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$visible($scope, !$scope.visible);
	});
	_on($scope["#button/1"], "click", function() {
		$items($scope, [0, 1]);
	});
});
function $setup($scope) {
	$visible($scope, false);
	$items($scope, [1]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
