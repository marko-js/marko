// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, $params2) => $for_content__dynamicTag($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `<button id=rename>rename</button>${_w0}${_w1}${_w2}${_w3}<!>`)($template$1, $template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => ` b/${_w0}&/${_w1}&/${_w2}&/${_w3}&b`)("b%c", "b%c", "b%c", "b%c");
const $for_content__firstExtra = /*@__PURE__*/ _closure_get("firstExtra/17", ($scope) => _text($scope["#text/0"], $scope._._.firstExtra), ($scope) => $scope._._, "__tests__/template.marko_5_firstExtra#0:14/subscribe");
const $for_content__setup = $for_content__firstExtra;
const $item_content4__b = /*@__PURE__*/ _closure_get("b/15", ($scope) => _text($scope["#text/1"], $scope._.b), 0, "__tests__/template.marko_4_b#0:11/subscribe");
const $item_content4__setup = ($scope) => {
	$item_content4__b($scope);
	$item_content4__r($scope);
};
const $item_content4__r__script = _script("__tests__/template.marko_4_r2#0:12", ($scope) => _attrs_script($scope, "#p/0"));
const $item_content4__r = /*@__PURE__*/ _closure_get("r2/16", ($scope) => {
	_attrs($scope, "#p/0", $scope._.r2);
	$item_content4__r__script($scope);
}, 0, "__tests__/template.marko_4_r2#0:12/subscribe");
const $item_content4 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<p> </p>", " D ", $item_content4__setup);
const $item_content3 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_3*content", "<b><!><!></b>", "D%b%"), {
	first: ($scope) => _text($scope["#text/0"], $scope.first),
	$temp2_1: ($scope) => _text($scope["#text/1"], $scope.$temp2_1)
});
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p><!>:<!></p>", "D%c%"), {
	id: ($scope) => _text($scope["#text/0"], $scope.id),
	$temp_extra: ($scope) => _text($scope["#text/1"], $scope.$temp_extra)
});
const $item_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<i> </i>", "D ", $for_content__setup);
const $item_content__setup = ($scope) => $item_content__for($scope, [[0]]);
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $item_content__setup);
const $items = /*@__PURE__*/ _let("items/9", ($scope) => {
	let $item;
	forOf($scope.items, ({ id, ...rest }) => $item = attrTags($item, { content: $item_content2($scope, {
		id,
		$temp_extra: rest.extra
	}) }));
	$input_item($scope["#childScope/1"], $item);
	$temp4($scope, $scope.items?.[0]);
});
const $temp4 = /*@__PURE__*/ _const("$temp3", ($scope) => $firstExtra($scope, $scope.$temp3?.extra));
const $firstExtra__closure = /*@__PURE__*/ _closure($for_content__firstExtra);
const $firstExtra = /*@__PURE__*/ _const("firstExtra", $firstExtra__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.map((it) => ({
		...it,
		extra: it.extra + "!"
	})));
}));
function $setup($scope) {
	let $item2;
	forOf([["a", "b"], ["c", "d"]], ([first, ...others]) => $item2 = attrTags($item2, { content: $item_content3($scope, {
		first,
		$temp2_1: others[0]
	}) }));
	$input_item($scope["#childScope/2"], $item2);
	$items($scope, [{
		id: 1,
		extra: "x"
	}, {
		id: 2,
		extra: "y"
	}]);
	$setup__script($scope);
}
const $pattern2 = ($scope, $pattern) => {
	$r($scope, (({ a, b, ...r2 }) => r2)($pattern));
	$b($scope, $pattern.b);
};
const $r__closure = /*@__PURE__*/ _closure($item_content4__r);
const $r = /*@__PURE__*/ _const("r2", $r__closure);
const $b__closure = /*@__PURE__*/ _closure($item_content4__b);
const $b = /*@__PURE__*/ _const("b", $b__closure);
const $input_o = $pattern2;
const $input_show = /*@__PURE__*/ _const("input_show", ($scope) => {
	let $item3;
	if ($scope.input_show) {
		$item3 = attrTag({ content: $item_content4($scope) });
	}
	$input_item($scope["#childScope/3"], $item3);
	let $item4;
	if ($scope.input_show) {
		$item4 = attrTag({ content: $item_content($scope) });
	}
	$input_item($scope["#childScope/4"], $item4);
});
const $input = ($scope, input) => {
	$input_o($scope, input.o);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
