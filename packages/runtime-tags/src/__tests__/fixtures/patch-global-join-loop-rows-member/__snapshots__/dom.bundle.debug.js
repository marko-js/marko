// template.marko
const $template = "<button class=dec>-</button><button class=inc>+</button><ul></ul>";
const $walks = " b b b";
const $for_content__setup__$global_o = /*@__PURE__*/ _fill_global_path_for("__tests__/template.marko_1_$global_o#0:11", "#ul/2", ($scope) => _text($scope["#text/1"], $scope.$global.o.x), "o", "x");
const $for_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope["#LoopKey"]);
	$for_content__setup__$global_o($scope);
};
const $for = /*@__PURE__*/ _for_until_unkeyed("#ul/2", "<li><!>:<!></li>", "D%c%", $for_content__setup);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => $for($scope, [
	$scope.n,
	0,
	1
]));
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
