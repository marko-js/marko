// template.marko
const $template = "<button id=add>add</button><button id=grow>grow</button><ul></ul>";
const $walks = " b b b";
const $for_content__label = ($scope, label) => {
	_text($scope["#text/0"], label);
	$for_content__show($scope, label?.length > 1);
};
const $for_content__show = /*@__PURE__*/ _show("#text/1");
const $for_content__$params = ($scope, $params2) => $for_content__label($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/2", "<!><li> </li><!><!>", "bD l%", 0, $for_content__$params);
const $labels = /*@__PURE__*/ _let("labels/3", ($scope) => $for($scope, [$scope.labels]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$labels($scope, [...$scope.labels, "dd"]);
	});
	_on($scope["#button/1"], "click", function() {
		$labels($scope, $scope.labels.map((label) => label + label));
	});
});
function $setup($scope) {
	$labels($scope, [
		"a",
		"bb",
		"c"
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
