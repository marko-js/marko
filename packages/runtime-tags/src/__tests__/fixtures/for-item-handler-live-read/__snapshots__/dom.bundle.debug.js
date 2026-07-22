// template.marko
const $template = "<ul></ul><button class=relabel>relabel</button><p> </p>";
const $walks = " b bD l";
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$log($scope._, $scope.item_label);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__item_label = /*@__PURE__*/ _const("item_label", ($scope) => _text($scope["#text/1"], $scope.item_label));
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=show> </button></li>", "D D m", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/3", ($scope) => $for($scope, [$scope.items, "id"]));
const $log = /*@__PURE__*/ _let("log/4", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, $scope.items.map((it) => it.id === 1 ? {
		id: 1,
		label: it.label + "!"
	} : it));
}));
function $setup($scope) {
	$items($scope, [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}]);
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
