// template.marko
const $template = "<button class=inc> </button><!><!><!>";
const $walks = " D l%b%c";
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill8", "n/16", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill5", "input_hidden", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill4", "input_x", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "input_title", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_sty", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_cls", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_tag", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_tag#6_input_cls#7_input_sty#8_input_title#9_input_x#10_input_hidden#11/init", 12, ($scope) => $dynamicTag($scope, $scope.input_tag, ($_) => ({
	class: $scope.input_cls,
	style: $scope.input_sty,
	title: $scope.input_title,
	"data-x": $scope.input_x,
	hidden: $scope.input_hidden,
	onClick: $onClick
})), 5)))))));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden);
const $input_cls = /*@__PURE__*/ _const("input_cls", $input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden);
const $input_sty = /*@__PURE__*/ _const("input_sty", $input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden);
const $input_title = /*@__PURE__*/ _const("input_title", $input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden);
const $input_x = /*@__PURE__*/ _const("input_x", $input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden);
const $input_hidden = /*@__PURE__*/ _const("input_hidden", $input_tag__OR__input_cls__OR__input_sty__OR__input_title__OR__input_x__OR__input_hidden);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_field__OR__input_checked = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill7", "input_checked", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill6", "input_field", /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_field#13_input_checked#14/init", 15, ($scope) => $dynamicTag2($scope, $scope.input_field, ($_) => ({
	type: "checkbox",
	checked: $scope.input_checked,
	checkedChange: $checkedChange
})))));
const $input_field = /*@__PURE__*/ _const("input_field", $input_field__OR__input_checked);
const $input_checked = /*@__PURE__*/ _const("input_checked", $input_field__OR__input_checked);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_cls($scope, input.cls);
	$input_sty($scope, input.sty);
	$input_title($scope, input.title);
	$input_x($scope, input.x);
	$input_hidden($scope, input.hidden);
	$input_field($scope, input.field);
	$input_checked($scope, input.checked);
};
function $onClick() {
	console.log("clicked");
}
function $checkedChange(next) {
	console.log(next);
}
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
_resumed["__tests__/template.marko_0/checkedChange"] = $checkedChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
