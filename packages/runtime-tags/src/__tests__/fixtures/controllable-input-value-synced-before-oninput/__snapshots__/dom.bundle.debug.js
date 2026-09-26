// template.marko
const $template = "<input class=first><input class=ctrl>";
const $walks = " b b";
const $q = /*@__PURE__*/ _let("q/2", ($scope) => _attr_input_value($scope, "#input/1", $scope.q, $valueChange($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#input/0"], "input", function() {});
	_attr_input_value_script($scope, "#input/1");
	_on($scope["#input/1"], "input", function() {
		console.log("q=" + $scope.q);
	});
});
function $setup($scope) {
	$q($scope, "");
	$setup__script($scope);
}
const $valueChange = ($scope) => (_new_q) => {
	$q($scope, _new_q);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
