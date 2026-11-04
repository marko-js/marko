// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $for_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]?.label);
const $if_content2__attrs = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_3_attrs#1:2/setup", "#text/0", 0, ($scope) => _text($scope["#text/1"], Object.keys($scope._.attrs).length));
const $if_content2__setup = ($scope) => {
	$if_content2__attrs._($scope);
	$if_content2__attrs_item._($scope);
};
const $if_content2__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<em> </em>", "D ", 0, $for_content__$params);
const $if_content2__attrs_item = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_3_attrs_item#1:4/setup", "#text/0", 0, ($scope) => $if_content2__for($scope, [$scope._.attrs_item]));
const $if_content__setup = ($scope) => {
	let $item;
	if (true) {
		$item = attrTag({ label: "x" });
	}
	$Panel_content__tag_input($scope["#childScope/0"], {
		isOpen: true,
		item: $item
	});
};
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><span> </span>", "b%bD ", $if_content2__setup);
const $Panel_content__tag_input = /*@__PURE__*/ _const("attrs", ($scope) => {
	$Panel_content__if($scope, $scope.attrs?.isOpen ? 0 : 1);
	$Panel_content__attrs_item($scope, $scope.attrs?.item);
	$if_content2__attrs($scope);
});
const $Panel_content__$params = ($scope, $params2) => $Panel_content__tag_input($scope, $params2[0]);
const $Panel_content__attrs_item = /*@__PURE__*/ _const("attrs_item", $if_content2__attrs_item);
const $Panel_content = _content_resume("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_label#7_open#8_Tag#11/setup", 12, ($scope) => $dynamicTag($scope, $scope.Tag, ($_) => ({
	isOpen: !$scope.open,
	item: attrTag({ label: $scope.input_label + "!" })
})), 2);
const $open = _let("open/8", $input_label__OR__open__OR__Tag);
const $Tag = /*@__PURE__*/ _const("Tag", $input_label__OR__open__OR__Tag);
const $input_other__OR__Panel = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_other#6_Panel#9/setup", 10, ($scope) => $Tag($scope, $scope.input_other ? "div" : $scope.Panel));
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
	$input_other($scope, input.other);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
