// template.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $bar = /*@__PURE__*/ _let("bar/3", ($scope) => _text($scope["#text/2"], $scope.bar));
const $pattern2 = ($scope, $pattern) => {
	$value2($scope, $pattern["12345678901234567890"]);
	$2345678901234567890Change2($scope, $pattern["12345678901234567890Change"]);
};
function $setup($scope) {
	$bar($scope, 0);
	$pattern2($scope, {
		"12345678901234567890": 1,
		"12345678901234567890Change": $value($scope)
	});
}
const $value2 = ($scope, value) => _text($scope["#text/1"], value);
const $2345678901234567890Change2__script = _script("__tests__/template.marko_0_$2345678901234567890Change#6", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$2345678901234567890Change($scope.bar + 1);
}));
const $2345678901234567890Change2 = /*@__PURE__*/ _const("$2345678901234567890Change", $2345678901234567890Change2__script);
const $value = ($scope) => function(v) {
	$bar($scope, v);
};
_resumed["__tests__/template.marko_0/value"] = $value;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
