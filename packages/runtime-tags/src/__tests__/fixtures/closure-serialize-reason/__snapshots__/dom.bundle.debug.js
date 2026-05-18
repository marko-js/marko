// template.marko
const $template = "<div></div><button> </button>";
const $walks = " b D l";
const $if_content__getMessage = /* @__PURE__ */ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.getMessage()));
const $if_content__setup = $if_content__getMessage;
const $if = /* @__PURE__ */ _if("#div/0", "<span> </span>", "D l", $if_content__setup);
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/6", ($scope) => {
	_text($scope["#text/2"], $scope.x);
	$if($scope, $scope.x ? 0 : 1);
	$x__script($scope);
});
function $setup($scope) {
	$x($scope, 0);
}
const $getMessage2 = /* @__PURE__ */ _const("getMessage", $if_content__getMessage);
const $input_message = /* @__PURE__ */ _const("input_message", ($scope) => $getMessage2($scope, $getMessage($scope)));
const $input = ($scope, input) => $input_message($scope, input.message);
function $getMessage($scope) {
	return () => $scope.input_message;
}
_resume("__tests__/template.marko_0/getMessage", $getMessage);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
