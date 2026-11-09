// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content2__selected = /*@__PURE__*/ _closure_get("selected/3", ($scope) => _attr_class_item($scope["#li/0"], "danger", $scope._._.selected === $scope["#LoopKey"]), ($scope) => $scope._._, "__tests__/template.marko_2_selected#0:1/subscribe");
const $for_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._._, $scope["#LoopKey"]);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__selected($scope);
	_text($scope["#text/2"], $scope["#LoopKey"]);
	$for_content2__setup__script($scope);
};
const $for_content__selected = /*@__PURE__*/ _for_selector("#text/0", "selected", ($scope) => _attr_class_item($scope["#ul/0"], "group", $scope._.selected === $scope["#LoopKey"]));
const $for_content__setup = $for_content__selected;
const $for_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D ", $for_content2__setup);
const $for_content__$params = ($scope, $params2) => $for_content__for($scope, [$params2[0]?.rows, "id"]);
const $selected__closure = /*@__PURE__*/ _closure($for_content2__selected);
const $selected = /*@__PURE__*/ _let("selected/1", ($scope) => {
	$for_content__selected($scope);
	$selected__closure($scope);
});
const $for = /*@__PURE__*/ _for_of("#text/0", "<ul></ul>", " ", $for_content__setup, $for_content__$params);
const $groups = /*@__PURE__*/ _let("groups/2", ($scope) => $for($scope, [$scope.groups, "id"]));
function $setup($scope) {
	$selected($scope, 1);
	$groups($scope, [{
		id: 1,
		rows: [{ id: 1 }, { id: 2 }]
	}, {
		id: 2,
		rows: [{ id: 3 }, { id: 4 }]
	}]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
