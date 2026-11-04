// tags/card2.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", 0, $for_content__$params);
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/card2.marko_0_c#5/fill", "c/5", ($scope) => $for($scope, [$scope.c]));
const $input_item = $c;
const $setup__script = _script("__tests__/tags/card2.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, []);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var card2_default = /*@__PURE__*/ _template("__tests__/tags/card2.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $item_content2__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:4/subscribe", "input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 1);
const $item_content2__setup = $item_content2__input_label;
const $item_content2 = _content("__tests__/template.marko_3*content", "<i> </i>", "D ", $item_content2__setup);
const $item_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $item_content__setup = $item_content__input_label;
const $item_content = _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $item_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_item($scope["#childScope/0"], attrTags(attrTag({ content: $item_content($scope) }), { content: $item_content2($scope) }));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($item_content__input_label, $item_content2__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
