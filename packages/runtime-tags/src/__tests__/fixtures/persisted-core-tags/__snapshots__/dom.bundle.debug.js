// template.marko
const $template = "<main><p> </p><button>+</button></main>";
const $walks = " E l l";
const $input_value__OR__count__script = _script("__tests__/template.marko_0_input_value#5_count#7", ($scope) => _lifecycle($scope, {
	onMount: function() {
		$count($scope, +$scope.count + 1);
	},
	onUpdate: function() {
		$count($scope, $scope.count + 10);
	},
	value: $scope.input_value
}));
const $input_value__OR__count = /*@__PURE__*/ _or(8, $input_value__OR__count__script);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_value__OR__count($scope);
});
const $uid = ($scope, uid) => _attr($scope["#main/0"], "data-id", uid);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$uid($scope, _id($scope));
	$setup__script($scope);
}
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__count);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => console.log($scope.input_title));
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
