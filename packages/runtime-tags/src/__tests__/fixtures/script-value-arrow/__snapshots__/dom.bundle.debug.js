// template.marko
const $template = "<button>inc <!></button>";
const $walks = " Db%l";
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$n($scope, $scope.n + 1);
	});
	console.log($scope.n);
});
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	$n($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
