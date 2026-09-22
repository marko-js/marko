// tags/list.marko
const $for_content__item_content$1 = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params$1 = ($scope, $params2) => $for_content__item_content$1($scope, $params2[0]?.content);
const $for$1 = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", 0, $for_content__$params$1);
const $input_item$1 = ($scope, input_item) => $for$1($scope, [input_item]);

// tags/labeled-list.marko
const $for_content__item_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $input_label_text = ($scope, input_label_text) => _text($scope.a, input_label_text);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input_label = ($scope, input_label) => $input_label_text($scope, input_label?.text);

// template.marko
const $item_content6 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a5", "labeled <!>", "b%"), { 1($scope) {
	_text($scope.a, $scope.b);
} });
const $item_content5 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a4", "for-if <!>", "b%"), { 1($scope) {
	_text($scope.a, $scope.b);
} });
const $item_content4 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a3", "else <!>", "b%"), { 1($scope) {
	_text($scope.a, $scope.b);
} });
const $item_content3 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a2", "else-if <!>", "b%"), { 1($scope) {
	_text($scope.a, $scope.b);
} });
const $item_content2 = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a1", "if <!>", "b%"), { 1($scope) {
	_text($scope.a, $scope.b);
} });
const $count__OR__mode = /*@__PURE__*/ _or(10, ($scope) => {
	let $item2;
	if ($scope.j === 0) forUntil($scope.i, 0, 1, (i) => {
		$item2 = attrTags($item2, { content: $item_content2($scope, { 1: i }) });
	});
	$input_item$1($scope.d, $item2);
	let $item3;
	if ($scope.j === 0) {} else if ($scope.j === 1) forUntil($scope.i, 0, 1, (i) => {
		$item3 = attrTags($item3, { content: $item_content3($scope, { 1: i }) });
	});
	$input_item$1($scope.e, $item3);
	let $item4;
	if ($scope.j !== 2) {} else if ($scope.i) forUntil($scope.i, 0, 1, (i) => {
		$item4 = attrTags($item4, { content: $item_content4($scope, { 1: i }) });
	});
	$input_item$1($scope.f, $item4);
	let $item5;
	forUntil($scope.i, 0, 1, (j) => {
		if (j % 2 === $scope.j % 2) $item5 = attrTags($item5, { content: $item_content5($scope, { 1: j }) });
	});
	$input_item$1($scope.g, $item5);
	let $label, $item6;
	if ($scope.j === 0) $label = attrTag({ text: "zero" });
	else forUntil($scope.i, 0, 1, (i) => {
		$item6 = attrTags($item6, { content: $item_content6($scope, { 1: i }) });
	});
	$input_label($scope.h, $label);
	$input_item($scope.h, $item6);
});
const $count = /*@__PURE__*/ _let(8, $count__OR__mode);
const $mode = /*@__PURE__*/ _let(9, $count__OR__mode);
const $setup__script = _script("a6", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.i + 1);
	});
	_on($scope.b, "click", function() {
		$mode($scope, ($scope.j + 1) % 3);
	});
});
