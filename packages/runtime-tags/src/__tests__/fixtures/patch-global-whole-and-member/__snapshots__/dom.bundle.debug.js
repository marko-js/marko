// template.marko
const $template = "<main><p> </p></main><button> </button>";
const $walks = " E m D l";
const $n = _let("n/4", ($scope) => _text($scope["#text/3"], $scope.n));
const $global_data_key = /*@__PURE__*/ _global_key("$global_data/6", "data", "title");
const $global_data = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_data#6/subscribe", $global_data_key, ($scope) => _text($scope["#text/1"], $scope.$global.data.title));
const $global_key = /*@__PURE__*/ _global_key("$global/5/5");
const $global2 = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global#5/subscribe", $global_key, ($scope) => $global2__script($scope));
const $global2__script = _global_script("__tests__/template.marko_0_$global#5", ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#main/0"]).dataset.runs = String(+(_el_read($scope["#main/0"]).dataset.runs || 0) + 1);
	}
}, $global2);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$global2($scope);
	$setup__script($scope);
	$global_data($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
