// template.marko
const $template = "<p> </p><button> </button>";
const $walks = "D l D l";
const $uid__$global_x = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_0_uid#6_$global_x#6", ($scope) => _text($scope["#text/0"], $scope.uid + "-" + _global_read($scope.$global, "x")), "x");
const $uid = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _let("uid/6", $uid__$global_x));
const $input_id = $uid;
const $n = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_id($scope, input.id);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
