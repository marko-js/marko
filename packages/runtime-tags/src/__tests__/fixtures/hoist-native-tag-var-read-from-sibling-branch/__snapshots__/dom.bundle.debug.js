// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $el_getter = /*@__PURE__*/ _hoist("#div/0", [
	"BranchScopes:#text/0",
	"ConditionalRenderer:#text/0",
	0
]);
const $if_content__out = /*@__PURE__*/ _closure_get("out/5", ($scope) => _text($scope["#text/1"], $scope._._.out), ($scope) => $scope._._, "__tests__/template.marko_2_out#0:4/subscribe");
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$out($scope._._, String($el_getter($scope._._)()));
}));
const $if_content__setup = ($scope) => {
	$if_content__out($scope);
	$if_content__setup__script($scope);
};
const $else_content__if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
const $else_content__setup = ($scope) => $else_content__if($scope, true ? 0 : 1);
const $out__closure = /*@__PURE__*/ _closure($if_content__out);
const $out = /*@__PURE__*/ _let("out/4", $out__closure);
function $setup($scope) {
	$out($scope, "");
}
const $if = /*@__PURE__*/ _if("#text/0", "<div>a</div>", " ", 0, "<!><!><!>", "b%", $else_content__setup);
const $input_a = ($scope, input_a) => $if($scope, input_a ? 0 : 1);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
