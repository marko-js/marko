// template.marko
const $template = "<!><!><button class=add>add</button><button class=clear>clear</button>";
const $walks = "b%b b b";
function rendered(id) {
	console.log(`row ${id}`);
	return true;
}
const $for_content__selected = /*@__PURE__*/ _for_selector("#ul/0", "selected", ($scope) => _attr_class_item($scope["#li/0"], "danger", rendered($scope["#LoopKey"]) && $scope._._.selected === $scope["#LoopKey"]), ($scope) => $scope._);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._._, $scope["#LoopKey"]);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__setup__script($scope);
};
const $for_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]?.label);
const $if_content__selected = /*@__PURE__*/ _if_closure("#text/0", 0, $for_content__selected);
const $if_content__setup = ($scope) => {
	$if_content__selected._($scope);
	$if_content__rows._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D ", $for_content__setup, $for_content__$params);
const $if_content__rows = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.rows, "id"]));
const $selected = /*@__PURE__*/ _let("selected/3", $if_content__selected);
const $rows = /*@__PURE__*/ _let("rows/4", ($scope) => {
	$rows_length($scope, $scope.rows?.length);
	$if_content__rows($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$rows($scope, [...$scope.rows, {
			id: $scope.rows.length + 1,
			label: "n"
		}]);
	});
	_on($scope["#button/2"], "click", function() {
		$rows($scope, []);
	});
});
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
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<ul></ul>", " ", $if_content__setup);
const $rows_length = /*@__PURE__*/ _const("rows_length", ($scope) => $if($scope, $scope.rows_length ? 0 : 1));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
