// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__row_id($scope);
};
const $card_content__row_id = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_row_id#1:4/init", /*@__PURE__*/ _closure_get("row_id/6", ($scope) => _text($scope["#text/0"], $scope._.row_id)));
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em><!> <!></em>", "D%c%", $card_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $for_content__row_user = ($scope, row_user) => $input_user($scope["#childScope/0"], row_user);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_user($scope, $params2[0]?.user);
	$for_content__row_id($scope, $params2[0]?.id);
};
const $for_content__row_id__closure = /*@__PURE__*/ _closure($card_content__row_id);
const $for_content__row_id = /*@__PURE__*/ _const("row_id", $for_content__row_id__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<section><button>clear</button><!><p> </p></section>";
const $walks = "D b%bD m";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/8", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input_user_name = ($scope, input_user_name) => _text($scope["#text/2"], input_user_name);
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_user($scope, input.user);
};
const $input_user = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
