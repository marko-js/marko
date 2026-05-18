// template.marko
const $template = "<div><!><div></div></div>";
const $walks = "D%b l";
const $for_content__items__script = _script("__tests__/template.marko_1_items", ($scope) => _on($scope["#button/0"], "click", function() {
	_el_read($scope._["#div/1"]).textContent = $scope._.items.join(", ");
	$items($scope._, []);
}));
const $for_content__items = /* @__PURE__ */ _for_closure("#text/0", $for_content__items__script);
const $for_content__setup = $for_content__items;
const $for = /* @__PURE__ */ _for_of("#text/0", "<button>Test</button>", " b", $for_content__setup);
const $items = /* @__PURE__ */ _let("items/2", ($scope) => {
	$for($scope, [$scope.items]);
	$for_content__items($scope);
});
function $setup($scope) {
	$items($scope, ["hello"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
