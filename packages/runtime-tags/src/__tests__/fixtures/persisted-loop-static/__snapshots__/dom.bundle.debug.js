// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $for_content__input_note = /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/1"], $scope._.input_note));
const $for_content__setup = $for_content__input_note;
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $for = /*@__PURE__*/ _for_of("#text/1", "<p><!> <!></p>", "D%c%", $for_content__setup, $for_content__$params);
function $setup($scope) {
	$for($scope, [["a", "b"]]);
}
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note = /*@__PURE__*/ _const("input_note", $for_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
