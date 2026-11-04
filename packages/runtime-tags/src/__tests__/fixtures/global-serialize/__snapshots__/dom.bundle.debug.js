// template.marko
const $template = "<button> </button><pre></pre>";
const $walks = " D l b";
const $count = /*@__PURE__*/ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count + _global_read($scope.$global, "brand")));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_el_read($scope["#pre/2"]).textContent = JSON.stringify($scope.$global);
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
