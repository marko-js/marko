// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_note = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_note#0:4/setup", "#text/0", 0, ($scope) => _text($scope["#text/2"], $scope._.input_note));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	_attr_textarea_value_default($scope, "#textarea/0", "hello");
	_attr_select_value_default($scope, "#select/1", "b");
};
const $if = /*@__PURE__*/ _if("#text/0", "<textarea></textarea><select><option value=a>A</option><option value=b>B</option></select><p> </p>", " b bD ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
};
const $input_note = /*@__PURE__*/ _const("input_note", $if_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
