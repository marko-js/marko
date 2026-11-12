// template.marko
const $template = "<button> </button><ul></ul>";
const $walks = " D l b";
const $for_content__n = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_n#0:6/setup", "#ul/2", ($scope) => _text($scope["#text/2"], $scope._.n), 7);
const $for_content__$global_x = /*@__PURE__*/ _fill_global("__tests__/template.marko_1_$global_x#0:12/subscribe", ($scope) => _text($scope["#text/1"], $scope.$global.x), "x");
const $for_content__setup = ($scope) => {
	$for_content__n._($scope);
	$for_content__$global_x($scope);
};
const $for_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $n = _let("n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$for_content__n($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/2", "<li><!>:<!>:<!></li>", "D%c%c%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
