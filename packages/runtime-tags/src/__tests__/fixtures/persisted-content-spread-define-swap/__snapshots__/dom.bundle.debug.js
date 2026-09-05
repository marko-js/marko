// template.marko
const $template = "<div></div>";
const $walks = " b";
const $two_content__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._.input_title)), 1);
const $two_content__setup = $two_content__input_title;
const $two_content = _content_resume("__tests__/template.marko_2*content", "<strong>two <!></strong>", "Db%", $two_content__setup);
const $one_content__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._.input_title)), 0);
const $one_content__setup = $one_content__input_title;
const $one_content = _content_resume("__tests__/template.marko_1*content", "<em>one <!></em>", "Db%", $one_content__setup);
const $input_which__OR__one__OR__two__script = _script("__tests__/template.marko_0_input_which#4_one#5_two#6", ($scope) => _attrs_script($scope, "#div/0"));
const $input_which__OR__one__OR__two = /*@__PURE__*/ _or(7, ($scope) => {
	_attrs_content($scope, "#div/0", { content: $scope.input_which ? $scope.one : $scope.two });
	$input_which__OR__one__OR__two__script($scope);
}, 2);
const $one = /*@__PURE__*/ _const("one", $input_which__OR__one__OR__two);
const $two = /*@__PURE__*/ _const("two", $input_which__OR__one__OR__two);
function $setup($scope) {
	$one($scope, { content: $one_content($scope) });
	$two($scope, { content: $two_content($scope) });
}
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__one__OR__two);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_which($scope, input.which);
};
const $input_title__closure = /*@__PURE__*/ _closure($one_content__input_title, $two_content__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
