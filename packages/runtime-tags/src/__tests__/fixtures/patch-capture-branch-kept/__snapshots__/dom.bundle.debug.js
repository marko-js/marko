// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_on = ($scope, input_on) => $input_on$1($scope["#childScope/0"], input_on);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/list.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$2 = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$2, "b%c", 0, $input$2);

// tags/probe.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $get__script = _script("__tests__/tags/probe.marko_0_get#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $get$1 = /*@__PURE__*/ _const("get", $get__script);
const $input$1 = ($scope, input) => $get$1($scope, input.get);
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template$1, " b", 0, $input$1);

// tags/child.marko
const $template = "<button>add</button><!><!>";
const $walks = " b%c";
const $item_content__if = /*@__PURE__*/ _if("#text/0", "<span>shown</span>");
const $item_content__s = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_2_s#1:2/init", _fill_join_closure("__tests__/tags/child.marko_fill2", "s", /*@__PURE__*/ _closure_get("s/9", ($scope) => $item_content__if($scope, $scope._.s ? 0 : 1), 0, "__tests__/tags/child.marko_2_s#1:2/subscribe"), 0));
const $item_content__setup = $item_content__s;
const $item_content = /*@__PURE__*/ _content("__tests__/tags/child.marko_2*content", "<!><!><!>", "b%", $item_content__setup);
const $if_content__s__closure = /*@__PURE__*/ _closure($item_content__s);
const $if_content__s = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill2", "s", ($scope) => {
	$if_content__s__closure($scope);
	$get$1($scope["#childScope/1"], $get($scope));
}, /*@__PURE__*/ _fill_mark("s", $if_content__s__closure));
const $if_content__input_show = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_show#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_show", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__s($scope, $scope._.input_show))));
const $if_content__setup = ($scope) => {
	$if_content__input_show._($scope);
	$if_content__items._($scope);
};
const $if_content__items = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_items#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	let $item;
	forOf($scope._.items, (item) => {
		$item = attrTags($item, { content: $item_content($scope) });
	});
	$input_item($scope["#childScope/0"], $item);
}));
const $items = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill1", "items/6", $if_content__items);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, $scope.items.length + 1]);
}));
function $setup($scope) {
	$setup__script($scope);
	$items($scope, [1, 2]);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($template$2, $template$1), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)("b%c", " b"), $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_show($scope, input.show);
};
const $input_show = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_show", $if_content__input_show);
const $get = ($scope) => function() {
	return "s:" + $scope.s;
};
_bind_resume("__tests__/tags/child.marko_1/get s", $get);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
