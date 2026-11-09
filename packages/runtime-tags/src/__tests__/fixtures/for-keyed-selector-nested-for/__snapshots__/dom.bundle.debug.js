// template.marko
const $template = "<!><!><button class=add>add</button>";
const $walks = "b%b b";
const $for_content2__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", ($scope) => _attr_class_item($scope["#li/0"], "danger", $scope._._.selected === $scope["#LoopKey"]), ($scope) => $scope._);
const $for_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._._, $scope["#LoopKey"]);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__selected._($scope);
	_text($scope["#text/2"], $scope["#LoopKey"]);
	$for_content2__setup__script($scope);
};
const $for_content__selected = /*@__PURE__*/ _for_closure("#text/0", $for_content2__selected, 4);
const $for_content__setup = $for_content__selected;
const $for_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D ", $for_content2__setup);
const $for_content__$params = ($scope, $params2) => $for_content__for($scope, [$params2[0]?.rows, "id"]);
const $selected = /*@__PURE__*/ _let("selected/2", $for_content__selected);
const $for = /*@__PURE__*/ _for_of("#text/0", "<ul></ul>", " ", $for_content__setup, $for_content__$params);
const $groups = /*@__PURE__*/ _let("groups/3", ($scope) => $for($scope, [$scope.groups, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$groups($scope, [...$scope.groups, {
		id: "z",
		rows: [{ id: 5 }]
	}]);
}));
function $setup($scope) {
	$selected($scope, 1);
	$groups($scope, [{
		id: "x",
		rows: [{ id: 1 }, { id: 2 }]
	}, {
		id: "y",
		rows: [{ id: 3 }, { id: 4 }]
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
