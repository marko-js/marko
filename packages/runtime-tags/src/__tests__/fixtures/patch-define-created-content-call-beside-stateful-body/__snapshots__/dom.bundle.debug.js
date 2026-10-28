// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Wrap_content2__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Wrap_content2__walks);
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content2__content = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.content)));
const $if_content2__setup = $if_content2__content;
const $Wrap_content2__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $Wrap_content2__show = ($scope, show) => $Wrap_content2__if($scope, show ? 0 : 1);
const $Wrap_content2__tag_input_content = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "content", $if_content2__content);
const $Wrap_content2__$params = ($scope, $params3) => $Wrap_content2__$temp($scope, $params3[0]);
const $Wrap_content2__$temp = ($scope, $temp2) => {
	$Wrap_content2__show($scope, $temp2.show);
	$Wrap_content2__tag_input_content($scope, $temp2.content);
};
const $if_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_label#2:4/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content__setup = $if_content__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_2*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $Wrap_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/13", ($scope) => $Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:6/subscribe"), 0));
const $Wrap_content__setup = ($scope) => {
	$Wrap_content__input_label($scope);
	$Panel_content__isOpen($scope["#childScope/0"], true);
};
const $Wrap_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $Wrap_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "Tag", /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: "y"
}))));
const $open = /*@__PURE__*/ _let("open/8", $open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or(10, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$Wrap_content2__tag_input_content($scope["#childScope/0"], $Wrap_content($scope));
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $Wrap_content2__show($scope["#childScope/0"], input_show);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
const $input_label__closure = /*@__PURE__*/ _closure($Wrap_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
