// tags/row.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0;D ;<em> </em>",
	b1: "b1;D ;<em> </em>",
	b: "b;b%;<!><!><!>"
});
var row_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason();
	_await(_scope_id(), "a", input.item.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", value, void 0, $scope0_reason, 0)}</em>`);
		_scope($scope1_id, {});
	}, 1, "b0", 1);
}, 0, 0);

// template.marko
_shells({
	a: "a !a1;D%b ;<main><!><button>interactive</button></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template))
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		row_default({ item });
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, "id", $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a0", $scope0_reason, 0);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {});
}, 1, () => [row_default]);
