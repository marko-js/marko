// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__selected__OR__hovered = /*@__PURE__*/ _or(4, ($scope) => _attr_class_items($scope["#li/0"], {
	sel: $scope._._.selected === $scope["#LoopKey"],
	hov: $scope._.hovered === $scope["#LoopKey"]
}));
const $for_content__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", $for_content__selected__OR__hovered, ($scope) => $scope._);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$selected($scope._._, $scope["#LoopKey"]);
	});
	_on($scope["#button/3"], "click", function() {
		$if_content__hovered($scope._, $scope["#LoopKey"]);
	});
});
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__hovered._($scope);
	$for_content__setup__script($scope);
};
const $for_content__hovered = /*@__PURE__*/ _for_selector("#ul/0", "hovered", $for_content__selected__OR__hovered);
const $for_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]?.label);
const $if_content__selected = /*@__PURE__*/ _if_closure("#text/0", 0, $for_content__selected);
const $if_content__hovered = /*@__PURE__*/ _let("hovered/1", $for_content__hovered);
const $if_content__setup = ($scope) => {
	$if_content__selected._($scope);
	$if_content__rows._($scope);
	$if_content__hovered($scope, 2);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button><button class=hover>h</button></li>", " D D l ", $for_content__setup, $for_content__$params);
const $if_content__rows = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.rows, "id"]));
const $selected = /*@__PURE__*/ _let("selected/1", $if_content__selected);
const $rows = /*@__PURE__*/ _let("rows/2", ($scope) => $rows_length($scope, $scope.rows?.length));
function $setup($scope) {
	$selected($scope, 1);
	$rows($scope, [
		{
			id: 1,
			label: "a"
		},
		{
			id: 2,
			label: "b"
		},
		{
			id: 3,
			label: "c"
		}
	]);
}
const $if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $rows_length = /*@__PURE__*/ _const("rows_length", ($scope) => $if($scope, $scope.rows_length ? 0 : 1));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
