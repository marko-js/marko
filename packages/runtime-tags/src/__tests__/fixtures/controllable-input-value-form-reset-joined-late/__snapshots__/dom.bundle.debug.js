// template.marko
const $template = "<button class=show></button><form><!><input><!><button type=reset class=reset></button></form><p> </p>";
const $walks = " bD%b b%lD l";
const $show = /*@__PURE__*/ _show("#text/3", "#text/1");
const $visible = /*@__PURE__*/ _let("visible/5", ($scope) => $show($scope, $scope.visible));
const $v = /*@__PURE__*/ _let("v/6", ($scope) => {
	_attr_input_value($scope, "#input/2", $scope.v, $valueChange($scope));
	_text($scope["#text/4"], $scope.v);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$visible($scope, true);
	});
	_attr_input_value_script($scope, "#input/2");
});
function $setup($scope) {
	$visible($scope, false);
	$v($scope, "init");
	$setup__script($scope);
}
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
