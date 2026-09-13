// template.marko
const $template = "<ul><!><!></ul><button>+</button>";
const $walks = "D%b%l b";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[1]);
const $for = /*@__PURE__*/ _for_in("#text/0", "<li><!>=<!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $input_label__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_label", /*@__PURE__*/ _or(8, ($scope) => $for($scope, [{
	a: $scope.input_label,
	b: $scope.count
}])));
const $count = /*@__PURE__*/ _let("count/7", $input_label__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", $input_label__OR__count);
const $for2 = /*@__PURE__*/ _for_until("#text/1", "<li> </li>", "D ");
const $input_on = ($scope, input_on) => $for2($scope, [
	input_on ? 2 : 1,
	0,
	1
]);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_on($scope, input.on);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
