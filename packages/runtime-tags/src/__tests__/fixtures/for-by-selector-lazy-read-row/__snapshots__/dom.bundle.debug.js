// template.marko
const $template = "<!><!><div class=log> </div>";
const $walks = "b%bD l";
function track(name, value) {
	console.log("eval " + name);
	return value;
}
const $for_content__selected__script = _script("__tests__/template.marko_1_selected#0:3", ($scope) => _on($scope["#button/0"], "click", track("h", $scope._.selected === $scope["#LoopKey"]) ? undefined : () => {
	$selected($scope._, $scope["#LoopKey"]);
	$log($scope._, `${$scope._.log}[${$scope.item.name}]`);
}));
const $for_content__selected = /*@__PURE__*/ _for_selector("#text/0", "selected", $for_content__selected__script);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$log($scope._, JSON.stringify($scope.item));
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_attr_class($scope["#button/0"], `b${$scope["#LoopKey"]}`);
	_attr_class($scope["#button/1"], `w${$scope["#LoopKey"]}`);
	$for_content__setup__script($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item");
const $for = /*@__PURE__*/ _for_of("#text/0", "<button>b</button><button>whole</button>", " b ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items, "id"]));
const $selected = /*@__PURE__*/ _let("selected/3", $for_content__selected);
const $log = /*@__PURE__*/ _let("log/4", ($scope) => _text($scope["#text/1"], $scope.log));
function $setup($scope) {
	$items($scope, [
		{
			id: 1,
			name: "a"
		},
		{
			id: 2,
			name: "b"
		},
		{
			id: 3,
			name: "c"
		},
		{
			id: 4,
			name: "d"
		}
	]);
	$selected($scope, 1);
	$log($scope, "");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
