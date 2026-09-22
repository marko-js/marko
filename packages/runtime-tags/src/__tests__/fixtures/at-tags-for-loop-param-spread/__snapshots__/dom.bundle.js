// tags/child.marko
const $template = "<p> </p>";
const $walks = " D l";
const $input_title = ($scope, input_title) => _attr($scope.a, "title", input_title);
const $input_text = ($scope, input_text) => _text($scope.b, input_text);

// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $Row_content__walks = "D l", $Row_content__template = "<em> </em>";
const $if_content__item_text = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $input_text($scope.a, $scope._.f));
const $if_content__setup = ($scope) => {
	$if_content__item_text._($scope);
	$input_title($scope.a, "over");
};
const $Row_content__text = ($scope, text) => _text($scope.a, text);
const $item_content__if = /*@__PURE__*/ _if(2, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $item_content__setup = /* @__PURE__ */ _closure_get(4, ($scope) => $item_content__if($scope, $scope._.c ? 0 : 1));
const $item_content__item_title = ($scope, item_title) => $input_title($scope.a, item_title);
const $item_content__item_text = /*@__PURE__*/ _const(5, ($scope) => {
	$input_text($scope.a, $scope.f);
	$Row_content__text($scope.b, $scope.f);
	$if_content__item_text($scope);
});
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a1", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!><!>`)($template, $Row_content__template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&%c`)($walks, $Row_content__walks), $item_content__setup), { 3($scope) {
	$item_content__item_title($scope, $scope.d?.title);
	$item_content__item_text($scope, $scope.d?.text);
} });
const $items = /*@__PURE__*/ _let(3, ($scope) => {
	let $item;
	forOf($scope.d, (item) => {
		$item = attrTags($item, { content: $item_content($scope, { 3: item }) });
	});
	$input_item($scope.b, $item);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.d.map((it) => ({
		text: it.text + "!",
		title: it.title + "!"
	})));
}));
