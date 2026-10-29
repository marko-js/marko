// template.marko
const $template = "<main><p> </p></main><button> </button>";
const $walks = " E m D l";
const $n = _let("n/4", ($scope) => _text($scope["#text/3"], $scope.n));
const $setup__$global_data = /*@__PURE__*/ _fill_global_path_join("__tests__/template.marko_0_$global_data#6", ($scope) => _text($scope["#text/1"], $scope.$global.data.title), "data", "title");
const $setup__$global__script = _fill_global_script("__tests__/template.marko_0_$global#5", ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#main/0"]).dataset.runs = String(+(_el_read($scope["#main/0"]).dataset.runs || 0) + 1);
	}
}, "");
const $setup__$global = $setup__$global__script;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__$global($scope);
	$setup__script($scope);
	$setup__$global_data($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
