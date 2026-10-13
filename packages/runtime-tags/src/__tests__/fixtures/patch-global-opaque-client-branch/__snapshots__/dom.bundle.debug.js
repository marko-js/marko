// template.marko
const $template = "<button>t</button><!><!>";
const $walks = " b%c";
function brandOf(g) {
	return g.brand + "!";
}
const $if_content__$global = /*@__PURE__*/ _fill_global_join("", "__tests__/template.marko_1_$global#1/global", ($scope) => {
	_text($scope["#text/0"], brandOf($scope.$global));
});
const $if_content__setup = ($scope) => $if_content__$global($scope);
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/2", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
