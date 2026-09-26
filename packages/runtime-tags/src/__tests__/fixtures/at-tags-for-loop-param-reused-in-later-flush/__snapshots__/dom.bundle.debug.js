// tags/list.marko
const $template$1 = "<button id=open>open</button><!><!>";
const $walks$1 = " b%c";
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $if_content__input_item = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.input_item]));
const $if_content__setup = $if_content__input_item;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/list.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, true);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_item($scope, input.item);
const $input_item = /*@__PURE__*/ _const("input_item", $if_content__input_item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%bD l`)($walks$1);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<span> </span>", "D "), { item($scope) {
	_text($scope["#text/0"], JSON.stringify($scope.item));
} });
_resumed["__tests__/template.marko_2*content"] = $item_content;
const $await_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$picked($scope._, $scope.v);
}));
const $await_content__setup = $await_content__setup__script;
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content__v = /*@__PURE__*/ _const("v");
const $picked = /*@__PURE__*/ _let("picked/7", ($scope) => _text($scope["#text/2"], $scope.picked && $scope.picked?.text));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$await_content($scope);
	$picked($scope, null);
}
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $item;
	forOf($scope.input_items, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item }) });
	});
	$input_item($scope["#childScope/0"], $item);
	$input_items_($scope, $scope.input_items?.[1]);
});
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<button id=pick>pick</button>", " ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $input_items_ = ($scope, input_items_1) => $await_promise($scope, resolveAfter(input_items_1));
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
