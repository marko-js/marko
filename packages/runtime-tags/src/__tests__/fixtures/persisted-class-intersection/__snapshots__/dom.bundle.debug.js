// template.marko
const $template = "<main><button>+</button><span>parity</span><!></main>";
const $walks = "D b b%l";
const $if_content__input_tone = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_tone", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _attr_class($scope["#em/0"], $scope._.input_tone)));
const $if_content__setup = $if_content__input_tone;
const $input_tone__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_tone", /*@__PURE__*/ _or(8, ($scope) => _attr_class($scope["#button/0"], [
	"btn",
	$scope.input_tone,
	$scope.count % 2 && "odd"
])));
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_attr_class($scope["#span/1"], $scope.count % 2 ? "odd" : "even");
	$input_tone__OR__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_tone = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_tone", ($scope) => {
	$input_tone__OR__count($scope);
	$if_content__input_tone($scope);
});
const $if = /*@__PURE__*/ _if("#text/2", "<em>note</em>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_tone($scope, input.tone);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
