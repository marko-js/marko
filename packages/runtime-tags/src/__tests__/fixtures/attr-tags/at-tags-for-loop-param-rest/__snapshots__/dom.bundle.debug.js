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
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_2*content", "<b><!><!></b>", "D%b%"), {
	first($scope) {
		_text($scope["#text/0"], $scope.first);
	},
	$temp2_1($scope) {
		_text($scope["#text/1"], $scope.$temp2_1);
	}
});
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p><!>:<!></p>", "D%c%"), {
	id($scope) {
		_text($scope["#text/0"], $scope.id);
	},
	$temp_extra($scope) {
		_text($scope["#text/1"], $scope.$temp_extra);
	}
});
const $items = /*@__PURE__*/ _let("items/3", ($scope) => {
	let $item;
	forOf($scope.items, ({ id, ...rest }) => {
		$item = attrTags($item, { content: $item_content($scope, {
			id,
			$temp_extra: rest.extra
		}) });
	});
	$input_item($scope["#childScope/1"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.map((it) => ({
		...it,
		extra: it.extra + "!"
	})));
}));
function $setup($scope) {
	let $item2;
	forOf([["a", "b"], ["c", "d"]], ([first, ...others]) => {
		$item2 = attrTags($item2, { content: $item_content2($scope, {
			first,
			$temp2_1: others[0]
		}) });
	});
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
