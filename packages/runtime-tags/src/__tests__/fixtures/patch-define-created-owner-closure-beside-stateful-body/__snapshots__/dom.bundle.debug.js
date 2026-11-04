// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_3_input_label#0:5/setup", "#text/0", 0, ($scope) => {
	$Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label);
	$Panel_content__tag_input_label($scope["#childScope/1"], $scope._.input_label);
});
const $if_content2__setup = ($scope) => {
	$if_content2__input_label._($scope);
	$if_content2__input_open._($scope);
	$scope["#childScope/0"]._ = $scope._;
	$scope["#childScope/1"]._ = $scope._;
	$Panel_content__isOpen($scope["#childScope/1"], true);
};
const $if_content2__input_open = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_3_input_open#0:7/setup", "#text/0", 0, ($scope) => $Panel_content__isOpen($scope["#childScope/0"], $scope._.input_open));
const $if_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:5/subscribe", "input_label/14", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#5/subscribers", 0);
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_label#1:4/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em><!> <!></em>", "D%c%", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content_resume("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_label#5_open#9_Tag#12/setup", 13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2);
const $open = _let("open/9", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_other#8_Panel#10/setup", 11, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks), $if_content2__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$input_label__closure($scope);
	$if_content2__input_label($scope);
});
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_other($scope, input.other);
	$input_show($scope, input.show);
	$input_open($scope, input.open);
};
const $input_open = /*@__PURE__*/ _const("input_open", $if_content2__input_open);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
