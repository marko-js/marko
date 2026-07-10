// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $if = /*@__PURE__*/ _if("#text/0", "<!--M_*note pending--><span>visible</span>", "c");
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$if($scope, $scope.count < 10 ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
