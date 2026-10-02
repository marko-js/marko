// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__out = /*@__PURE__*/ _let("out/2", ($scope) => _text($scope["#text/1"], $scope.out));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__out($scope, String(((input) => $scope._.x)(2)));
}));
const $if_content__setup = ($scope) => {
	$if_content__out($scope, "");
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
function $setup($scope) {
	$if($scope, true ? 0 : 1);
}
const $input = ($scope, input) => $x($scope, input.x);
const $x = /*@__PURE__*/ _const("x");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
