// template.marko
const $template = "<!><!><button id=toggle>Toggle</button>";
const $walks = "b%b b";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _lifecycle($scope, { onDestroy: function() {
	throw new Error("onDestroy failed");
} }));
const $if_content__setup = $if_content__setup__script;
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, false);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
