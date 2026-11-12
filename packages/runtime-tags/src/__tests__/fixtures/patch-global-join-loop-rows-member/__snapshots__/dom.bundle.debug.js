// template.marko
const $template = "<button class=dec>-</button><button class=inc>+</button><ul></ul>";
const $walks = " b b b";
const $global_o_key = /*@__PURE__*/ _global_key("o", "x");
const $for_content__$global_o = /*@__PURE__*/ _global_for($global_o_key, "#ul/2", "__tests__/template.marko_1_$global_o#0:11/subscribe", ($scope) => _text($scope["#text/1"], $scope.$global.o.x));
const $for_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope["#LoopKey"]);
	$for_content__$global_o($scope);
};
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/2", "<li><!>:<!></li>", "D%c%", $for_content__setup);
const $n = _let("n/3", ($scope) => $for($scope, [$scope.n]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$n($scope, +$scope.n - 1);
	});
	_on($scope["#button/1"], "click", function() {
		$n($scope, +$scope.n + 1);
	});
});
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
