// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => _return($scope, $scope.input_v));
const $input$1 = ($scope, input) => $input_v($scope, input.v);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>go</button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b b`)("");
const $for_content__l = /*@__PURE__*/ _for_closure("#text/2", ($scope) => _text($scope["#text/0"], $scope._.l[$scope["#LoopKey"]].name), 11, "#scopeOffset/1");
const $for_content__setup = $for_content__l;
const $l = /*@__PURE__*/ _let("l/7", ($scope) => {
	$l_length($scope, $scope.l?.length);
	$for_content__l($scope);
});
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/2", "<span> </span>", "D ", $for_content__setup);
const $l_length__OR__r = /*@__PURE__*/ _or(10, ($scope) => $for($scope, [$scope.r ? 0 : $scope.l_length - 1]), 1, "#scopeOffset/1");
const $l_length = /*@__PURE__*/ _const("l_length", $l_length__OR__r);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$l($scope, [{ name: "z" }]);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $r);
	$l($scope, [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	]);
	$setup__script($scope);
}
const $r = _var_resume("__tests__/template.marko_0_r#9/var", /*@__PURE__*/ _const("r", $l_length__OR__r));
const $input_short = ($scope, input_short) => $input_v($scope["#childScope/0"], input_short);
const $input = ($scope, input) => $input_short($scope, input.short);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
