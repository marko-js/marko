// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => _return($scope, $scope.input_v));
const $input = ($scope, input) => $input_v($scope, input.v);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>go</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $for_content__list = /*@__PURE__*/ _for_closure("#text/2", ($scope) => _text($scope["#text/0"], $scope._.list[$scope["#LoopKey"]].name), 9, "#scopeOffset/1");
const $for_content__setup = $for_content__list;
const $list = /*@__PURE__*/ _let("list/4", ($scope) => {
	$list_length($scope, $scope.list?.length);
	$for_content__list($scope);
});
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/2", "<span> </span>", "D ", $for_content__setup);
const $list_length__OR__r = /*@__PURE__*/ _or(8, ($scope) => $for($scope, [$scope.r ? 0 : $scope.list_length - 1]), 1, "#scopeOffset/1");
const $list_length = /*@__PURE__*/ _const("list_length", $list_length__OR__r);
const $short = /*@__PURE__*/ _let("short/6", ($scope) => $input_v($scope["#childScope/0"], $scope.short));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$short($scope, true);
	$list($scope, [{ name: "z" }]);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $r);
	$list($scope, [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	]);
	$short($scope, false);
	$setup__script($scope);
}
const $r = _var_resume("__tests__/template.marko_0_r#7/var", /*@__PURE__*/ _const("r", $list_length__OR__r));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
