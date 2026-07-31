// template.marko
const $template = "<button id=toggle>toggle</button><!><button id=inc>count <!></button><!><!><!>";
const $walks = " b%b Db%l%b%c";
const $show = /*@__PURE__*/ _show("#text/5", "#text/1", "#text/4");
const $visible = /*@__PURE__*/ _let("visible/6", ($scope) => $show($scope, $scope.visible));
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope, "#text/3", $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$visible($scope, !$scope.visible);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, $scope.count + 1);
	});
});
function $setup($scope) {
	$visible($scope, false);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
