// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = "b%c";
const $Outer_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Outer_content__walks);
const $if_content2__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_label#1:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label))));
const $if_content2__setup = $if_content2__label;
const $if_content__isOpen = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_isOpen#2:3/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "isOpen", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Inner_content__isOpen($scope["#childScope/0"], $scope._.isOpen))));
const $if_content__setup = ($scope) => {
	$if_content__isOpen._($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_label#2:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill4", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Inner_content__tag_input_label($scope["#childScope/0"], $scope._.label))));
const $Outer_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks), $if_content__setup);
const $Outer_content__show = ($scope, show) => $Outer_content__if($scope, show ? 0 : 1);
const $Outer_content__tag_input_isOpen = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "isOpen", $if_content__isOpen);
const $Outer_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill4", "label", $if_content__label);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__tag_input_isOpen($scope, $temp2.isOpen);
	$Outer_content__tag_input_label($scope, $temp2.label);
	$Outer_content__show($scope, $temp2.show);
};
const $Inner_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content2__setup);
const $Inner_content__isOpen = ($scope, isOpen) => $Inner_content__if($scope, isOpen ? 0 : 1);
const $Inner_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "label", $if_content2__label);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__isOpen($scope, $temp.isOpen);
	$Inner_content__tag_input_label($scope, $temp.label);
};
const $Inner_content = _content("__tests__/template.marko_1*content", $Inner_content__template, $Inner_content__walks, 0, $Inner_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "Tag", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2)));
const $open = /*@__PURE__*/ _let("open/9", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Inner = /*@__PURE__*/ _or(11, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Inner));
const $Inner = /*@__PURE__*/ _const("Inner", $input_other__OR__Inner);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
	$Inner($scope, { content: $Inner_content($scope) });
}
const $input_open = ($scope, input_open) => $Outer_content__tag_input_isOpen($scope["#childScope/0"], input_open);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$Outer_content__tag_input_label($scope["#childScope/0"], $scope.input_label);
}, $input_label__OR__open__OR__Tag);
const $input_show = ($scope, input_show) => $Outer_content__show($scope["#childScope/0"], input_show);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Inner);
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
	$input_other($scope, input.other);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
