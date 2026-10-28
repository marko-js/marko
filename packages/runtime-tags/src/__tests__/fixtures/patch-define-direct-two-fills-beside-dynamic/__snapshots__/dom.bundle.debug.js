// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $if_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_label#1:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label))));
const $if_content__setup = $if_content__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "Tag", /*@__PURE__*/ _or(14, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2));
const $open = /*@__PURE__*/ _let("open/10", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or(12, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
}
const $input_show__OR__input_label__OR__input_rest = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_input_show#5_input_label#6_input_rest#7/init", 8, ($scope) => {
	const $tag_input_spread = {
		isOpen: $scope.input_show,
		label: $scope.input_label,
		...$scope.input_rest
	};
	$Panel_content__isOpen($scope["#childScope/0"], $tag_input_spread.isOpen);
	$Panel_content__tag_input_label($scope["#childScope/0"], $tag_input_spread.label);
}, 2);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_label__OR__input_rest);
_fill_run("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _fill_mark("input_label", $input_label__OR__open__OR__Tag));
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$input_show__OR__input_label__OR__input_rest($scope);
});
const $input_rest = /*@__PURE__*/ _const("input_rest", $input_show__OR__input_label__OR__input_rest);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_rest($scope, input.rest);
	$input_other($scope, input.other);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
