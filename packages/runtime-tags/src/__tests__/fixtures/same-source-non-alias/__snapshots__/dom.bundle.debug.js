// template.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
function createWrapper(a) {
	return { a };
}
const $pattern2 = ($scope, $pattern) => $a($scope, $pattern.a);
const $count = /* @__PURE__ */ _let("count/3", ($scope) => $pattern2($scope, createWrapper($scope.count)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $a = ($scope, a) => {
	_text($scope["#text/1"], a);
	$b($scope, a);
};
const $b = ($scope, a) => _text($scope["#text/2"], a);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
