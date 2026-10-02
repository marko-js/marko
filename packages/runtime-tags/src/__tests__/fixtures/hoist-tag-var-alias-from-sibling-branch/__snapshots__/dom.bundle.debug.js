// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = () => {};
const $if_content3__result = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.result));
const $if_content3__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__result($scope._, String($scope._.y()));
}));
const $if_content3__setup = ($scope) => {
	$if_content3__result._($scope);
	$if_content3__setup__script($scope);
};
const $getX_getter = _hoist_resume("__tests__/template.marko_0_getX#2:0/hoist", "getX", "BranchScopes:#text/0");
const $if_content2__getX = /*@__PURE__*/ _const("getX", ($scope) => _assert_hoist($scope.getX));
const $if_content2__setup = ($scope) => $if_content2__getX($scope, $getX);
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content3__setup);
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__if($scope, $scope._.input_b ? 0 : 1));
const $if_content__y = /*@__PURE__*/ _const("y");
const $if_content__result = /*@__PURE__*/ _let("result/2", $if_content3__result);
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__y($scope, $getX_getter($scope._));
	$if_content__result($scope, "none");
};
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content2__setup);
const $if2 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $input_a = ($scope, input_a) => {
	$if($scope, input_a ? 0 : 1);
	$if2($scope, !input_a ? 0 : 1);
};
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
function $getX() {
	return 1;
}
_resumed["__tests__/template.marko_2/getX"] = $getX;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
