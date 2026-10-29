// template.marko
const $template = "<button> </button><ul></ul>";
const $walks = " D l b";
const $for_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_n#0:6/init", /*@__PURE__*/ _for_closure("#ul/2", ($scope) => _text($scope["#text/2"], $scope._.n)));
const $for_content__setup__$global_x = /*@__PURE__*/ _fill_global_for("__tests__/template.marko_1_$global_x#0:12", "#ul/2", ($scope) => _text($scope["#text/1"], $scope.$global.x), "x");
const $for_content__setup = ($scope) => {
	$for_content__n._($scope);
	$for_content__setup__$global_x($scope);
};
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
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
