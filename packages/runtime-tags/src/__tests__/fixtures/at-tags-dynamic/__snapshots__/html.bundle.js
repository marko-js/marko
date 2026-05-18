// tags/hello/index.marko
var hello_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list_item = _serialize_guard($scope0_reason, 1), $sg__input_col = _serialize_guard($scope0_reason, 2), $sg__input_list_item__OR__input_col = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.list.item, (item) => {
		const $scope1_id = _scope_id();
		_html(`<div class=item${_attrs_partial(item, { class: 1 }, "a", $scope1_id, "div")}>`);
		_dynamic_tag($scope1_id, "b", item.content, {}, 0, 0, $sg__input_list_item);
		_html(`</div>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		writeScope($scope1_id, { d: item });
	}, 0, $scope0_id, "a", $sg__input_list_item, $sg__input_list_item, $sg__input_list_item__OR__input_col, 0, 1);
	_for_of(input.col, (col) => {
		const $scope2_id = _scope_id();
		_html("<div class=col");
		_attrs_partial_content(col, { class: 1 }, "a", $scope2_id, "div");
		_html(`</div>${_el_resume($scope2_id, "a")}`);
		_for_of(col.row, (row) => {
			const $scope3_id = _scope_id();
			_html(`<div class=row${_attrs_partial(row, { class: 1 }, "a", $scope3_id, "div")}>`);
			_dynamic_tag($scope3_id, "b", row.content, {}, 0, 0, $sg__input_col);
			_html(`</div>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "b1");
			writeScope($scope3_id, { d: row });
		}, 0, $scope2_id, "b", $sg__input_col, $sg__input_col, $sg__input_col, 0, 1);
		_script($scope2_id, "b2");
		writeScope($scope2_id, { d: col });
	}, 0, $scope0_id, "b", $sg__input_col, $sg__input_col, $sg__input_list_item__OR__input_col);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $col;
	let $item;
	forOf([
		"red",
		"blue",
		"green"
	], (color) => {
		if (color === "red") $item = attrTags($item, {
			style: { color },
			content: _content_resume("a0", () => {
				_scope_reason();
				_scope_id();
				_html("foo");
			}, $scope0_id)
		});
		else $item = attrTags($item, {
			style: { color },
			content: _content_resume("a1", () => {
				_scope_reason();
				_scope_id();
				_html("bar");
			}, $scope0_id)
		});
	});
	forOf([["a", "b"], ["c", "d"]], (col, i) => {
		let $row;
		forOf(col, (row) => {
			$row = attrTags($row, {
				row,
				content: _content_resume("a2", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`${_escape(row)}${_el_resume($scope3_id, "a")}`);
					writeScope($scope3_id, {});
				}, $scope0_id)
			});
		});
		$col = attrTags($col, {
			x: i,
			row: $row
		});
	});
	$col = attrTags($col, {
		outside: true,
		row: attrTag({
			row: -1,
			content: _content_resume("a3", () => {
				_scope_reason();
				_scope_id();
				_html("Outside");
			}, $scope0_id)
		})
	});
	hello_default({
		list: attrTag({ item: $item }),
		col: $col
	});
}, 1);
