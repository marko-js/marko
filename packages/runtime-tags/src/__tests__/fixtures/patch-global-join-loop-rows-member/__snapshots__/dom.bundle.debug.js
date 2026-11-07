// template.marko
const $template = "<button class=dec>-</button><button class=inc>+</button><ul></ul>";
const $walks = " b b b";
const $for_content__$global_o_x = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_$global_o_x#0:12/setup", "#ul/2", ($scope) => _text($scope["#text/1"], $scope.$global.o.x), 4);
const $for_content__setup = ($scope) => {
	$for_content__$global_o_x._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/2", "<li><!>:<!></li>", "D%c%", $for_content__setup);
const $n = _let("n/3", ($scope) => $for($scope, [$scope.n]));
const $global_o_x = _fill_global_path_resume("__tests__/template.marko_0_$global_o_x#12/subscribe", $for_content__$global_o_x, "o", "x");
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
	$global_o_x($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
