// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=open>open</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_for_of(input.item, (item) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", item.content, {}, 0, 0, $sg__input_item);
				_serialize_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/list.marko", "4:4");
			}, 0, $scope1_id, "#text/0", $sg__input_item, $sg__input_item, $sg__input_item);
			_scope($scope1_id, {}, "__tests__/tags/list.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_scope($scope0_id, { input_item: input.item }, "__tests__/tags/list.marko", 0, { input_item: ["input.item"] });
});

// tags/grid-row.marko
var grid_row_default = _template("__tests__/tags/grid-row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row_cell = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button${_attr("id", `toggle-${input.index}`)}>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_for_of(input.row.cell, (cell) => {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", cell.content, {}, 0, 0, $sg__input_row_cell);
				_serialize_if($scope0_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/grid-row.marko", "4:4");
			}, 0, $scope1_id, "#text/0", $sg__input_row_cell, $sg__input_row_cell, $sg__input_row_cell);
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
		$si__input_row && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/grid.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $sg__input_row, $sg__input_row, $sg__input_row);
	$si__input_row && _scope($scope0_id, {}, "__tests__/tags/grid.marko", 0);
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
	const $fail__closures = new Set();
	let items = [{ text: "a" }, { text: "b" }];
	let $item;
	forOf(items, (item) => {
		$item = attrTags($item, { content: _content_resume("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(item.text)}:${_escape(item === items[0])}</span>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:6");
			_resume_branch($scope1_id);
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
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_escape(n)}</em>`);
			}, $scope0_id, () => [{ n }]) });
		});
		$row = attrTags($row, { cell: $cell });
	});
	grid_default({ row: $row });
	let $item2;
	forOf([1], (i) => {
		$item2 = attrTags($item2, { content: _content_resume("__tests__/template.marko_3*content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`${_escape(i)}<b>${_escape(i)}</b>`);
		}, $scope0_id, () => [{ i }]) });
	});
	last_default({ item: $item2 });
	let fail = false;
	_html(`<button id=fail>fail</button>${_el_resume($scope0_id, "#button/3")}<div>`);
	let $catch;
	forOf(["static"], (label) => {
		$catch = attrTags($catch, { content: _content_resume("__tests__/template.marko_5*content", (err) => {
			const $scope5_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope5_reason, 0);
			const $scope5_id = _scope_id();
			_html(`caught ${_escape(label)}: ${_text_resume($scope5_id, "#text/1", err.message, $sg__err_message * 2)}`);
			_serialize_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "30:8");
		}, $scope0_id, () => [{ label }]) });
	});
	_try($scope0_id, "#text/4", _content_resume("__tests__/template.marko_4*content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(_text_resume($scope4_id, "#text/0", (() => {
			if (fail) throw new Error("click");
			return "ok";
		})()));
		_subscribe($fail__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "28:4"), "__tests__/template.marko_4_fail#7/subscribe");
	}, $scope0_id), { catch: $catch }, 0);
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items_0: items?.[0],
		"ClosureScopes:fail": $fail__closures
	}, "__tests__/template.marko", 0, { items_0: ["items[0]", "2:6"] });
}, 1);
