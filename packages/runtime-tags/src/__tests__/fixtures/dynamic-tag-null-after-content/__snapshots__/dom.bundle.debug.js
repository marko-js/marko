// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__x = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.x > 9 ? "div" : null));
const $if_content__setup = $if_content__x;
const $if = /*@__PURE__*/ _if("#text/2", "<b>outer</b><!><!>", "b%", $if_content__setup);
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	_text($scope, "#text/1", $scope.x);
	$if($scope, $scope.x % 2 === 0 ? 0 : 1);
	$if_content__x($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
