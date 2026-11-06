// template.marko
const $template = "<div></div><button>rot</button>";
const $walks = " b b";
const $else_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $if_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span>A<!></span>", "Db%", $if_content__setup, "<b>B<!></b>", "Db%", $else_content__setup);
const $for_content__$params = ($scope, $params2) => $for_content__if($scope, $params2[0]?.on ? 0 : 1);
const $for = /*@__PURE__*/ _for_of("#div/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let("list/2", ($scope) => {
	$list_($scope, $scope.list?.[2]);
	$list_2($scope, $scope.list?.[0]);
	$list_3($scope, $scope.list?.[1]);
	$for($scope, [$scope.list, "id"]);
});
const $list_ = /*@__PURE__*/ _const("list_2");
const $list_2 = /*@__PURE__*/ _const("list_0");
const $list_3 = /*@__PURE__*/ _const("list_1");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, [
		$scope.list_2,
		$scope.list_0,
		$scope.list_1
	]);
}));
function $setup($scope) {
	$list($scope, [
		{
			id: 1,
			on: true
		},
		{
			id: 2,
			on: false
		},
		{
			id: 3,
			on: true
		}
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
