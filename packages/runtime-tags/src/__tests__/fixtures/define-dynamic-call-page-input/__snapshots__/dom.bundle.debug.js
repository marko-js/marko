// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $Other_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $Other_content__$params = ($scope, $params3) => $Other_content__label($scope, $params3[0].label);
const $Other_content = _content("__tests__/template.marko_3*content", "<i> </i>", "D ", 0, $Other_content__$params);
const $if_content__label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $if_content__setup = $if_content__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $open = /*@__PURE__*/ _let("open/8", ($scope) => $Panel_content__isOpen($scope["#childScope/0"], $scope.open));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__input_show__OR__Tag = /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: $scope.input_show,
	label: $scope.input_label + "!"
})), 2);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__input_show__OR__Tag);
const $input_other__OR__Panel__OR__Other = /*@__PURE__*/ _or(11, ($scope) => $Tag($scope, $scope.input_other ? $scope.Other : $scope.Panel), 2);
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel__OR__Other);
const $Other = /*@__PURE__*/ _const("Other", $input_other__OR__Panel__OR__Other);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$Panel_content__tag_input_label($scope["#childScope/0"], $scope.input_label);
	$input_label__OR__input_show__OR__Tag($scope);
});
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel__OR__Other);
const $input_show = /*@__PURE__*/ _const("input_show", $input_label__OR__input_show__OR__Tag);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_other($scope, input.other);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
