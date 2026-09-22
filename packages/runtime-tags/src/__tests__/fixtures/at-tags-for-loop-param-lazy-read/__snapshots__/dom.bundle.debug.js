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
const $template = /*@__PURE__*/ ((_w0) => `<button id=rename>rename</button><div id=out> </div>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` bD l/${_w0}&b`)("b%c");
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$out($scope._._, `nested ${$scope._.item}`);
}));
const $if_content__setup = $if_content__setup__script;
const $item_content__if = /*@__PURE__*/ _if("#text/1", "<button class=nested>nested</button>", " ", $if_content__setup);
const $item_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $item_content__if($scope, $scope._.show ? 0 : 1));
const $item_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$out($scope._, $scope.item);
}));
const $item_content__setup = ($scope) => {
	$item_content__show($scope);
	$item_content__setup__script($scope);
};
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button class=direct>direct</button><!><!>", " b%", $item_content__setup), { item($scope) {} });
const $out = /*@__PURE__*/ _let("out/3", ($scope) => _text($scope["#text/1"], $scope.out));
const $show = /*@__PURE__*/ _let("show/4");
const $items = /*@__PURE__*/ _let("items/5", ($scope) => {
	let $item;
	forOf($scope.items, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item }) });
	});
	$input_item($scope["#childScope/2"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.map((it) => it + "!"));
}));
function $setup($scope) {
	$out($scope, "");
	$show($scope, true);
	$items($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
