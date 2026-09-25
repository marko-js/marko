// tags/rows.marko
var rows_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", row.content, {}, 0, 0, $sg__input_row);
		$si__input_row && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_row, $sg__input_row, $sg__input_row);
	$si__input_row && _scope($scope0_id, {});
});

// tags/of-rows.marko
var of_rows_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html(`<button id=show-of>show</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason($sg__input_item << 1);
	let $row;
	forOf(input.item, (item) => {
		$row = attrTags($row, { content: _content("e1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {}, $scope1_id, "a");
			_subscribe($show__closures, _scope($scope1_id, {
				b: item?.content,
				_: _scope_with_id($scope0_id)
			}), "e0");
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	rows_default({ row: $row });
	_script($scope0_id, "e2");
	_scope($scope0_id, {
		f: $si__input_item && show,
		g: $show__closures,
		b: $si__input_item && _existing_scope($childScope)
	});
});

// tags/in-rows.marko
var in_rows_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0), $si__input = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html(`<button id=show-in>show</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason($sg__input << 1);
	let $row;
	forIn(input, (key, value) => {
		$row = attrTags($row, { content: _content("c1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {}, $scope1_id, "a");
			_subscribe($show__closures, _scope($scope1_id, {
				b: value?.content,
				_: _scope_with_id($scope0_id)
			}), "c0");
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	rows_default({ row: $row });
	_script($scope0_id, "c2");
	_scope($scope0_id, {
		e: $si__input && show,
		f: $show__closures,
		b: $si__input && _existing_scope($childScope)
	});
});

// tags/grid.marko
var grid_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_for_of(row.cell, (cell) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", cell.content, {}, 0, 0, $sg__input_row);
			$si__input_row && _scope($scope2_id, {});
		}, 0, $scope1_id, "a", $sg__input_row, $sg__input_row, $sg__input_row);
		$si__input_row && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_row, $sg__input_row, $sg__input_row);
	$si__input_row && _scope($scope0_id, {});
});

// tags/nested-rows.marko
var nested_rows_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html(`<button id=show-nested>show</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason($sg__input_row << 1);
	let $row;
	forOf(input.row, (row) => {
		let $cell;
		forOf(row.cell, (cell) => {
			$cell = attrTags($cell, { content: _content("d1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_if(() => {}, $scope1_id, "a");
				_subscribe($show__closures, _scope($scope1_id, {
					b: cell?.content,
					_: _scope_with_id($scope0_id)
				}), "d0");
			}, $scope0_id) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	const $childScope = _peek_scope_id();
	grid_default({ row: $row });
	_script($scope0_id, "d2");
	_scope($scope0_id, {
		f: $si__input_row && show,
		g: $show__closures,
		b: $si__input_row && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "a")}`);
	of_rows_default({ item: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`Of ${_text_resume($scope1_id, "a", count, 2)}`);
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, $scope0_id) }) });
	in_rows_default({ item: attrTag({ content: _content_resume("a3", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`In ${_text_resume($scope2_id, "a", count, 2)}`);
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cf: 1
		}), "a2");
	}, $scope0_id) }) });
	nested_rows_default({ row: attrTag({ cell: attrTag({ content: _content_resume("a5", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`Cell ${_text_resume($scope3_id, "a", count, 2)}`);
		_subscribe($count__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cf: 2
		}), "a4");
	}, $scope0_id) }) }) });
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		e: count,
		f: $count__closures
	});
}, 1);
