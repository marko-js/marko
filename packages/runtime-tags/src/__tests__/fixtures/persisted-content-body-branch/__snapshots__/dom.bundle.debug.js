// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $else_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._._._.input_note), ($scope) => $scope._._._);
const $else_content__setup = $else_content__input_note;
const $if_content2__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._._._.input_note), ($scope) => $scope._._._);
const $if_content2__setup = $if_content2__input_note;
const $card_content__if = /*@__PURE__*/ _if("#text/0", "<em>A:<!></em>", "Db%", $if_content2__setup, "<strong>B:<!></strong>", "Db%", $else_content__setup);
const $card_content__input_alt = /*@__PURE__*/ _closure_get("input_alt", ($scope) => $card_content__if($scope, $scope._._.input_alt ? 0 : 1), ($scope) => $scope._._);
const $card_content__setup = $card_content__input_alt;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $card_content__setup);
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$input_content_direct($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
	$input_alt($scope, input.alt);
	$input_note($scope, input.note);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
const $input_alt__closure = /*@__PURE__*/ _closure($card_content__input_alt);
const $input_alt = /*@__PURE__*/ _const("input_alt", $input_alt__closure);
const $input_note__closure = /*@__PURE__*/ _closure($if_content2__input_note, $else_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
