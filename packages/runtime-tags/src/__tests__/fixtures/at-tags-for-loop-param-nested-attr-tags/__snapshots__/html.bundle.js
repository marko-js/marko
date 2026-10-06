// tags/inner.marko
var inner_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_cell = _write_guard($scope0_reason, 0), $wi__input_cell = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.cell, (cell) => {
		const $scope1_id = _scope_id();
		_html("<span>");
		_dynamic_tag($scope1_id, "a", cell.content, {}, 0, 0, $wg__input_cell);
		_html("</span>");
		$wi__input_cell && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_cell, $wg__input_cell, 0, 0, 1);
	$wi__input_cell && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 0), $wi__input_row = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_dynamic_tag($scope1_id, "a", row.content, {}, 0, 0, $wg__input_row);
		_html("</div>");
		$wi__input_row && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_row, $wg__input_row, 0, 0, 1);
	$wi__input_row && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{
		id: 1,
		items: [10, 20]
	}];
	_set_scope_reason(2);
	let $row;
	forOf(rows, (a) => {
		$row = attrTags($row, { content: _content("a2", () => {
			const $scope1_reason = _scope_reason(), $wg__a_id = _write_guard($scope1_reason, 2), $wi__a_items__OR__a_id = _write_if($scope1_reason, 0), $wg__a_items = _write_guard($scope1_reason, 1), $wi__a_id = _write_if($scope1_reason, 2), $wi__a_items = _write_if($scope1_reason, 1);
			const $scope1_id = _scope_id();
			const $row_content__a_id__closures = /* @__PURE__ */ new Set();
			_set_scope_reason($wg__a_items << 1);
			let $cell;
			forOf(a.items, (b) => {
				$cell = attrTags($cell, { content: _content("a1", () => {
					const $scope2_reason = _scope_reason(), $wg__b = _write_guard($scope2_reason, 0), $wi__b = _write_if($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_html(`${_text_resume($scope2_id, "a", a.id, $wg__a_id)}-${_text_resume($scope2_id, "b", b, $wg__b * 2)};`);
					($wi__a_items__OR__a_id || $wi__b) && _subscribe($wi__a_id && $row_content__a_id__closures, _scope($scope2_id, { _: $wi__a_items__OR__a_id && _scope_with_id($scope1_id) }), "a0", $wg__a_id || $wg__b);
					$wg__a_id || $wg__b || ($wi__a_items__OR__a_id || $wi__b) && _resume_branch($scope2_id);
				}, $scope1_id) });
			});
			const $childScope = _peek_scope_id();
			inner_default({ cell: $cell });
			$wi__a_items__OR__a_id && _scope($scope1_id, {
				c: $wi__a_items && a?.id,
				d: $wi__a_id && $row_content__a_id__closures,
				a: $wi__a_items && _existing_scope($childScope)
			});
		}, $scope0_id) });
	});
	const $childScope2 = _peek_scope_id();
	outer_default({ row: $row });
	_html(`<button>Add</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: rows,
		a: _existing_scope($childScope2)
	});
}, 1);
