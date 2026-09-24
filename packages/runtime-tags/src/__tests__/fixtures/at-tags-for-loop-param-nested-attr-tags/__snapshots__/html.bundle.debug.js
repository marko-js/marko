// tags/inner.marko
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_cell = _serialize_guard($scope0_reason, 0), $si__input_cell = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.cell, (cell) => {
		const $scope1_id = _scope_id();
		_html("<span>");
		_dynamic_tag($scope1_id, "#text/0", cell.content, {}, 0, 0, $sg__input_cell);
		_html("</span>");
		$si__input_cell && _scope($scope1_id, {}, "__tests__/tags/inner.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_cell, $sg__input_cell, $sg__input_cell, 0, 1);
	$si__input_cell && _scope($scope0_id, {}, "__tests__/tags/inner.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0), $si__input_row = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_dynamic_tag($scope1_id, "#text/0", row.content, {}, 0, 0, $sg__input_row);
		_html("</div>");
		$si__input_row && _scope($scope1_id, {}, "__tests__/tags/outer.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_row, $sg__input_row, $sg__input_row, 0, 1);
	$si__input_row && _scope($scope0_id, {}, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{
		id: 1,
		items: [10, 20]
	}];
	_set_serialize_reason(2);
	let $row;
	forOf(rows, (a) => {
		$row = attrTags($row, { content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const $row_content__a_id__closures = new Set();
			_set_serialize_reason(2);
			let $cell;
			forOf(a.items, (b) => {
				$cell = attrTags($cell, { content: _content("__tests__/template.marko_2*content", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`${_text_resume($scope2_id, "#text/0", a.id)}-${_text_resume($scope2_id, "#text/1", b, 2)};`);
					_subscribe($row_content__a_id__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:12"), "__tests__/template.marko_2_a_id#2/subscribe");
				}, $scope1_id) });
			});
			const $childScope = _peek_scope_id();
			inner_default({ cell: $cell });
			_scope($scope1_id, {
				"ClosureScopes:a_id": $row_content__a_id__closures,
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:6");
		}, $scope0_id) });
	});
	const $childScope2 = _peek_scope_id();
	outer_default({ row: $row });
	_html(`<button>Add</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		rows,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { rows: "1:6" });
}, 1);
