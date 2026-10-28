// template.marko
const $Panel_content__walks = "b%bD l";
const $Panel_content__template = "<!><!><span> </span>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content2__setup = $if_content2__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen__OR__label = /*@__PURE__*/ _fill_join("| __tests__/template.marko_fill2", "label", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_isOpen#4_label#5/init", 6, ($scope) => _text($scope["#text/1"], $scope.isOpen ? $scope.label : "-")));
const $Panel_content__isOpen = /*@__PURE__*/ _const("isOpen", ($scope) => {
	$Panel_content__if($scope, $scope.isOpen ? 0 : 1);
	$Panel_content__isOpen__OR__label($scope);
});
const $Panel_content__label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "label", ($scope) => {
	$if_content2__label($scope);
	$Panel_content__isOpen__OR__label($scope);
}, /*@__PURE__*/ _fill_mark("label", $if_content2__label));
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_2*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_show = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_show#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__isOpen($scope["#childScope/0"], $scope._.input_show)));
const $if_content__setup__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global_brand#0:17", ($scope) => {
	$Panel_content__label($scope["#childScope/0"], $scope.$global.brand);
	$Panel_content__label($scope["#childScope/1"], $scope.$global.brand);
	_text($scope["#text/2"], $scope.$global.brand);
}, "brand");
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$Panel_content__isOpen($scope["#childScope/1"], true);
	$if_content__setup__$global_brand($scope);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "Tag", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2)));
const $open = /*@__PURE__*/ _let("open/8", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or(10, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<span> </span>`)($Panel_content__template, $Panel_content__template), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&D l`)($Panel_content__walks, $Panel_content__walks), $if_content__setup);
const $input_show = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if($scope, $scope.input_show ? 0 : 1);
	$if_content__input_show($scope);
});
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__open__OR__Tag);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_other($scope, input.other);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
