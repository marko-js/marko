// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__sel_id__OR__size_id = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_sel_id#0:7_size_id#4/setup", 5, ($scope) => _attr_class_item($scope["#button/0"], "on", $scope.size_id === $scope._._.sel_id));
const $for_content__sel_id = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_sel_id#0:7/subscribe", "sel_id/9", $for_content__sel_id__OR__size_id, ($scope) => $scope._._);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$sel($scope._._, $scope.size);
}));
const $for_content__setup = ($scope) => {
	$for_content__sel_id($scope);
	$for_content__setup__script($scope);
};
const $for_content__size_id = /*@__PURE__*/ _const("size_id", ($scope) => {
	$for_content__sel_id__OR__size_id($scope);
	_text($scope["#text/1"], $scope.size_id);
});
const $for_content__$params = ($scope, $params2) => $for_content__size($scope, $params2[0]);
const $for_content__size = /*@__PURE__*/ _const("size", ($scope) => $for_content__size_id($scope, $scope.size?.id));
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $if_content__sizes = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.sizes]));
const $if_content__setup = $if_content__sizes;
const $sizes = /*@__PURE__*/ _const("sizes", ($scope) => $sel($scope, $scope.sizes[0]));
const $sel = _let("sel/6", ($scope) => $sel_id($scope, $scope.sel?.id));
function $setup($scope) {
	$sizes($scope, [{ id: "s" }, { id: "m" }]);
}
const $sel_id__closure = /*@__PURE__*/ _closure($for_content__sel_id);
const $sel_id = /*@__PURE__*/ _const("sel_id", $sel_id__closure);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_b = ($scope, input_b) => $if($scope, input_b ? 0 : 1);
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
