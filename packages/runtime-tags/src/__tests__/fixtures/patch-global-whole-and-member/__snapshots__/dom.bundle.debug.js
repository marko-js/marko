// template.marko
const $template = "<main><p> </p></main><button> </button>";
const $walks = " E m D l";
const $n = _let("n/4", ($scope) => _text($scope["#text/3"], $scope.n));
const $global_data_key = /*@__PURE__*/ _global_key("data", "title");
const $global_data = /*@__PURE__*/ _global_closure($global_data_key, "__tests__/template.marko_0_$global_data#6/subscribe", ($scope) => _text($scope["#text/1"], $scope.$global.data.title));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$global2__script($scope);
	$n($scope, 0);
	$setup__script($scope);
	$global_data($scope);
}
const $global_key = /*@__PURE__*/ _global_key();
const $global2 = /*@__PURE__*/ _global_closure($global_key);
const $global2__script = _global_script("__tests__/template.marko_0_$global#5", ($scope) => {
	{
		const g = $scope.$global;
		_el_read($scope["#main/0"]).dataset.runs = String(+(_el_read($scope["#main/0"]).dataset.runs || 0) + 1);
	}
}, $global2);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
