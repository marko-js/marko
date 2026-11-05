// template.marko
const $template = "<p>x<!></p><button>add</button>";
const $walks = "Db%l b";
const $if_content__v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.v));
const $if_content__setup = $if_content__v;
const $v = /*@__PURE__*/ _let("v/5", $if_content__v);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$v($scope, $scope.v + "!");
}));
function $setup($scope) {
	$v($scope, "a");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", " <b></b>", " ", $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => $input_on($scope, input.on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
