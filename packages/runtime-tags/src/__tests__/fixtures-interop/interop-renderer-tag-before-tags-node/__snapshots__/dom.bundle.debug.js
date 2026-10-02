// template.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/2"], $scope._.count));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><button id=inc> </button>", "b%b D ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $count = /*@__PURE__*/ _let("count/3", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
