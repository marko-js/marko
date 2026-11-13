// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__isSel__OR__size = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_isSel#1:3_size#3/setup", 4, ($scope) => _attr_class_item($scope["#button/0"], "on", $scope._.isSel($scope.size)));
const $for_content__isSel = /*@__PURE__*/ _for_closure("#text/0", $for_content__isSel__OR__size, 8);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__sel($scope._, $scope.size);
}));
const $for_content__setup = ($scope) => {
	$for_content__isSel._($scope);
	$for_content__setup__script($scope);
};
const $for_content__size = /*@__PURE__*/ _const("size", ($scope) => {
	$for_content__isSel__OR__size($scope);
	_text($scope["#text/1"], $scope.size?.id);
});
const $for_content__$params = ($scope, $params2) => $for_content__size($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $if_content__sizes = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.sizes]));
const $if_content__setup = ($scope) => {
	$if_content__sizes._($scope);
	$if_content__sizes_._($scope);
};
const $if_content__sel = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_sel#1/fill", "sel/1", ($scope) => $if_content__sel_id($scope, $scope.sel?.id));
const $if_content__sizes_ = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__sel($scope, $scope._.sizes_0));
const $if_content__isSel = /*@__PURE__*/ _const("isSel", $for_content__isSel);
const $if_content__sel_id = /*@__PURE__*/ _const("sel_id", ($scope) => $if_content__isSel($scope, (s) => s.id === $scope.sel_id));
const $sizes = /*@__PURE__*/ _const("sizes", ($scope) => $sizes_($scope, $scope.sizes[0]));
const $sizes_ = /*@__PURE__*/ _const("sizes_0");
function $setup($scope) {
	$sizes($scope, [{ id: "s" }, { id: "m" }]);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
