// template.marko
const $template = "<div> </div><div> </div>";
const $walks = "D lD l";
const $x2 = ($scope, x) => _text($scope["#text/0"], x.n);
const $x3 = ($scope, $x) => _text($scope["#text/1"], $x.n);
function $setup($scope) {
	$x2($scope, { n: 1 });
	$x3($scope, { n: 2 });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
