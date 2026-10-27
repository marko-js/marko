// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
function brandOf(g) {
	return g.brand + "!";
}
const $if_content__setup__$global = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global#0:6", ($scope) => _text($scope["#text/0"], brandOf($scope.$global)), "");
const $if_content__setup = $if_content__setup__$global;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
