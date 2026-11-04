// template.marko
const $template = "<p> </p><input><!><button> </button>";
const $walks = "D l b%b D l";
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/2", "<em> </em>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	_text($scope["#text/4"], $scope.count);
	$if($scope, $scope.count ? 0 : 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/1");
	_on($scope["#button/3"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/0"], $scope.input_label);
	_attr_input_value($scope, "#input/1", $scope.input_label, $valueChange($scope));
	$if_content__input_label($scope);
});
const $input = ($scope, input) => $input_label($scope, input.label);
const $valueChange = ($scope) => function(v) {
	console.log(v + ":" + $scope.input_label);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
