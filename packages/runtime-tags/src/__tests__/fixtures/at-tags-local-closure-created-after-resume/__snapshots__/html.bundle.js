// tags/list.marko
var list_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button id=open>open</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "e0");
	_scope($scope0_id, { e: input.item });
});

// tags/grid-row.marko
var grid_row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row_cell = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button${_attr("id", `toggle-${input.index}`)}>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_for_of(input.row.cell, (cell) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "a", cell.content, {}, 0, 0, $wg__input_row_cell);
				_write_if($scope0_reason, 0) && _scope($scope2_id, {});
			}, 0, $scope1_id, "a", $wg__input_row_cell, $wg__input_row_cell);
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
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 0), $wi__input_row = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row, index) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_row << 1);
		const $childScope = _peek_scope_id();
		grid_row_default({
			row,
			index
		});
		$wi__input_row && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "a", $wg__input_row, $wg__input_row);
	$wi__input_row && _scope($scope0_id, {});
});

// tags/last.marko
var last_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button id=save-last>save</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "d0");
	_scope($scope0_id, { e: input.item });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ text: "a" }, { text: "b" }];
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_resume("a0", () => {
			const $scope1_reason = _scope_reason(), $wg__item_text = _write_guard($scope1_reason, 0), $wg__item = _write_guard($scope1_reason, 1);
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", item.text, $wg__item_text)}:${_text_resume($scope1_id, "b", item === items[0], $wg__item * 2)}</span>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			$wg__item_text || $wg__item || _resume_branch($scope1_id);
		}, $scope0_id, () => [{
			2: item?.text,
			3: item
		}]) });
	});
	list_default({ item: $item });
	let $row;
	forOf(["a", "b"], (row) => {
		let $cell;
		forOf([1], (n) => {
			$cell = attrTags($cell, { content: _content_resume("a1", () => {
				const $scope2_reason = _scope_reason(), $wg__n = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", n, $wg__n)}</em>`);
				_write_if($scope2_reason, 0) && _scope($scope2_id, {});
			}, $scope0_id, () => [{ 1: n }]) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	grid_default({ row: $row });
	let $item2;
	forOf([1], (i) => {
		$item2 = attrTags($item2, { content: _content_resume("a2", () => {
			const $scope3_reason = _scope_reason(), $wg__i = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`${_text_resume($scope3_id, "a", i, $wg__i)}<b>${_text_resume($scope3_id, "b", i, $wg__i)}</b>`);
			_write_if($scope3_reason, 0) && _scope($scope3_id, {});
		}, $scope0_id, () => [{ 2: i }]) });
	});
	last_default({ item: $item2 });
	_scope($scope0_id, { e: items?.[0] });
	_resume_branch($scope0_id);
}, 1);
