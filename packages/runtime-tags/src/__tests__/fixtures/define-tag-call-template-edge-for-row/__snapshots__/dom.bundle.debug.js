// tags/row.marko
const $Item_content__walks = "D l";
const $Item_content__template = "<li> </li>";
const $template$1 = $Item_content__template;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Item_content__walks);
const $setup$1 = ($_) => {};
const $Item_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $Item_content__$params = ($scope, $params2) => $Item_content__$temp($scope, $params2[0]);
const $Item_content__$temp = ($scope, $temp) => $Item_content__label($scope, $temp.label);
const $input_label = ($scope, input_label) => $Item_content__label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<ul></ul><button id=add>Add</button><button id=remove>Remove</button>";
const $walks = " b b b";
const $for_content__$params = ($scope, $params2) => $input_label($scope["#childScope/0"], $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), 0, $for_content__$params);
const $labels = /*@__PURE__*/ _let("labels/3", ($scope) => $for($scope, [$scope.labels]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$labels($scope, [...$scope.labels, "c"]);
	});
	_on($scope["#button/2"], "click", function() {
		$labels($scope, $scope.labels.slice(1));
	});
});
function $setup($scope) {
	$labels($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
