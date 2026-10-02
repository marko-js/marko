// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content3__label = /*@__PURE__*/ _let("label/2", ($scope) => _text($scope["#text/1"], $scope.label));
const $if_content3__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content3__label($scope, String($if_content__getLabel_getter($scope._)()));
}));
const $if_content3__setup = ($scope) => {
	$if_content3__label($scope, "none");
	$if_content3__setup__script($scope);
};
const $if_content__getLabel_getter = /*@__PURE__*/ _hoist("getLabel", "BranchScopes:#text/0");
const $if_content2__getLabel = /*@__PURE__*/ _const("getLabel", ($scope) => _assert_hoist($scope.getLabel));
const $if_content2__setup = ($scope) => $if_content2__getLabel($scope, $getLabel);
const $if_content__if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content2__setup);
const $if_content__if2 = /*@__PURE__*/ _if("#text/1", "<button> </button>", " D ", $if_content3__setup);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__if($scope, $scope._.input_a ? 0 : 1);
	$if_content__if2($scope, !$scope._.input_a ? 0 : 1);
});
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!><!>", "b%b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
function $getLabel() {
	return "a";
}
_resumed["__tests__/template.marko_2/getLabel"] = $getLabel;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
