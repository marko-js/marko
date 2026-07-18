// v:template.marko.comptime.1fb1ff30.js
const _fn0 = (step) => function stepper(n) {
	return n + step;
};

// template.marko
const $template = "<button>count <!></button>";
const $walks = " Db%l";
const stepper = _fn0(3);
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, stepper($scope.count));
}));
function $setup($scope) {
	$count($scope, 5);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
