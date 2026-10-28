// template.marko
const $Card_content2__walks = " b";
const $Card_content2__template = "<section></section>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($Card_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Card_content2__walks);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__content = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "content", /*@__PURE__*/ _if_closure("#section/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.content)));
const $if_content__setup = $if_content__content;
const $Card_content2__if = /*@__PURE__*/ _if("#section/0", "<!><!><!>", "b%", $if_content__setup);
const $Card_content2__show = ($scope, show) => $Card_content2__if($scope, show ? 0 : 1);
const $Card_content2__tag_input_content = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "content", $if_content__content);
const $Card_content2__$params = ($scope, $params2) => $Card_content2__$temp($scope, $params2[0]);
const $Card_content2__$temp = ($scope, $temp) => {
	$Card_content2__show($scope, $temp.show);
	$Card_content2__tag_input_content($scope, $temp.content);
};
const $Card_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0));
const $Card_content__setup = $Card_content__input_note;
const $Card_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Card_content__setup);
function $setup($scope) {
	$Card_content2__tag_input_content($scope["#childScope/0"], $Card_content($scope));
}
const $input_show = ($scope, input_show) => $Card_content2__show($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($Card_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
