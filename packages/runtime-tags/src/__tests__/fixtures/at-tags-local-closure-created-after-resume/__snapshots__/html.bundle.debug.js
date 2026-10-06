// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=open>open</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_for_of(input.item, (item) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
				_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/list.marko", "4:4");
			}, 0, $scope1_id, "#text/0", $wg__input_item, $wg__input_item);
			_scope($scope1_id, {}, "__tests__/tags/list.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/list.marko", 0, { input_item: ["input.item"] });
});

// tags/grid-row.marko
var grid_row_default = _template("__tests__/tags/grid-row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row_cell = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button${_attr("id", `toggle-${input.index}`)}>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_for_of(input.row.cell, (cell) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", cell.content, {}, 0, 0, $wg__input_row_cell);
				_write_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/grid-row.marko", "4:4");
			}, 0, $scope1_id, "#text/0", $wg__input_row_cell, $wg__input_row_cell);
			_scope($scope1_id, {}, "__tests__/tags/grid-row.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/grid-row.marko_0");
	_scope($scope0_id, {
		input_row_cell: input.row?.cell,
		open
	}, "__tests__/tags/grid-row.marko", 0, {
		input_row_cell: ["input.row.cell"],
		open: "1:6"
	});
});

// tags/grid.marko
var grid_default = _template("__tests__/tags/grid.marko", (input) => {
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
		$wi__input_row && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/grid.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_row, $wg__input_row);
	$wi__input_row && _scope($scope0_id, {}, "__tests__/tags/grid.marko", 0);
});

// tags/last.marko
var last_default = _template("__tests__/tags/last.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let saved = null;
	_html(`<button id=save-last>save</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (saved) {
			const $scope1_id = _scope_id();
			_html("L");
			_dynamic_tag($scope1_id, "#text/0", saved.content, {});
			_scope($scope1_id, {}, "__tests__/tags/last.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/last.marko_0");
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/last.marko", 0, { input_item: ["input.item"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ text: "a" }, { text: "b" }];
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $wg__item_text = _write_guard($scope1_reason, 0), $wg__item = _write_guard($scope1_reason, 1);
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", item.text, $wg__item_text)}:${_text_resume($scope1_id, "#text/1", item === items[0], $wg__item * 2)}</span>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:6");
			$wg__item_text || $wg__item || _resume_branch($scope1_id);
		}, $scope0_id, () => [{
			item_text: item?.text,
			item
		}]) });
	});
	list_default({ item: $item });
	let $row;
	forOf(["a", "b"], (row) => {
		let $cell;
		forOf([1], (n) => {
			$cell = attrTags($cell, { content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason(), $wg__n = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", n, $wg__n)}</em>`);
				_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "13:10");
			}, $scope0_id, () => [{ n }]) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	grid_default({ row: $row });
	let $item2;
	forOf([1], (i) => {
		$item2 = attrTags($item2, { content: _content_resume("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason(), $wg__i = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_html(`${_text_resume($scope3_id, "#text/0", i, $wg__i)}<b>${_text_resume($scope3_id, "#text/1", i, $wg__i)}</b>`);
			_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "21:6");
		}, $scope0_id, () => [{ i }]) });
	});
	last_default({ item: $item2 });
	_scope($scope0_id, { items_0: items?.[0] }, "__tests__/template.marko", 0, { items_0: ["items[0]", "2:6"] });
	_resume_branch($scope0_id);
}, 1);
