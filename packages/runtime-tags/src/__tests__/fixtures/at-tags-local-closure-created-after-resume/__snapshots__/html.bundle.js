// tags/list.marko
var list_default = _template("e", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<button id=open>open</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "e0");
	_scope($scope0_id, { e: input.item });
});

// tags/grid-row.marko
var grid_row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row_cell = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button${_attr("id", `toggle-${input.index}`)}>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_for_of(input.row.cell, (cell) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", cell.content, {}, 0, 0, $sg__input_row_cell);
				_serialize_if($scope0_reason, 0) && _scope($scope2_id, {});
			}, 0, $scope1_id, "a", $sg__input_row_cell, $sg__input_row_cell, $sg__input_row_cell);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		g: input.row?.cell,
		h: open
	});
});

// tags/grid.marko
var grid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row, index) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason($sg__input_row << 1);
		const $childScope = _peek_scope_id();
		grid_row_default({
			row,
			index
		});
		$si__input_row && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", $sg__input_row, $sg__input_row, $sg__input_row);
	$si__input_row && _scope($scope0_id, {});
});

// tags/last.marko
var last_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button id=save-last>save</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "d0");
	_scope($scope0_id, {
		e: input.item,
		g: void 0
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $fail__closures = /* @__PURE__ */ new Set();
	let items = [{ text: "a" }, { text: "b" }];
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_resume("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", item.text)}:${_text_resume($scope1_id, "b", item === items[0], 2)}</span>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id, {
			8: item,
			9: item?.text
		}) });
	});
	list_default({ item: $item });
	let $row;
	forOf(["a", "b"], (row) => {
		let $cell;
		forOf([1], (n) => {
			$cell = attrTags($cell, { content: _content_resume("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", n)}</em>`);
				_scope($scope2_id, {});
			}, $scope0_id, { 11: n }) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	grid_default({ row: $row });
	let $item2;
	forOf([1], (i) => {
		$item2 = attrTags($item2, { content: _content_resume("a2", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`${_text_resume($scope3_id, "a", i)}<b>${_text_resume($scope3_id, "b", i)}</b>`);
			_scope($scope3_id, {});
		}, $scope0_id, { 13: i }) });
	});
	last_default({ item: $item2 });
	_html(`<button id=fail>fail</button>${_el_resume($scope0_id, "d")}<div>`);
	let $catch;
	forOf(["static"], (label) => {
		$catch = attrTags($catch, { content: _content_resume("a3", (err) => {
			const $scope5_reason = _scope_reason();
			const $scope5_id = _scope_id();
			_html(`caught ${_text_resume($scope5_id, "a", label, 2)}: ${_text_resume($scope5_id, "b", err.message, _serialize_guard($scope5_reason, 0) * 2)}`);
			_scope($scope5_id, {});
		}, $scope0_id, { 16: label }) });
	});
	_try($scope0_id, "e", _content_resume("a4", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope4_id, "a", (() => {
			return "ok";
		})()));
		_subscribe($fail__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), { catch: $catch });
	_html("</div>");
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		g: items?.[0],
		s: $fail__closures
	});
}, 1);
