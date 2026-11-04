// tags/list.marko
const $template$1 = "<button>copy</button><!><!>";
const $walks$1 = " b%c";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items]));
const $input_item = $items;
const $setup__script$1 = _script("__tests__/tags/list.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items]);
}));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $item_content__n = /*@__PURE__*/ _closure_get("n/8", ($scope) => _text($scope["#text/1"], $scope._._.n), ($scope) => $scope._._, "__tests__/template.marko_2_n#0:6/subscribe");
const $item_content__setup = $item_content__n;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em><!> <!></em>", "D%c%", $item_content__setup), { item_text: ($scope) => _text($scope["#text/0"], $scope.item_text) });
_resumed["__tests__/template.marko_2*content"] = $item_content;
const $if_content__input_items = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	let $item;
	forOf($scope._.input_items, (item) => $item = attrTags($item, { content: $item_content($scope, { item_text: item?.text }) }));
	$input_item($scope["#childScope/0"], $item);
});
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $n__closure = /*@__PURE__*/ _closure($item_content__n);
const $n = /*@__PURE__*/ _let("n/6", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
