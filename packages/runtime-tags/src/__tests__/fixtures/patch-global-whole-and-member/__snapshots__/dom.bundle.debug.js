// template.marko
const $template = "<main><p> </p></main><button> </button>";
const $walks = " E m D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/4", ($scope) => _text($scope["#text/3"], $scope.n));
const $global2__script = _fill_global_script("__tests__/template.marko_0_$global#5", ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#main/0"]).dataset.runs = String(+(_el_read($scope["#main/0"]).dataset.runs || 0) + 1);
	}
}, "");
const $global2 = /*@__PURE__*/ _fill_global_join("", "__tests__/template.marko_0_$global#5", ($scope) => {
	$global2__script($scope);
	$global_data_title($scope, $scope.$global?.data?.title);
});
const $global_data_title = /*@__PURE__*/ _fill_global_join("data", "__tests__/template.marko_0_$global_data_title#7", ($scope) => _text($scope["#text/1"], $scope.$global.data?.title));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$global2($scope);
	$setup__script($scope);
	$n($scope, 0);
	$global_data_title($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
