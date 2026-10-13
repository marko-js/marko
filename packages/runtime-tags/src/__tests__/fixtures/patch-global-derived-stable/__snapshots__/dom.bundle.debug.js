// template.marko
const $template = "<main><h1> </h1><h2> </h2><p> </p></main>";
const $walks = "E lD lD m";
function brandOf(g) {
	return g.brand;
}
const $name = ($scope, name) => _text($scope["#text/1"], name);
const $global2 = /*@__PURE__*/ _fill_global_join("", "__tests__/template.marko_0_$global#7/global", ($scope) => {
	_text($scope["#text/0"], brandOf($scope.$global));
	$name($scope, brandOf($scope.$global));
});
const $input_name = ($scope, input_name) => _text($scope["#text/2"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
function $setup($scope) {
	$global2($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
