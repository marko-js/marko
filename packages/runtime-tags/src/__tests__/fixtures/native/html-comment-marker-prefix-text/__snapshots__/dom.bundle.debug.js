// template.marko
const $template = "<button> </button><!----><!---->";
const $walks = " D l b b";
const $count = /*@__PURE__*/ _let("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#comment/2"], `${_to_text("M_$1 #text/1")}`);
	_text($scope["#comment/3"], `${_to_text("M_$1 b")}`);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
