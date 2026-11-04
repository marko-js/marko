// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/child.marko
const $template = "<div></div>";
const $walks = " b";
const $value = _let("value/1", ($scope) => $value_b($scope, $scope.value?.b));
const $value_b__script = _script("__tests__/tags/child.marko_0_value_b#2", ($scope) => _el_read($scope["#div/0"]).textContent += $scope.value_b);
const $value_b = /*@__PURE__*/ _const("value_b", $value_b__script);
function $setup($scope) {
	$value($scope, { b: 1 });
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, " b", $setup);
