// template.marko
const $template = "<div><!><!></div>";
const $walks = "D%b%l";
const $foo = /*@__PURE__*/ _render(($scope, foo) => _text($scope["#text/0"], String(foo)));
const $bar = /*@__PURE__*/ _render(($scope, bar) => _text($scope["#text/1"], String(bar)));
function $setup($scope) {
	$foo($scope, true);
	$bar($scope, true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
