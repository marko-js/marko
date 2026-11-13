// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__sel__OR__size_id = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_sel#1:1_size_id#4/setup", 5, ($scope) => _attr_class_item($scope["#button/0"], "on", $scope.size_id === ($scope._.sel && $scope._.sel.id)));
const $for_content__sel = /*@__PURE__*/ _for_closure("#text/0", $for_content__sel__OR__size_id, 8);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__sel($scope._, $scope.size);
}));
const $for_content__setup = ($scope) => {
	$for_content__sel._($scope);
	$for_content__setup__script($scope);
};
const $for_content__size_id = /*@__PURE__*/ _const("size_id", ($scope) => {
	$for_content__sel__OR__size_id($scope);
	_text($scope["#text/1"], $scope.size_id);
});
const $for_content__$params = ($scope, $params2) => $for_content__size($scope, $params2[0]);
const $for_content__size = /*@__PURE__*/ _const("size", ($scope) => $for_content__size_id($scope, $scope.size?.id));
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button>", " D ", $for_content__setup, $for_content__$params);
const $if_content__sizes = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__for($scope, [$scope._.sizes]));
const $if_content__setup = ($scope) => {
	$if_content__sizes._($scope);
	$if_content__sizes_._($scope);
};
const $if_content__sel = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_sel#1/fill", "sel/1", $for_content__sel);
const $if_content__sizes_ = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__sel($scope, $scope._.sizes_0));
const $sizes = /*@__PURE__*/ _const("sizes", ($scope) => $sizes_($scope, $scope.sizes[0]));
const $sizes_ = /*@__PURE__*/ _const("sizes_0");
function $setup($scope) {
	$sizes($scope, [{ id: "s" }, { id: "m" }]);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
