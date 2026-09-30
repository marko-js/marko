// tags/inner.marko
const $template = "<!><!><!>";
const $for_content__cell_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params$1 = ($scope, $params2) => $for_content__cell_content($scope, $params2[0]?.content);
const $for$1 = /*@__PURE__*/ _for_of_unkeyed(0, "<span><!></span>", "D%", 0, $for_content__$params$1);
const $input_cell = ($scope, input_cell) => $for$1($scope, [input_cell]);

// tags/outer.marko
const $for_content__row_content = /* @__PURE__ */ _dynamic_tag(0);
const $for_content__$params = ($scope, $params2) => $for_content__row_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<div><!></div>", "D%", 0, $for_content__$params);
const $input_row = ($scope, input_row) => $for($scope, [input_row]);

// template.marko
const $cell_content__a_id = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._.c), 0, "a0");
const $cell_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a1", "<!>-<!>;", "%c%", $cell_content__a_id), { 2($scope) {
	_text($scope.b, $scope.c);
} });
const $row_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")), {
	1($scope) {
		let $cell;
		forOf($scope.b, (b) => {
			$cell = attrTags($cell, { content: $cell_content($scope, { 2: b }) });
		});
		$input_cell($scope.a, $cell);
	},
	2: /* @__PURE__ */ _closure($cell_content__a_id)
});
const $rows = /*@__PURE__*/ _let(2, ($scope) => {
	let $row;
	forOf($scope.c, (a) => {
		$row = attrTags($row, { content: $row_content($scope, {
			1: a?.items,
			2: a?.id
		}) });
	});
	$input_row($scope.a, $row);
});
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, [...$scope.c, {
		id: 2,
		items: [30]
	}]);
}));
