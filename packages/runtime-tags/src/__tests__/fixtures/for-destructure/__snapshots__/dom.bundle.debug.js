// template.marko
const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
const $walks = "D%b b l";
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__description = ($scope, description) => _text($scope["#text/1"], description);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => {
	$for_content__name($scope, $temp.name);
	$for_content__description($scope, $temp.description);
};
const $for = /* @__PURE__ */ _for_of("#text/0", "<div><!>: <!></div>", "D%c%l", 0, $for_content__$params);
const $items__script = _script("__tests__/template.marko_0_items", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$items($scope, [...$scope.items, {
			name: "JavaScript",
			description: "Java, but scriptier"
		}]);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, $scope.items.slice(0, -1));
	});
});
const $items = /* @__PURE__ */ _let("items/3", ($scope) => {
	$for($scope, [$scope.items]);
	$items__script($scope);
});
function $setup($scope) {
	0;
	$items($scope, [{
		name: "Marko",
		description: "HTML Reimagined"
	}]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
