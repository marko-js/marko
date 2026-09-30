// template.marko
const $template = "<div> </div><div> </div>";
const $walks = "D lD l";
const $x2 = ($scope, x) => $x_n2($scope, x.n);
const $x_n2 = ($scope, x_n) => _text($scope["#text/0"], x_n);
const $x3 = ($scope, $x) => $x_n3($scope, $x.n);
function $setup($scope) {
	$x2($scope, { n: 1 });
	$x3($scope, { n: 2 });
}
const $x_n3 = ($scope, $x_n) => _text($scope["#text/1"], $x_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
