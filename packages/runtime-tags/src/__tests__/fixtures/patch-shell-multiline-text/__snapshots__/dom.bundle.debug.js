// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_note = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $if_content__setup = $if_content__input_note;
const $if = /*@__PURE__*/ _if("#main/0", "<pre>line 1\nline 2\r\nline 3</pre><p> </p>", "bD ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_show($scope, input.show);
};
const $input_note = /*@__PURE__*/ _const("input_note", $if_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
