// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button id=t>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_label#2:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label))));
const $if_content2__setup = $if_content2__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__label__script = _script("__tests__/template.marko_2_label#4", ($scope) => console.log("effect", $scope.label));
const $Panel_content__label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "label", ($scope) => {
	$if_content2__label($scope);
	$Panel_content__label__script($scope);
}, /*@__PURE__*/ _fill_mark("label", $if_content2__label));
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_2*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_open#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_open", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__isOpen($scope["#childScope/0"], $scope._.input_open))));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__input_label._($scope);
	$Panel_content__label($scope["#childScope/0"], "k");
	$Panel_content__isOpen($scope["#childScope/1"], true);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:7/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__label($scope["#childScope/1"], $scope._.input_label))));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "Tag", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: "dyn"
}))));
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
	$Panel($scope, { content: $Panel_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_open($scope, input.open);
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
const $input_open = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_open", $if_content__input_open);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
