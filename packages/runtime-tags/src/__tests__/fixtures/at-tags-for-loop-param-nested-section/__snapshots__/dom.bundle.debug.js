// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=add>add</button><button id=toggle>toggle</button><button id=rename>rename</button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b b b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $if_content2__item_text = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.item_text));
const $if_content2__setup = $if_content2__item_text;
const $for_content__i = /*@__PURE__*/ _for_closure("#text/2", ($scope) => _text($scope["#text/0"], $scope._.i));
const $for_content__setup = ($scope) => {
	$for_content__i._($scope);
	_text($scope["#text/1"], $scope["#LoopKey"]);
};
const $showbi_content__i = /*@__PURE__*/ _closure_get("i/9", ($scope) => _text($scope["#text/0"], $scope._.i), 0, "__tests__/template.marko_4_i#3/subscribe");
const $showbi_content__setup = $showbi_content__i;
const $showbi_content = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "tag <!>", "b%", $showbi_content__setup);
const $if_content__i = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.i));
const $if_content__setup = $if_content__i;
const $item_content2__if = /*@__PURE__*/ _if("#text/0", "<strong> </strong>", "D ", $if_content2__setup);
const $item_content2__show = /*@__PURE__*/ _closure_get("show/8", ($scope) => $item_content2__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_2_show#6/subscribe");
const $item_content2__setup = $item_content2__show;
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $item_content2__setup), { item_text: $if_content2__item_text });
const $item_content__if = /*@__PURE__*/ _if("#text/0", "<em>if <!></em>", "Db%", $if_content__setup);
const $item_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $showbi_content);
const $item_content__show = /*@__PURE__*/ _closure_get("show/8", ($scope) => {
	$item_content__if($scope, $scope._.show ? 0 : 1);
	$item_content__dynamicTag($scope, $scope._.show ? "b" : "i");
}, 0, "__tests__/template.marko_1_show#6/subscribe");
const $item_content__for = /*@__PURE__*/ _for_until_unkeyed("#text/2", "<span><!>.<!></span>", "D%c%", $for_content__setup);
const $item_content__setup = ($scope) => {
	$item_content__show($scope);
	$item_content__for($scope, [
		2,
		0,
		1
	]);
};
const $item_content__i__closure = /*@__PURE__*/ _closure($showbi_content__i);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!><!><!>", "b%b%b%", $item_content__setup), { i($scope) {
	$if_content__i($scope);
	$item_content__i__closure($scope);
	$for_content__i($scope);
} });
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	let $item;
	forUntil($scope.count, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content($scope, { i }) });
	});
	$input_item($scope["#childScope/3"], $item);
});
const $show__closure = /*@__PURE__*/ _closure($item_content__show, $item_content2__show);
const $show = /*@__PURE__*/ _let("show/6", $show__closure);
const $items = /*@__PURE__*/ _let("items/7", ($scope) => {
	let $item2;
	forOf($scope.items, (item) => {
		$item2 = attrTags($item2, { content: $item_content2($scope, { item_text: item?.text }) });
	});
	$input_item($scope["#childScope/4"], $item2);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/1"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, $scope.items.map((item) => ({ text: item.text + "!" })));
	});
});
function $setup($scope) {
	$count($scope, 2);
	$show($scope, true);
	$items($scope, [{ text: "a" }, { text: "b" }]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
