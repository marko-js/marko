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
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=rename>rename</button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_3*content", "<i><!><!></i>", "D%b%"), {
	x($scope) {
		_text($scope["#text/0"], $scope.x);
	},
	y($scope) {
		_text($scope["#text/1"], $scope.y);
	}
});
const $if_content__aa = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.aa));
const $if_content__setup = $if_content__aa;
const $item_content__if = /*@__PURE__*/ _if("#text/2", "<span> </span>", "D ", $if_content__setup);
const $item_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $item_content__if($scope, $scope._.show ? 0 : 1));
const $item_content__setup = $item_content__show;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p><!>:<!></p><!><!>", "D%c%l%", $item_content__setup), {
	aa($scope) {
		_text($scope["#text/1"], $scope.aa);
		$if_content__aa($scope);
	},
	index($scope) {
		_text($scope["#text/0"], $scope.index);
	}
});
const $show = /*@__PURE__*/ _let("show/3");
const $items = /*@__PURE__*/ _let("items/4", ($scope) => {
	let $item;
	forOf($scope.items, ({ a: aa = "default" }, index) => {
		$item = attrTags($item, { content: $item_content($scope, {
			aa,
			index
		}) });
	});
	$input_item($scope["#childScope/1"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.map((it) => ({ a: (it.a || "y") + "!" })));
}));
function $setup($scope) {
	let $item2;
	forOf([["a"], ["b", "c"]], ([x, y = "dy"]) => {
		$item2 = attrTags($item2, { content: $item_content2($scope, {
			x,
			y
		}) });
	});
	$input_item($scope["#childScope/2"], $item2);
	$show($scope, true);
	$items($scope, [{ a: "x" }, {}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
