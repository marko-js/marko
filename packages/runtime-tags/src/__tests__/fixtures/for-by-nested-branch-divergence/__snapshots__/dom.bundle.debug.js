// template.marko
const $template = "<div></div><button>rot</button>";
const $walks = " b b";
const $else_content__item_id = /* @__PURE__ */ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/0"], $scope._.item_id));
const $else_content__setup = $else_content__item_id;
const $if_content__item_id = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.item_id));
const $if_content__setup = $if_content__item_id;
const $for_content__if = /* @__PURE__ */ _if("#text/0", "<span>A<!></span>", "Db%l", $if_content__setup, "<b>B<!></b>", "Db%l", $else_content__setup);
const $for_content__item_on = ($scope, item_on) => $for_content__if($scope, item_on ? 0 : 1);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => {
	$for_content__item_on($scope, item?.on);
	$for_content__item_id($scope, item?.id);
};
const $for_content__item_id = /* @__PURE__ */ _const("item_id", ($scope) => {
	$if_content__item_id($scope);
	$else_content__item_id($scope);
});
const $for = /* @__PURE__ */ _for_of("#div/0", "<!><!><!>", "b%c", 0, $for_content__$params);
const $list = /* @__PURE__ */ _let("list/2", ($scope) => {
	$list_($scope, $scope.list?.[2]);
	$list_2($scope, $scope.list?.[0]);
	$list_3($scope, $scope.list?.[1]);
	$for($scope, [$scope.list, "id"]);
});
const $list_2__OR__list_0__OR__list___script = _script("__tests__/template.marko_0_list_2_list_0_list_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, [
		$scope.list_2,
		$scope.list_0,
		$scope.list_1
	]);
}));
const $list_2__OR__list_0__OR__list_ = /* @__PURE__ */ _or(6, $list_2__OR__list_0__OR__list___script, 2);
const $list_ = /* @__PURE__ */ _const("list_2", $list_2__OR__list_0__OR__list_);
const $list_2 = /* @__PURE__ */ _const("list_0", $list_2__OR__list_0__OR__list_);
const $list_3 = /* @__PURE__ */ _const("list_1", $list_2__OR__list_0__OR__list_);
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
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
