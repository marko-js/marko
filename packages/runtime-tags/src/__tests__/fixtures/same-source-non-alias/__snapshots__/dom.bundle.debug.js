// template.marko
const $template = "<button><!> <!></button>";
const $walks = " D%c%l";
function createWrapper(a) {
	return { a };
}
const $pattern2 = ($scope, $pattern) => $a($scope, $pattern.a);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	$pattern2($scope, createWrapper($scope.count));
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $a = ($scope, a) => {
	_text($scope["#text/1"], a);
	$b($scope, a);
};
const $b = ($scope, a) => _text($scope["#text/2"], a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
