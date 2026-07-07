// template.marko
const $template = "<!><!><button>Update</button>";
const $walks = "b%b b";
const $if_content__value = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $value = /*@__PURE__*/ _let("value/5", $if_content__value);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope, 1);
}));
function $setup($scope) {
	$value($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", " ", " b", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
