// tags/reveal.marko
var reveal_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// tags/list.marko
var list_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 6), $wg__input_selected = _write_guard($scope0_reason, 8), $wi__input_color = _write_if($scope0_reason, 6), $wi__input_color__OR__input_show = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 9), $wg__input_rows = _write_guard($scope0_reason, 5), $wg__input_items = _write_guard($scope0_reason, 7), $wg__input_colors = _write_guard($scope0_reason, 10);
	const $scope0_id = _scope_id();
	const $input_color__closures = /* @__PURE__ */ new Set();
	const Box = { content: _content("a5", ({ color }) => {
		const $scope5_id = _scope_id();
		const $scope5_reason = _scope_reason(), $wg__color = _write_guard($scope5_reason, 0);
		_html(`${_style_html(`--M_a0:${_escape_style_value(color)};`)}${_el_resume($scope5_id, "a", $wg__color)}<div class=box></div>`);
		_write_if($scope5_reason, 0) && _scope($scope5_id, {});
	}, $scope0_id) };
	_for_of(input.rows, () => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--M_a1:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "a", $wg__input_color)}<div class=row></div>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: $wi__input_color && _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_rows);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`${_style_html(`--M_a2:${_escape_style_value(input.selected === item.id ? "red" : "blue")};`)}${_el_resume($scope2_id, "a", $wg__input_selected)}<div class=selected></div>`);
		_write_if($scope0_reason, 3) && _scope($scope2_id, {
			M: _write_if($scope0_reason, 8) && item?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "b", _write_guard($scope0_reason, 3), $wg__input_items);
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason($wg__input_color << 1);
			const $childScope = _peek_scope_id();
			Box.content({ color: input.color });
			$wi__input_color__OR__input_show && _scope($scope3_id, {
				_: $wi__input_color && _scope_with_id($scope0_id),
				a: $wi__input_color && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", _write_guard($scope0_reason, 2), $wg__input_show);
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope2 = _peek_scope_id();
	reveal_default({
		show: input.show,
		content: _content_resume("a7", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html(`${_style_html(`--M_a3:${_escape_style_value(input.color)};`)}${_el_resume($scope4_id, "a", $wg__input_color)}<div class=content></div>`);
			$wi__input_color__OR__input_show && _subscribe($wi__input_color && $input_color__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }), "a6", $wg__input_color);
			$wg__input_color || $wi__input_color__OR__input_show && _resume_branch($scope4_id);
		}, $scope0_id)
	});
	_set_scope_reason($wg__input_colors << 1);
	let $item;
	forOf(input.colors, (color) => {
		$item = attrTags($item, { content: _content("a8", () => {
			const $scope6_reason = _scope_reason(), $wg__color2 = _write_guard($scope6_reason, 0);
			const $scope6_id = _scope_id();
			_html(`${_style_html(`--M_a4:${_escape_style_value(color)};`)}${_el_resume($scope6_id, "a", $wg__color2)}<div class=item></div>`);
			_write_if($scope6_reason, 0) && _scope($scope6_id, {});
		}, $scope0_id) });
	});
	const $childScope3 = _peek_scope_id();
	list_default({ item: $item });
	_write_if($scope0_reason, 4) && _scope($scope0_id, {
		i: _write_if($scope0_reason, 1) && input.color,
		k: _write_if($scope0_reason, 7) && input.selected,
		n: $wi__input_color && $input_color__closures,
		d: _write_if($scope0_reason, 9) && _existing_scope($childScope2),
		e: _write_if($scope0_reason, 10) && _existing_scope($childScope3)
	});
}, 1);
