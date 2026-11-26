// template.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $for_content__inner = /*@__PURE__*/ _closure_get("inner/3");
const $for_content__setup = $for_content__inner;
const $if_content2__inner = /*@__PURE__*/ _closure_get("inner/3");
const $if_content2__setup = $if_content2__inner;
const $legacygreeting_content = _content_resume("__tests__/template.marko_2*content");
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%");
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
