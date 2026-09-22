// tags/inner.marko
var inner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cell = _serialize_guard($scope0_reason, 0), $si__input_cell = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.cell, (cell) => {
		const $scope1_id = _scope_id();
		_html("<span>");
		_dynamic_tag($scope1_id, "a", cell.content, {}, 0, 0, $sg__input_cell);
		_html("</span>");
		$si__input_cell && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_cell, $sg__input_cell, $sg__input_cell, 0, 1);
	$si__input_cell && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_dynamic_tag($scope1_id, "a", row.content, {}, 0, 0, $sg__input_row);
		_html("</div>");
		$si__input_row && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_row, $sg__input_row, $sg__input_row, 0, 1);
	$si__input_row && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{
		id: 1,
		items: [10, 20]
	}];
	_set_serialize_reason(2);
	let $row;
	forOf(rows, (a) => {
		$row = attrTags($row, { content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const $row_content__a_id__closures = /* @__PURE__ */ new Set();
			_set_serialize_reason(2);
			let $cell;
			forOf(a.items, (b) => {
				$cell = attrTags($cell, { content: _content("a0", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`${_text_resume($scope2_id, "a", a.id)}-${_text_resume($scope2_id, "b", b, 2)};`);
					_subscribe($row_content__a_id__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
				}, $scope1_id) });
			});
			const $childScope = _peek_scope_id();
			inner_default({ cell: $cell });
			_scope($scope1_id, {
				c: a?.id,
				d: $row_content__a_id__closures,
				a: _existing_scope($childScope)
			});
		}, $scope0_id) });
	});
	const $childScope2 = _peek_scope_id();
	outer_default({ row: $row });
	_html(`<button>Add</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		c: rows,
		a: _existing_scope($childScope2)
	});
}, 1);
