// tags/list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);

// template.marko
const $if_content2__item_text = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.b));
const $if_content2__setup = $if_content2__item_text;
const $for_content__i = /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.a, $scope._.d));
const $for_content__setup = ($scope) => {
	$for_content__i._($scope);
	_text($scope.b, $scope.M);
};
const $showbi_content__i = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.d), 0, "a1");
const $showbi_content = /*@__PURE__*/ _content("a0", "tag <!>", "b%", $showbi_content__i);
const $if_content__i = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d));
const $if_content__setup = $if_content__i;
const $item_content2__if = /*@__PURE__*/ _if(0, "<strong> </strong>", "D ", $if_content2__setup);
const $item_content2__show = /*@__PURE__*/ _closure_get(8, ($scope) => $item_content2__if($scope, $scope._.g ? 0 : 1), 0, "a4");
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a5", "<!><!><!>", "b%", $item_content2__show), { 1: $if_content2__item_text });
const $item_content__if = /*@__PURE__*/ _if(0, "<em>if <!></em>", "Db%", $if_content__setup);
const $item_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1, $showbi_content);
const $item_content__show = /*@__PURE__*/ _closure_get(8, ($scope) => {
	$item_content__if($scope, $scope._.g ? 0 : 1);
	$item_content__dynamicTag($scope, $scope._.g ? "b" : "i");
}, 0, "a2");
const $item_content__for = /*@__PURE__*/ _for_until_unkeyed(2, "<span><!>.<!></span>", "D%c%", $for_content__setup);
const $item_content__setup = ($scope) => {
	$item_content__show($scope);
	$item_content__for($scope, [
		2,
		0,
		1
	]);
};
const $item_content__i__closure = /*@__PURE__*/ _closure($showbi_content__i);
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a3", "<!><!><!><!><!>", "b%b%b%", $item_content__setup), { 3($scope) {
	$if_content__i($scope);
	$item_content__i__closure($scope);
	$for_content__i($scope);
} });
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	let $item;
	forUntil($scope.f, 0, 1, (i) => {
		$item = attrTags($item, { content: $item_content($scope, { 3: i }) });
	});
	$input_item($scope.d, $item);
});
const $show = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($item_content__show, $item_content2__show));
const $items = /*@__PURE__*/ _let(7, ($scope) => {
	let $item2;
	forOf($scope.h, (item) => {
		$item2 = attrTags($item2, { content: $item_content2($scope, { 1: item?.text }) });
	});
	$input_item($scope.e, $item2);
});
const $setup__script = _script("a6", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.f + 1);
	});
	_on($scope.b, "click", function() {
		$show($scope, !$scope.g);
	});
	_on($scope.c, "click", function() {
		$items($scope, $scope.h.map((item) => ({ text: item.text + "!" })));
	});
});
