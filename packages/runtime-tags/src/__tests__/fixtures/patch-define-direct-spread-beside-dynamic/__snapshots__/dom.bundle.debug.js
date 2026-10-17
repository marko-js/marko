// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $if_content__label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $if_content__setup = $if_content__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill4", "Tag", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_label", /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill3", "open/10", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill4", "Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_other#8_Panel#11/init", 12, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
}
const $input_show__OR__input_rest = /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_show#5_input_rest#6/init", 7, ($scope) => {
	const $tag_input_spread = {
		isOpen: $scope.input_show,
		...$scope.input_rest
	};
	$Panel_content__isOpen($scope["#childScope/0"], $tag_input_spread.isOpen);
	$Panel_content__tag_input_label($scope["#childScope/0"], $tag_input_spread.label);
});
const $input_show = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_show", $input_show__OR__input_rest));
const $input_rest = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _const("input_rest", $input_show__OR__input_rest));
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_label", $input_label__OR__open__OR__Tag);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_rest($scope, input.rest);
	$input_other($scope, input.other);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
