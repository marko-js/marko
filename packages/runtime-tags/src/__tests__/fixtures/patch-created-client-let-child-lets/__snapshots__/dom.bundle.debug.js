// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/child.marko
const $template = "<span> </span><button class=b>b</button>";
const $walks = "D l b";
const $a__OR__b = /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_a#2_b#3/init", 4, ($scope) => _text($scope["#text/0"], $scope.a + $scope.b));
const $a = /*@__PURE__*/ _let("a/2", $a__OR__b);
const $b = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill0", "b/3", $a__OR__b);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$b($scope, +$scope.b + 1);
}));
function $setup($scope) {
	$a($scope, 1);
	$b($scope, 2);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup);
