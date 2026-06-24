// template.marko
const $template = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
const $walks = " D l D l D l";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 2);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, $scope.count * 3);
	});
	_on($scope["#button/4"], "click", function() {
		$count($scope, $scope.count ** 3);
	});
});
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_text($scope["#text/3"], $scope.count);
	_text($scope["#text/5"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
