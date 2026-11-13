// tags/list.marko
const $template = "<!><!><!>";
const $inputtag_content__row_label = /*@__PURE__*/ _closure_get_patch("c1", 6, ($scope) => _text($scope.a, $scope._.f), 0, "c3", 0);
const $inputtag_content = _content$1("c0", " ", " ", $inputtag_content__row_label);
_content_resume($inputtag_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputtag_content);
const $for_content__input_tag__OR__row_onSelect = /*@__PURE__*/ _or_patch("c2", 4, ($scope) => $for_content__dynamicTag($scope, $scope._.e, ($_) => ({ onClick: $scope.d })));
const $for_content__input_tag = /*@__PURE__*/ _for_closure_patch("c5", 0, $for_content__input_tag__OR__row_onSelect, 5);
const $for_content__setup = $for_content__input_tag;
const $for_content__row_onSelect = /*@__PURE__*/ _const(3, $for_content__input_tag__OR__row_onSelect);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_onSelect($scope, $params2[0]?.onSelect);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $for_content__row_label = /*@__PURE__*/ _const(5, /* @__PURE__ */ _closure($inputtag_content__row_label));
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);
const $input_tag = /*@__PURE__*/ _const(4, $for_content__input_tag);

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a1", 7, ($scope) => $input_tag($scope.a, $scope._._.e), ($scope) => $scope._._, "a7", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__input_items($scope);
	$card_content__input_label($scope);
};
const $card_content__input_items__OR__input_label = /*@__PURE__*/ _or_patch("a2", 1, ($scope) => {
	let $row;
	forOf($scope._._.f, (item) => $row = attrTags($row, {
		label: item,
		onSelect: $onSelect({
			_: $scope,
			k: item
		})
	}));
	$input_row($scope.a, $row);
});
const $card_content__input_items = /*@__PURE__*/ _closure_get_patch("a3", 8, $card_content__input_items__OR__input_label, ($scope) => $scope._._, "a8", 0);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a4", 9, $card_content__input_items__OR__input_label, ($scope) => $scope._._, "a9", 0);
const $card_content = _content$1("a5", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $card_content__setup);
const $onSelect = ($locals) => function() {
	const $scope = $locals._;
	console.log($locals.k, $scope._._.g);
};
_bind_resume("a0 >>g", $onSelect);
