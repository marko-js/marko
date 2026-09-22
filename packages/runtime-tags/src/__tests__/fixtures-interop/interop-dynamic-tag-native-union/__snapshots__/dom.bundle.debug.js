// template.marko
const $template = "<button id=tags> </button><section>static: not registered</section><!><!>";
const $walks = " D lb%c";
const $count2h2h1_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "state driven string: not registered");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $count2h2h1_content);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$dynamicTag($scope, $scope.count % 2 ? "h2" : "h1");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
