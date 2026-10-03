// template.marko
const $template = "<button class=toggle>toggle</button><!><button class=read> </button>";
const $walks = " b%b D l";
const $getLabel_getter = _hoist_resume("__tests__/template.marko_0_getLabel#2:0/hoist", "getLabel", [
	"BranchScopes:#text/1",
	"ConditionalRenderer:#text/1",
	1
]);
const $else_content__getLabel = /*@__PURE__*/ _const("getLabel", ($scope) => _assert_hoist($scope.getLabel));
const $else_content__setup = ($scope) => $else_content__getLabel($scope, $getLabel);
const $if = /*@__PURE__*/ _if("#text/1", "<span>a</span>", 0, 0, 0, 0, $else_content__setup);
const $a = /*@__PURE__*/ _let("a/4", ($scope) => $if($scope, $scope.a ? 0 : 1));
const $label = /*@__PURE__*/ _let("label/5", ($scope) => _text($scope["#text/3"], $scope.label));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$a($scope, !$scope.a);
	});
	_on($scope["#button/2"], "click", function() {
		$label($scope, `${$getLabel_getter($scope)()}:${[...$getLabel_getter($scope)].length}`);
	});
});
function $setup($scope) {
	$a($scope, false);
	$label($scope, "none");
	$setup__script($scope);
}
function $getLabel() {
	return "b";
}
_resumed["__tests__/template.marko_2/getLabel"] = $getLabel;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
