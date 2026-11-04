// tags/host.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $item_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/host.marko_2_input_label#0:6/subscribe", "input_label/9", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/host.marko_0_input_label#6/subscribers", 0);
const $item_content__setup = $item_content__input_label;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/tags/host.marko_2*content", "<i><!>:<!></i>", "D%c%", $item_content__setup), { entry_text: ($scope) => _text($scope["#text/0"], $scope.entry_text) });
_content_resume($item_content, 1);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_wrap__OR__input_items = /*@__PURE__*/ _or_patch("__tests__/tags/host.marko_1_input_wrap#0:4_input_items#0:5/setup", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.input_wrap, ($_) => {
	let $item;
	forOf($scope._.input_items, (entry) => {
		$item = attrTags($item, { content: $item_content($scope, { entry_text: entry?.text }) });
	});
	return { item: $item };
}));
const $if_content__input_wrap = /*@__PURE__*/ _if_closure_patch("__tests__/tags/host.marko_1_input_wrap#0:4/setup", "#text/0", 0, $if_content__input_wrap__OR__input_items);
const $if_content__setup$1 = ($scope) => {
	$if_content__input_wrap._($scope);
	$if_content__input_items._($scope);
};
const $if_content__input_items = /*@__PURE__*/ _if_closure_patch("__tests__/tags/host.marko_1_input_items#0:5/setup", "#text/0", 0, $if_content__input_wrap__OR__input_items);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup$1);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_wrap($scope, input.wrap);
	$input_items$1($scope, input.items);
	$input_label$1($scope, input.label);
};
const $input_wrap = /*@__PURE__*/ _const("input_wrap", $if_content__input_wrap);
const $input_items$1 = /*@__PURE__*/ _const("input_items", $if_content__input_items);
const $input_label__closure = /*@__PURE__*/ _closure($item_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
var host_default = /*@__PURE__*/ _template("__tests__/tags/host.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c");
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params3) => $for_content__dynamicTag($scope, $params3[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__item = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_item#1:4/setup", "#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.item]));
const $if_content__setup = $if_content__item;
const $wrap_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $wrap_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_open#5/fill", "open/5", ($scope) => $wrap_content__if($scope, $scope.open ? 0 : 1));
const $wrap_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$wrap_content__open($scope, !$scope.open);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__setup__script($scope);
	$wrap_content__open($scope, true);
};
const $wrap_content__$params = ($scope, $params2) => $wrap_content__item($scope, $params2[0].item);
const $wrap_content__item = /*@__PURE__*/ _const("item", $if_content__item);
const $wrap_content = _content("__tests__/template.marko_1*content", "<button class=toggle>toggle</button><!><!>", " b%", $wrap_content__setup, $wrap_content__$params);
function $setup($scope) {
	$input_wrap($scope["#childScope/0"], attrTag({ content: $wrap_content($scope) }));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/0"], input_items);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
