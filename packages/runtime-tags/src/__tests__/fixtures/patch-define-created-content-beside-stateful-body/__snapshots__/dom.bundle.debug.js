// template.marko
const $Panel_content2__walks = "b%c";
const $Panel_content2__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content2__content = /*@__PURE__*/ _fill("__tests__/template.marko_fill3", "content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.content)));
const $if_content2__setup = $if_content2__content;
const $Panel_content2__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $Panel_content2__isOpen = ($scope, isOpen) => $Panel_content2__if($scope, isOpen ? 0 : 1);
const $Panel_content2__tag_input_content = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "content", $if_content2__content);
const $Panel_content2__$params = ($scope, $params2) => $Panel_content2__$temp($scope, $params2[0]);
const $Panel_content2__$temp = ($scope, $temp) => {
	$Panel_content2__isOpen($scope, $temp.isOpen);
	$Panel_content2__tag_input_content($scope, $temp.content);
};
const $Panel_content2 = _content("__tests__/template.marko_4*content", $Panel_content2__template, $Panel_content2__walks, 0, $Panel_content2__$params);
const $Tag_content__input_label = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _closure_get("input_label/15", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_3_input_label#0:7/subscribe"), 1);
const $Tag_content__setup = $Tag_content__input_label;
const $Tag_content = _content("__tests__/template.marko_3*content", "<b><!>!</b>", "D%", $Tag_content__setup);
const $Panel_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:7/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _closure_get("input_label/15", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:7/subscribe"), 0));
const $Panel_content__setup = $Panel_content__input_label;
const $Panel_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $Panel_content__setup);
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_open#0:6/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_open", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content2__isOpen($scope["#childScope/0"], $scope._.input_open))));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$Panel_content2__tag_input_content($scope["#childScope/0"], $Panel_content($scope));
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $Tag_content);
const $open__OR__Tag = /*@__PURE__*/ _fill("__tests__/template.marko_fill2", "Tag", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({ isOpen: !$scope.open }))));
const $open = _let("open/9", $open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or(11, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
	$Panel($scope, { content: $Panel_content2($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content2__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content2__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_open($scope, input.open);
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
const $input_open = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_open", $if_content__input_open);
const $input_label__closure = /*@__PURE__*/ _closure($Panel_content__input_label, $Tag_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
