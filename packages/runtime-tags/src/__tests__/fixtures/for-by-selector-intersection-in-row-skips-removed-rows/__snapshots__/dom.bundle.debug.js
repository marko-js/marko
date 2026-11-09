// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content2__selected = /*@__PURE__*/ _for_selector("#text/0", "selected", ($scope) => _attr_class_item($scope["#span/0"], "on", $scope["#LoopKey"] === $scope._.selected));
const $for_content2__setup = ($scope) => {
	$for_content2__selected._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $for_content__selected = /*@__PURE__*/ _let("selected/5", $for_content2__selected);
const $for_content__for = /*@__PURE__*/ _for_of("#text/0", "<span> </span>", " D ", $for_content2__setup);
const $for_content__g_items__OR__short = /*@__PURE__*/ _or(7, ($scope) => $for_content__for($scope, [$scope.short ? $scope.g_items.slice(0, 1) : $scope.g_items, "id"]));
const $for_content__short = /*@__PURE__*/ _let("short/6", $for_content__g_items__OR__short);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__short($scope, true);
	$for_content__selected($scope, 3);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected($scope, 1);
	$for_content__short($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__g_items = /*@__PURE__*/ _const("g_items", $for_content__g_items__OR__short);
const $for_content__$params = ($scope, $params2) => $for_content__g_items($scope, $params2[0]?.items);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><button>go</button>", "b%b ", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$for($scope, [[{
		id: 1,
		items: [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 }
		]
	}], "id"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
