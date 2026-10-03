// template.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $bar = /*@__PURE__*/ _let("bar/3", ($scope) => _text($scope["#text/2"], $scope.bar));
const $pattern2 = ($scope, $pattern) => {
	$value($scope, $pattern["my-key"]);
	$mykeyChange2($scope, $pattern["my-keyChange"]);
};
function $setup($scope) {
	$bar($scope, 0);
	$pattern2($scope, {
		"my-key": 1,
		"my-keyChange": $myKeyValue($scope)
	});
}
const $value = ($scope, value) => _text($scope["#text/1"], value);
const $mykeyChange2__script = _script("__tests__/template.marko_0_$mykeyChange#6", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.$mykeyChange($scope.bar + 1);
}));
const $mykeyChange2 = /*@__PURE__*/ _const("$mykeyChange", $mykeyChange2__script);
const $myKeyValue = ($scope) => function(v) {
	$bar($scope, v);
};
_resumed["__tests__/template.marko_0/myKeyValue"] = $myKeyValue;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
