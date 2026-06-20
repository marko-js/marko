// template.marko
const $template = "<ul></ul><button>refresh</button>";
const $walks = " b b";
const $for_content__item_text = ($scope, item_text) => _text($scope["#text/0"], item_text);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => $for_content__item_text($scope, item?.text);
const $for = /* @__PURE__ */ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content__$params);
const $items__script = _script("__tests__/template.marko_0_items", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items]);
}));
const $items = /* @__PURE__ */ _let("items/2", ($scope) => {
	$for($scope, [$scope.items, "id"]);
	$items__script($scope);
});
function $setup($scope) {
	$items($scope, [{
		id: "a",
		text: "first"
	}, {
		id: null,
		text: "second"
	}]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
