// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $else_content__label = /*@__PURE__*/ _let("label/2", ($scope) => _text($scope["#text/1"], $scope.label));
const $else_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$else_content__label($scope, `${$getLabel_getter($scope._)()}:${[...$getLabel_getter($scope._)].length}`);
}));
const $else_content__setup = ($scope) => {
	$else_content__label($scope, "none");
	$else_content__setup__script($scope);
};
const $getLabel_getter = _hoist_resume("__tests__/template.marko_0_getLabel#1:0/hoist", "getLabel", [
	"BranchScopes:#text/0",
	"ConditionalRenderer:#text/0",
	0
]);
const $if_content__getLabel = /*@__PURE__*/ _const("getLabel", ($scope) => _assert_hoist($scope.getLabel));
const $if_content__setup = ($scope) => $if_content__getLabel($scope, $getLabel);
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content__setup, "<button> </button>", " D ", $else_content__setup);
const $input_a = ($scope, input_a) => $if($scope, input_a ? 0 : 1);
const $input = ($scope, input) => $input_a($scope, input.a);
function $getLabel() {
	return "a";
}
_resumed["__tests__/template.marko_1/getLabel"] = $getLabel;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
