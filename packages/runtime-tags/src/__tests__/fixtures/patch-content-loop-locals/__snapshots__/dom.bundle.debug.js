// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& D l`)("b%c");
const $if_content__label = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content__setup = $if_content__label;
const $item_content__if = /*@__PURE__*/ _if("#text/1", "<b><!>!</b>", "D%", $if_content__setup);
const $item_content__input_show = /*@__PURE__*/ _closure_get("input_show", ($scope) => $item_content__if($scope, $scope._.input_show ? 0 : 1));
const $item_content__setup = ($scope) => {
	$item_content__input_show($scope);
	$item_content__n($scope);
};
const $item_content__n__OR__label = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "label", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.label + $scope._.n)));
const $item_content__n = /*@__PURE__*/ _init_closure_get("__tests__/template.marko_1_n#7/init", "n", $item_content__n__OR__label);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em> </em><!><!>", "D l%", $item_content__setup), { label($scope) {
	$item_content__n__OR__label($scope);
	$if_content__label($scope);
} });
const $n__closure = /*@__PURE__*/ _closure($item_content__n);
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$n__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_labels = /*@__PURE__*/ _const("input_labels", ($scope) => {
	let $item;
	forOf($scope.input_labels, (label) => {
		$item = attrTags($item, { content: $item_content($scope, { label }) });
	});
	$input_item($scope["#childScope/0"], $item);
});
const $input = ($scope, input) => {
	$input_labels($scope, input.labels);
	$input_show($scope, input.show);
};
const $input_show__closure = /*@__PURE__*/ _closure($item_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
