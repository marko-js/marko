// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $for = /*@__PURE__*/ _for_of("#text/1", "<p>item <!></p>", "Db%", 0, $for_content__$params);
function $setup($scope) {
	$for($scope, [["a", "b"]]);
}
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
