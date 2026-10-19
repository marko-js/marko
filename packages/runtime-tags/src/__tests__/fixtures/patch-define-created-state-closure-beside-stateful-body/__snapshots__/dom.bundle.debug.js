// template.marko
const $Panel_content__walks = "D l%c";
const $Panel_content__template = "<span> </span><!><!>";
const $template = "<!><!><!><button id=t>toggle</button>";
const $walks = "b%b%b b";
const $if_content2__label = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $if_content2__setup = ($scope) => {
	$if_content2__label._($scope);
	$if_content2__n._($scope);
};
const $if_content2__n = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.n));
const $Panel_content__open = /*@__PURE__*/ _closure_get("open/14", ($scope) => _text($scope["#text/0"], $scope._.open ? "o" : "c"), 0, "__tests__/template.marko_2_open#0:8/subscribe");
const $Panel_content__n = /*@__PURE__*/ _let("n/6");
const $Panel_content__setup = ($scope) => {
	$Panel_content__open($scope);
	$Panel_content__n($scope, 1);
};
const $Panel_content__if = /*@__PURE__*/ _if("#text/1", "<em><!><!></em>", "D%b%", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_2*content", $Panel_content__template, $Panel_content__walks, $Panel_content__setup, $Panel_content__$params);
const $if_content__input_label = /*@__PURE__*/ _shell_init("__tests__/template.marko_1_input_label#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label)));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__init($scope);
};
const $if_content__init = _resumed["__tests__/template.marko_1_#childScope#0/init"] = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Panel_content__setup($scope["#childScope/0"]);
	$Panel_content__isOpen($scope["#childScope/0"], true);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "Tag", /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: "y"
}))));
const $open__closure = /*@__PURE__*/ _closure($Panel_content__open);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/8", ($scope) => {
	$open__OR__Tag($scope);
	$open__closure($scope);
});
const $Tag = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "Tag", $open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or(10, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", $if_content__input_label));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
