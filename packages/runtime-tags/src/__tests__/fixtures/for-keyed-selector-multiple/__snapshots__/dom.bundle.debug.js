// template.marko
const $template = "<button class=select>select</button><button class=hover>hover</button><ul></ul>";
const $walks = " b b b";
const $for_content__selected__OR__hovered__OR__row_id = /* @__PURE__ */ _or(5, ($scope) => _attr_class($scope["#li/0"], [$scope._.selected === $scope.row_id && "sel", $scope._.hovered === $scope.row_id && "hov"]), 2);
const $for_content__selected = /* @__PURE__ */ _for_selector("#ul/2", "selected", "row_id", $for_content__selected__OR__hovered__OR__row_id);
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__hovered._($scope);
};
const $for_content__hovered = /* @__PURE__ */ _for_selector("#ul/2", "hovered", "row_id", $for_content__selected__OR__hovered__OR__row_id);
const $for_content__row_id = /* @__PURE__ */ _const("row_id", $for_content__selected__OR__hovered__OR__row_id);
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/1"], row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $selected = /* @__PURE__ */ _let("selected/3", $for_content__selected);
const $hovered = /* @__PURE__ */ _let("hovered/4", $for_content__hovered);
const $for = /* @__PURE__ */ _for_of("#ul/2", "<li> </li>", " D l", $for_content__setup, $for_content__$params);
const $rows = /* @__PURE__ */ _let("rows/5", ($scope) => $for($scope, [$scope.rows, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$selected($scope, 3);
	});
	_on($scope["#button/1"], "click", function() {
		$hovered($scope, 3);
	});
});
function $setup($scope) {
	$selected($scope, 1);
	$hovered($scope, 2);
	$rows($scope, [
		{
			id: 1,
			label: "a"
		},
		{
			id: 2,
			label: "b"
		},
		{
			id: 3,
			label: "c"
		}
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
