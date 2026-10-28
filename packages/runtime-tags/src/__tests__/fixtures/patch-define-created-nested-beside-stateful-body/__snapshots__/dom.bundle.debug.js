// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Inner_content__walks, $Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Inner_content__template, $Inner_content__template);
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_label#2:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill3", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label))));
const $if_content2__setup = $if_content2__label;
const $Outer_content__isOpen = ($scope, isOpen) => $Inner_content__isOpen($scope["#childScope/0"], isOpen);
const $Outer_content__label = ($scope, label) => {
	$Inner_content__tag_input_label($scope["#childScope/0"], label);
	$Inner_content__tag_input_label($scope["#childScope/1"], label);
};
const $Outer_content__setup = ($scope) => $Inner_content__isOpen($scope["#childScope/1"], true);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__isOpen($scope, $temp2.isOpen);
	$Outer_content__label($scope, $temp2.label);
};
const $Inner_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content2__setup);
const $Inner_content__isOpen = ($scope, isOpen) => $Inner_content__if($scope, isOpen ? 0 : 1);
const $Inner_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "label", $if_content2__label);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__isOpen($scope, $temp.isOpen);
	$Inner_content__tag_input_label($scope, $temp.label);
};
const $Inner_content = _content("__tests__/template.marko_2*content", $Inner_content__template, $Inner_content__walks, 0, $Inner_content__$params);
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_open#0:6/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_open", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Outer_content__isOpen($scope["#childScope/0"], $scope._.input_open))));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__input_label._($scope);
	$Outer_content__setup($scope["#childScope/0"]);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:7/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Outer_content__label($scope["#childScope/0"], $scope._.input_label))));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill("__tests__/template.marko_fill2", "Tag", /*@__PURE__*/ _fill("__tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2)));
const $open = _let("open/9", $input_label__OR__open__OR__Tag);
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
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Inner);
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
