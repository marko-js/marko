// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.row, {}, 0, 0, $wg__input_row);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_items);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.row });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let items = [1, 2];
	let n = 0;
	_html("<div>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	list_default({
		items,
		row: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "a", n));
			_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id) })
	});
	_html(`</div><button>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: items,
		d: n,
		e: $n__closures,
		a: _existing_scope($childScope)
	});
}, 1);
