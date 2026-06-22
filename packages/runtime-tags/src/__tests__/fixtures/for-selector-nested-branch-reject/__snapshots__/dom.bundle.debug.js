// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__selected__OR__row_id = /* @__PURE__ */ _or(6, ($scope) => _attr_class($scope["#li/0"], $scope._._.selected === $scope.row_id && "danger"));
const $for_content__selected = /* @__PURE__ */ _closure_get("selected", $for_content__selected__OR__row_id, ($scope) => $scope._._);
const $for_content__setup = $for_content__selected;
const $for_content__row_id__script = _script("__tests__/template.marko_2_row_id", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope._._, $scope.row_id);
}));
const $for_content__row_id = /* @__PURE__ */ _const("row_id", ($scope) => {
	$for_content__selected__OR__row_id($scope);
	$for_content__row_id__script($scope);
});
const $for_content__row_label = ($scope, row_label) => _text($scope["#text/2"], row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $if_content__for = /* @__PURE__ */ _for_of("#ul/0", "<li><button class=select> </button></li>", " D D m", $for_content__setup, $for_content__$params);
const $if_content__rows = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.rows, "id"]));
const $if_content__setup = $if_content__rows;
const $selected__closure = /* @__PURE__ */ _closure($for_content__selected);
const $selected = /* @__PURE__ */ _let("selected/4", $selected__closure);
const $rows = /* @__PURE__ */ _let("rows/5");
function $setup($scope) {
	$selected($scope, 1);
	$rows($scope, [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}]);
}
const $if = /* @__PURE__ */ _if("#text/0", "<ul></ul>", " b", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
