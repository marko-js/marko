// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("fail");
})());
const $if_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_label#3:4/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content__setup = $if_content__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_3*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $try_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content2__setup);
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_fail#0:6/init", /*@__PURE__*/ _closure_get("input_fail/14", ($scope) => $try_content__if($scope, $scope._.input_fail ? 0 : 1), 0, "__tests__/template.marko_2_input_fail#0:6/subscribe"));
const $try_content__setup = $try_content__input_fail;
const $catch_content__input_label = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/13", ($scope) => $Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe"), 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$Panel_content__isOpen($scope["#childScope/0"], true);
};
const $catch_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $catch_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "Tag", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2)));
const $open = _let("open/8", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or(10, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><span>ok</span>", "b%", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$try($scope);
	$setup__script($scope);
	$Panel($scope, { content: $Panel_content($scope) });
}
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$input_label__closure($scope);
});
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_fail($scope, input.fail);
	$input_other($scope, input.other);
};
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
