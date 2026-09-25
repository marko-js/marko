// tags/rows.marko
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", row.content, {}, 0, 0, $sg__input_row);
		$si__input_row && _scope($scope1_id, {}, "__tests__/tags/rows.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_row, $sg__input_row, $sg__input_row);
	$si__input_row && _scope($scope0_id, {}, "__tests__/tags/rows.marko", 0);
});

// tags/of-rows.marko
var of_rows_default = _template("__tests__/tags/of-rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0), $si__input_item = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button id=show-of>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason($sg__input_item << 1);
	let $row;
	forOf(input.item, (item) => {
		$row = attrTags($row, { content: _content("__tests__/tags/of-rows.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (show) {
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
					_scope($scope2_id, {}, "__tests__/tags/of-rows.marko", "5:12");
					return 0;
				}
			}, $scope1_id, "#text/0");
			_subscribe($show__closures, _scope($scope1_id, {
				item_content: item?.content,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/of-rows.marko", "5:6", { item_content: 0 }), "__tests__/tags/of-rows.marko_1_show#5/subscribe");
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	rows_default({ row: $row });
	_script($scope0_id, "__tests__/tags/of-rows.marko_0");
	_scope($scope0_id, {
		show: $si__input_item && show,
		"ClosureScopes:show": $show__closures,
		"#childScope/1": $si__input_item && _existing_scope($childScope)
	}, "__tests__/tags/of-rows.marko", 0, { show: "1:6" });
});

// tags/in-rows.marko
var in_rows_default = _template("__tests__/tags/in-rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0), $si__input = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button id=show-in>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason($sg__input << 1);
	let $row;
	forIn(input, (key, value) => {
		$row = attrTags($row, { content: _content("__tests__/tags/in-rows.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (show) {
					const $scope2_id = _scope_id();
					_dynamic_tag($scope2_id, "#text/0", value.content, {}, 0, 0, $sg__input);
					_scope($scope2_id, {}, "__tests__/tags/in-rows.marko", "5:12");
					return 0;
				}
			}, $scope1_id, "#text/0");
			_subscribe($show__closures, _scope($scope1_id, {
				value_content: value?.content,
				_: _scope_with_id($scope0_id)
			}, "__tests__/tags/in-rows.marko", "5:6", { value_content: 0 }), "__tests__/tags/in-rows.marko_1_show#4/subscribe");
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	rows_default({ row: $row });
	_script($scope0_id, "__tests__/tags/in-rows.marko_0");
	_scope($scope0_id, {
		show: $si__input && show,
		"ClosureScopes:show": $show__closures,
		"#childScope/1": $si__input && _existing_scope($childScope)
	}, "__tests__/tags/in-rows.marko", 0, { show: "1:6" });
});

// tags/grid.marko
var grid_default = _template("__tests__/tags/grid.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_for_of(row.cell, (cell) => {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", cell.content, {}, 0, 0, $sg__input_row);
			$si__input_row && _scope($scope2_id, {}, "__tests__/tags/grid.marko", "2:4");
		}, 0, $scope1_id, "#text/0", $sg__input_row, $sg__input_row, $sg__input_row);
		$si__input_row && _scope($scope1_id, {}, "__tests__/tags/grid.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_row, $sg__input_row, $sg__input_row);
	$si__input_row && _scope($scope0_id, {}, "__tests__/tags/grid.marko", 0);
});

// tags/nested-rows.marko
var nested_rows_default = _template("__tests__/tags/nested-rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button id=show-nested>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason($sg__input_row << 1);
	let $row;
	forOf(input.row, (row) => {
		let $cell;
		forOf(row.cell, (cell) => {
			$cell = attrTags($cell, { content: _content("__tests__/tags/nested-rows.marko_1*content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_if(() => {
					if (show) {
						const $scope2_id = _scope_id();
						_dynamic_tag($scope2_id, "#text/0", cell.content, {}, 0, 0, $sg__input_row);
						_scope($scope2_id, {}, "__tests__/tags/nested-rows.marko", "7:17");
						return 0;
					}
				}, $scope1_id, "#text/0");
				_subscribe($show__closures, _scope($scope1_id, {
					cell_content: cell?.content,
					_: _scope_with_id($scope0_id)
				}, "__tests__/tags/nested-rows.marko", "7:10", { cell_content: 0 }), "__tests__/tags/nested-rows.marko_1_show#5/subscribe");
			}, $scope0_id) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	const $childScope = _peek_scope_id();
	grid_default({ row: $row });
	_script($scope0_id, "__tests__/tags/nested-rows.marko_0");
	_scope($scope0_id, {
		show: $si__input_row && show,
		"ClosureScopes:show": $show__closures,
		"#childScope/1": $si__input_row && _existing_scope($childScope)
	}, "__tests__/tags/nested-rows.marko", 0, { show: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button id=inc>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	of_rows_default({ item: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`Of ${_text_resume($scope1_id, "#text/0", count, 2)}`);
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:11"), "__tests__/template.marko_1_count#4/subscribe");
	}, $scope0_id) }) });
	in_rows_default({ item: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`In ${_text_resume($scope2_id, "#text/0", count, 2)}`);
		_subscribe($count__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count": 1
		}, "__tests__/template.marko", "4:11"), "__tests__/template.marko_2_count#4/subscribe");
	}, $scope0_id) }) });
	nested_rows_default({ row: attrTag({ cell: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`Cell ${_text_resume($scope3_id, "#text/0", count, 2)}`);
		_subscribe($count__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count": 2
		}, "__tests__/template.marko", "5:21"), "__tests__/template.marko_3_count#4/subscribe");
	}, $scope0_id) }) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
