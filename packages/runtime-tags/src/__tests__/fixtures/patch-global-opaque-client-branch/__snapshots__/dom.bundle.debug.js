// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
function brandOf(g) {
	return g.brand + "!";
}
const $if_content__$global = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global#0:6/setup", "#text/1", 0, ($scope) => _text($scope["#text/0"], brandOf($scope.$global)));
const $if_content__setup = $if_content__$global;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = _let("open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $global2 = _fill_global_resume("__tests__/template.marko_0_$global#6/subscribe", $if_content__$global, "");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$global2($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
