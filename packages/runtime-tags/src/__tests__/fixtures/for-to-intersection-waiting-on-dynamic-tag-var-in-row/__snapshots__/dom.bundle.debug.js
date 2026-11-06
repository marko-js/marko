// tags/child.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = ($_) => {};
const $input_v$1 = /*@__PURE__*/ _const("input_v", ($scope) => _return($scope, $scope.input_v));
const $input$1 = ($scope, input) => $input_v$1($scope, input.v);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// tags/other.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => _return($scope, !$scope.input_v));
const $input = ($scope, input) => $input_v($scope, input.v);
var other_default = /*@__PURE__*/ _template("__tests__/tags/other.marko", "", "", 0, /*@__PURE__*/ _return_setup($input));

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content2__l = /*@__PURE__*/ _for_closure("#text/2", ($scope) => _text($scope["#text/0"], $scope._.l[$scope["#LoopKey"]].name), 10, "#scopeOffset/1");
const $for_content2__setup = $for_content2__l;
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, ($_) => $for_content__r);
const $for_content__useChild__OR__short = /*@__PURE__*/ _or(7, ($scope) => $for_content__dynamicTag($scope, $scope._.useChild ? child_default : other_default, ($_) => ({ v: $scope.short })));
const $for_content__useChild = /*@__PURE__*/ _for_closure("#text/0", $for_content__useChild__OR__short, 2);
const $for_content__l = /*@__PURE__*/ _let("l/4", ($scope) => {
	$for_content__l_length($scope, $scope.l?.length);
	$for_content2__l($scope);
});
const $for_content__short = /*@__PURE__*/ _let("short/6", $for_content__useChild__OR__short);
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	$for_content__short($scope, true);
	$for_content__l($scope, [{ name: "z" }]);
}));
const $for_content__setup = ($scope) => {
	$for_content__useChild._($scope);
	$for_content__l($scope, [
		{ name: "a" },
		{ name: "b" },
		{ name: "c" }
	]);
	$for_content__short($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__for = /*@__PURE__*/ _for_to_unkeyed("#text/2", "<span> </span>", "D ", $for_content2__setup);
const $for_content__l_length__OR__r = /*@__PURE__*/ _or(9, ($scope) => $for_content__for($scope, [$scope.r ? 0 : $scope.l_length - 1]), 1, "#scopeOffset/1");
const $for_content__l_length = /*@__PURE__*/ _const("l_length", $for_content__l_length__OR__r);
const $for_content__r = _var_resume("__tests__/template.marko_1_r#8/var", /*@__PURE__*/ _const("r", $for_content__l_length__OR__r));
const $useChild = /*@__PURE__*/ _let("useChild/1");
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!><button>go</button>", "b1b%b ", $for_content__setup);
function $setup($scope) {
	$useChild($scope, true);
	$for($scope, [[0, 1]]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
