// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, {
	n: $scope.n,
	set: $_return($scope)
}));
function $setup$1($scope) {
	$n($scope, 0);
}
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed["__tests__/tags/child.marko_0/_return"] = $_return;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = "<!><!><button class=inc> </button><!><!>";
const $walks = "b1b D l%c";
_dynamic_tag_var_resume("#text/0");
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $for_content__row);
const $for_content__Tag = /*@__PURE__*/ _for_closure("#text/4", ($scope) => $for_content__dynamicTag($scope, $scope._.Tag));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$scope.row.set($scope.row.n + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__Tag._($scope);
	$for_content__setup__script($scope);
};
const $for_content__row = _var_resume("__tests__/template.marko_1_row#4/var", /*@__PURE__*/ _const("row", ($scope) => $for_content__row_n($scope, $scope.row?.n)));
const $for_content__row_n = ($scope, row_n) => _text($scope["#text/3"], row_n);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $v);
const $Tag = /*@__PURE__*/ _let("Tag/5", ($scope) => $dynamicTag($scope, $scope.Tag));
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/4", "<!><!><button class=row> </button>", "b1b D ", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$scope.v.set($scope.v.n + 1);
}));
function $setup($scope) {
	$Tag($scope, child_default);
	$for($scope, [
		2,
		0,
		1
	]);
	$setup__script($scope);
}
const $v = _var_resume("__tests__/template.marko_0_v#6/var", /*@__PURE__*/ _const("v", ($scope) => $v_n($scope, $scope.v?.n)));
const $v_n = ($scope, v_n) => _text($scope["#text/3"], v_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
