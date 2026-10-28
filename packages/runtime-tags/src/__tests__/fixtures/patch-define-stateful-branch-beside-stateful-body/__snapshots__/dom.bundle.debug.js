// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button><button>shown</button>";
const $walks = "b%b%b b b";
const $if_content2__label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $if_content2__setup = $if_content2__label;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("__tests__/template.marko_2*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Panel_content__isOpen($scope["#childScope/0"], true);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "Tag", /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	label: $scope.input_label + "!"
})), 2));
const $open = _let("open/8", $input_label__OR__open__OR__Tag);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $shown = _let("shown/9", ($scope) => $if($scope, $scope.shown ? 0 : 1));
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or(11, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
const $Panel = /*@__PURE__*/ _const("Panel", $input_other__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$open($scope, !$scope.open);
	});
	_on($scope["#button/3"], "click", function() {
		$shown($scope, !$scope.shown);
	});
});
function $setup($scope) {
	$open($scope, false);
	$shown($scope, true);
	$setup__script($scope);
	$Panel($scope, { content: $Panel_content($scope) });
}
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$if_content__input_label($scope);
}));
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
