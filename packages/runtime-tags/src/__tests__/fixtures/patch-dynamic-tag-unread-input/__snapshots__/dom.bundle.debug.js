// card-a.marko
const $template$2 = "<div class=a> </div>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_user_name$1 = ($scope, input_user_name) => _text($scope["#text/0"], input_user_name);
const $input$2 = ($scope, input) => $input_user$2($scope, input.user);
const $input_user$2 = ($scope, input_user) => $input_user_name$1($scope, input_user?.name);
var card_a_default = /*@__PURE__*/ _template("__tests__/card-a.marko", $template$2, "D l", 0, $input$2);

// card-b.marko
const $template$1 = "<div class=b> </div>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_user_name = ($scope, input_user_name) => _text($scope["#text/0"], input_user_name);
const $input$1 = ($scope, input) => $input_user$1($scope, input.user);
const $input_user$1 = ($scope, input_user) => $input_user_name($scope, input_user?.name);
var card_b_default = /*@__PURE__*/ _template("__tests__/card-b.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<button class=inc> </button><!><!><!><!><!>";
const $walks = " D l%b%b%b%c";
const $Alt_content__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $Alt_content__$params = ($scope, $params3) => $Alt_content__user_name($scope, $params3[0].user?.name);
const $Alt_content = _content("__tests__/template.marko_2*content", "<i> </i>", "D ", 0, $Alt_content__$params);
const $Row_content__user_name = ($scope, user_name) => _text($scope["#text/0"], user_name);
const $Row_content__$params = ($scope, $params2) => $Row_content__user_name($scope, $params2[0].user?.name);
const $Row_content = _content("__tests__/template.marko_1*content", "<p> </p>", "D ", 0, $Row_content__$params);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/20", ($scope) => _text($scope["#text/1"], $scope.n));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_alt__OR__input_user2__OR__Row__OR__Alt = /*@__PURE__*/ _or(23, ($scope) => $dynamicTag2($scope, $scope.input_alt ? $scope.Alt : $scope.Row, ($_) => ({ user: $scope.input_user2 })), 3);
const $Row = /*@__PURE__*/ _const("Row", $input_alt__OR__input_user2__OR__Row__OR__Alt);
const $Alt = /*@__PURE__*/ _const("Alt", $input_alt__OR__input_user2__OR__Row__OR__Alt);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$Row($scope, { content: $Row_content($scope) });
	$Alt($scope, { content: $Alt_content($scope) });
	$setup__script($scope);
	$n($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_which__OR__input_user = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_which ? card_a_default : card_b_default, ($_) => ({ user: $scope.input_user })));
const $input_which = /*@__PURE__*/ _const("input_which", $input_which__OR__input_user);
const $input_user = /*@__PURE__*/ _const("input_user", $input_which__OR__input_user);
const $input_alt = /*@__PURE__*/ _const("input_alt", $input_alt__OR__input_user2__OR__Row__OR__Alt);
const $input_user2 = /*@__PURE__*/ _const("input_user2", $input_alt__OR__input_user2__OR__Row__OR__Alt);
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_tag__OR__input_cls__OR__input_title = /*@__PURE__*/ _or(16, ($scope) => $dynamicTag3($scope, $scope.input_tag, ($_) => ({
	class: $scope.input_cls,
	title: $scope.input_title
})), 2);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_cls__OR__input_title);
const $input_cls = /*@__PURE__*/ _const("input_cls", $input_tag__OR__input_cls__OR__input_title);
const $input_title = /*@__PURE__*/ _const("input_title", $input_tag__OR__input_cls__OR__input_title);
const $dynamicTag4 = /*@__PURE__*/ _dynamic_tag("#text/5");
const $input_none__OR__input_hidden = /*@__PURE__*/ _or(19, ($scope) => $dynamicTag4($scope, $scope.input_none ? card_a_default : null, ($_) => ({ user: $scope.input_hidden })));
const $input_none = /*@__PURE__*/ _const("input_none", $input_none__OR__input_hidden);
const $input_hidden = /*@__PURE__*/ _const("input_hidden", $input_none__OR__input_hidden);
const $input = ($scope, input) => {
	$input_which($scope, input.which);
	$input_user($scope, input.user);
	$input_alt($scope, input.alt);
	$input_user2($scope, input.user2);
	$input_tag($scope, input.tag);
	$input_cls($scope, input.cls);
	$input_title($scope, input.title);
	$input_none($scope, input.none);
	$input_hidden($scope, input.hidden);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
