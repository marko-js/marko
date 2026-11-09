// template.marko
const $template = "<ul></ul><ol></ol>";
const $walks = " b b";
const $for_content2__selected = /*@__PURE__*/ _for_closure("#ol/1", ($scope) => _text($scope["#text/1"], $scope._.selected), 4);
const $for_content2__setup = $for_content2__selected;
const $for_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]?.label);
const $for_content__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", ($scope) => _attr_class_item($scope["#li/0"], "danger", $scope._.selected === $scope["#LoopKey"]));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__setup__script($scope);
};
const $for_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]?.label);
const $selected = /*@__PURE__*/ _let("selected/2", ($scope) => {
	$for_content__selected($scope);
	$for_content2__selected($scope);
});
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D ", $for_content__setup, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of("#ol/1", "<li><!>: <!></li>", "D%c%", $for_content2__setup, $for_content2__$params);
const $rows = /*@__PURE__*/ _let("rows/3", ($scope) => {
	$for($scope, [$scope.rows, "id"]);
	$for2($scope, [$scope.rows, "id"]);
});
function $setup($scope) {
	$selected($scope, 1);
	$rows($scope, [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
