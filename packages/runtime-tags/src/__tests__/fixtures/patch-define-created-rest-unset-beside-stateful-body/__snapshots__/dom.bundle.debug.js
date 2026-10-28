// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__rest__script = _script("__tests__/template.marko_3_rest#2:6", ($scope) => _attrs_script($scope, "#em/0"));
const $if_content2__rest = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_rest#2:6/init", /*@__PURE__*/ _fill_signal("rest __tests__/template.marko_fill5", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content2__rest__script($scope);
	_attrs($scope, "#em/0", $scope._.rest);
	_text($scope["#text/1"], Object.keys($scope._.rest).join());
})));
const $if_content2__setup = $if_content2__rest;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", " D ", $if_content2__setup);
const $Panel_content__isOpen__OR__hidden = /*@__PURE__*/ _fill_signal("isOpen __tests__/template.marko_fill3,hidden __tests__/template.marko_fill4", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_isOpen#3_hidden#4/init", 5, ($scope) => $Panel_content__if($scope, $scope.isOpen && !$scope.hidden ? 0 : 1)));
const $Panel_content__isOpen = /*@__PURE__*/ _const("isOpen", $Panel_content__isOpen__OR__hidden);
const $Panel_content__hidden = /*@__PURE__*/ _const("hidden", $Panel_content__isOpen__OR__hidden);
const $Panel_content__tag_input_$rest = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill5", "rest", $if_content2__rest);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__tag_input_$rest($scope, (({ hidden, isOpen, ...rest }) => rest)($temp));
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__hidden($scope, $temp.hidden);
};
const $Panel_content = _content("__tests__/template.marko_2*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_open#0:6/init", /*@__PURE__*/ _fill_signal("input_open __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__isOpen($scope["#childScope/0"], $scope._.input_open))));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__input_label._($scope);
	$Panel_content__hidden($scope["#childScope/0"]);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:7/init", /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill1/unpatched", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__tag_input_$rest($scope["#childScope/0"], { title: $scope._.input_label }))));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched,Tag __tests__/template.marko_fill2", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	title: $scope.input_label + "!"
})), 2));
const $open = /*@__PURE__*/ _let("open/9", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
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
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$if_content__input_label($scope);
}, $input_label__OR__open__OR__Tag);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_open($scope, input.open);
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
const $input_open = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_open", $if_content__input_open);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
