// template.marko
const $template = "<button class=n> </button><ul></ul>";
const $walks = " D l b";
const $for_content__n = /*@__PURE__*/ _init_for_closure("__tests__/template.marko_1_n#6/init", "#ul/2", ($scope) => _text($scope["#text/1"], $scope._.n));
const $for_content__setup = $for_content__n;
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
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
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/2", "<li><!>:<!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
