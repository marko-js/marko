// template.marko
const $template = "<!><!><div id=log></div>";
const $walks = "b%c";
const $for_content__select__script = _script("__tests__/template.marko_1_select#3", ($scope) => _on($scope["#button/0"], "click", $scope.select));
const $for_content__select = /*@__PURE__*/ _const("select", $for_content__select__script);
const $for_content__setup = ($scope) => {
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$for_content__select($scope, $select($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<button> </button>", " D ", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/1", ($scope) => $for($scope, [$scope.items, "id"]));
function $setup($scope) {
	$items($scope, [{ id: "a" }, { id: "b" }]);
}
const $select = ($scope) => function() {
	document.getElementById("log").textContent = $scope["#LoopKey"];
};
_resumed["__tests__/template.marko_1/select"] = $select;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
