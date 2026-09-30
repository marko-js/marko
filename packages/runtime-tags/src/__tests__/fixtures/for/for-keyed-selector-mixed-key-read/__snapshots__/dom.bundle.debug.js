// template.marko
const $template = "<ul></ul><button class=relabel>relabel</button>";
const $walks = " b b";
const $for_content__selected__OR__row_label = /*@__PURE__*/ _or(8, ($scope) => _text($scope["#text/1"], $scope._.selected === $scope["#LoopKey"] && $scope.row_label));
const $for_content__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", "#LoopKey", ($scope) => {
	_attr_class($scope["#li/0"], $scope._.selected === $scope["#LoopKey"] && "danger");
	$for_content__selected__OR__row_label($scope);
});
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$selected($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__setup__script($scope);
};
const $for_content__row_label = /*@__PURE__*/ _const("row_label", $for_content__selected__OR__row_label);
const $for_content__$params = ($scope, $params2) => $for_content__row_label($scope, $params2[0]?.label);
const $selected = /*@__PURE__*/ _let("selected/2", $for_content__selected);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><span> </span><button class=select>x</button></li>", " E l ", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/3", ($scope) => $for($scope, [$scope.rows, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$rows($scope, $scope.rows.map((r) => r.id === 1 ? {
		id: 1,
		label: r.label + "!"
	} : r));
}));
function $setup($scope) {
	$selected($scope, 1);
	$rows($scope, [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
