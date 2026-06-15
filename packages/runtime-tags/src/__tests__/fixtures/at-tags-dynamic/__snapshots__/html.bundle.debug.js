// tags/hello/index.marko
var hello_default = _template("__tests__/tags/hello/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list_item = _serialize_guard($scope0_reason, 1), $sg__input_col = _serialize_guard($scope0_reason, 2), $sg__input_list_item__OR__input_col = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.list.item, (item) => {
		const $scope1_id = _scope_id();
		_html(`<div class=item${_attrs_partial(item, { class: 1 }, "#div/0", $scope1_id, "div")}>`);
		_dynamic_tag($scope1_id, "#text/1", item.content, {}, 0, 0, $sg__input_list_item);
		_html(`</div>${_el_resume($scope1_id, "#div/0")}`);
		_script($scope1_id, "__tests__/tags/hello/index.marko_1_item");
		writeScope($scope1_id, { item }, "__tests__/tags/hello/index.marko", "1:1", { item: "1:5" });
	}, 0, $scope0_id, "#text/0", $sg__input_list_item, $sg__input_list_item, $sg__input_list_item__OR__input_col, 0, 1);
	_for_of(input.col, (col) => {
		const $scope2_id = _scope_id();
		_html("<div class=col");
		_attrs_partial_content(col, { class: 1 }, "#div/0", $scope2_id, "div");
		_html(`</div>${_el_resume($scope2_id, "#div/0")}`);
		_for_of(col.row, (row) => {
			const $scope3_id = _scope_id();
			_html(`<div class=row${_attrs_partial(row, { class: 1 }, "#div/0", $scope3_id, "div")}>`);
			_dynamic_tag($scope3_id, "#text/1", row.content, {}, 0, 0, $sg__input_col);
			_html(`</div>${_el_resume($scope3_id, "#div/0")}`);
			_script($scope3_id, "__tests__/tags/hello/index.marko_3_row");
			writeScope($scope3_id, { row }, "__tests__/tags/hello/index.marko", "7:3", { row: "7:7" });
		}, 0, $scope2_id, "#text/1", $sg__input_col, $sg__input_col, $sg__input_col, 0, 1);
		_script($scope2_id, "__tests__/tags/hello/index.marko_2_col");
		writeScope($scope2_id, { col }, "__tests__/tags/hello/index.marko", "5:1", { col: "5:5" });
	}, 0, $scope0_id, "#text/1", $sg__input_col, $sg__input_col, $sg__input_list_item__OR__input_col);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/hello/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let $col;
	let $item;
	forOf([
		"red",
		"blue",
		"green"
	], (color) => {
		if (color === "red") {
			$item = attrTags($item, {
				style: { color },
				content: _content_resume("__tests__/template.marko_1_content", () => {
					_scope_reason();
					const $scope1_id = _scope_id();
					_html("foo");
				}, $scope0_id)
			});
		} else {
			$item = attrTags($item, {
				style: { color },
				content: _content_resume("__tests__/template.marko_2_content", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html("bar");
				}, $scope0_id)
			});
		}
	});
	forOf([["a", "b"], ["c", "d"]], (col, i) => {
		let $row;
		forOf(col, (row) => {
			$row = attrTags($row, {
				row,
				content: _content_resume("__tests__/template.marko_3_content", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html(`${_escape(row)}${_el_resume($scope3_id, "#text/0")}`);
					writeScope($scope3_id, {}, "__tests__/template.marko", "16:18");
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
			content: _content_resume("__tests__/template.marko_4_content", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html("Outside");
			}, $scope0_id)
		})
	});
	hello_default({
		col: $col,
		list: attrTag({ item: $item })
	});
}, 1);
