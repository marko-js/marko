// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $for_content__it_label = ($scope, it_label) => _text($scope["#text/0"], it_label);
const $for_content__$params = ($scope, $params3) => $for_content__it_label($scope, $params3[0]?.label);
const $if_content2__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<em> </em>", "D ", 0, $for_content__$params);
const $if_content2__first_item = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content2__for($scope, [$scope._.first_item]));
const $if_content2__setup = $if_content2__first_item;
const $if_content__setup = ($scope) => {
	let $item;
	if (true) {
		$item = attrTag({ label: "x" });
	}
	$Panel_content__all($scope["#childScope/0"], [{
		isOpen: true,
		item: $item
	}]);
};
const $Panel_content__first = ($scope, first) => {
	$Panel_content__first_isOpen($scope, first?.isOpen);
	$Panel_content__first_item($scope, first?.item);
};
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $Panel_content__first_isOpen = ($scope, first_isOpen) => $Panel_content__if($scope, first_isOpen ? 0 : 1);
const $Panel_content__first_item = /*@__PURE__*/ _const("first_item", $if_content2__first_item);
const $Panel_content__all = ($scope, all) => $Panel_content__first($scope, all.at(0));
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__all);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "Tag", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	item: attrTag({ label: $scope.input_label + "!" })
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
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__Panel);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__open__OR__Tag);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_other($scope, input.other);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
