// template.marko
const $template = "<!><!><div id=log></div>";
const $walks = "b%c";
const $for_content__count = /*@__PURE__*/ _let_change("count/3");
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__count($scope, +$scope.count + 1);
}));
const $for_content__setup = ($scope) => {
	_text($scope["#text/1"], $scope["#LoopKey"]);
	$for_content__count($scope, 0, $valueChange($scope));
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<button> </button>", " D ", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/1", ($scope) => $for($scope, [$scope.items, "id"]));
function $setup($scope) {
	$items($scope, [{ id: "a" }, { id: "b" }]);
}
const $valueChange = ($scope) => function(next) {
	document.getElementById("log").textContent = $scope["#LoopKey"] + next;
};
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
