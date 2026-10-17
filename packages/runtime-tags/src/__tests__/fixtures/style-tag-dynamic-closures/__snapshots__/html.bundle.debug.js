// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_0); }\n  ";

// v:template.marko.1.css
var v_template_marko_1_default = "\n    .row { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_1); }\n  ";

// v:template.marko.2.css
var v_template_marko_2_default = "\n    .selected { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_2); }\n  ";

// v:template.marko.3.css
var v_template_marko_3_default = "\n    .content { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_3); }\n  ";

// tags/reveal.marko
var reveal_default = _template("__tests__/tags/reveal.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/reveal.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_content: input.content }, "__tests__/tags/reveal.marko", 0, { input_content: ["input.content"] });
});

// v:template.marko.4.css
var v_template_marko_4_default = "\n        .item { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_4); }\n      ";

// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.item, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {}, 0, 0, $wg__input_item);
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_item, $wg__input_item);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 6), $wg__input_selected = _write_guard($scope0_reason, 8), $wi__input_color = _write_if($scope0_reason, 6), $wi__input_color__OR__input_show = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 9), $wg__input_rows = _write_guard($scope0_reason, 5), $wg__input_items = _write_guard($scope0_reason, 7), $wg__input_colors = _write_guard($scope0_reason, 10);
	const $scope0_id = _scope_id();
	const $input_color__closures = new Set();
	const Box = { content: _content("__tests__/template.marko_5*content", ({ color }) => {
		const $scope5_id = _scope_id();
		const $scope5_reason = _scope_reason(), $wg__color = _write_guard($scope5_reason, 0);
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_0:${_escape_style_value(color)};`)}${_el_resume($scope5_id, "#style/0", $wg__color)}<div class=box></div>`);
		_write_if($scope5_reason, 0) && _scope($scope5_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_for_of(input.rows, () => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_1:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "#style/0", $wg__input_color)}<div class=row></div>`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: $wi__input_color && _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2");
	}, 0, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_rows);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_2:${_escape_style_value(input.selected === item.id ? "red" : "blue")};`)}${_el_resume($scope2_id, "#style/0", $wg__input_selected)}<div class=selected></div>`);
		_write_if($scope0_reason, 3) && _scope($scope2_id, {
			"#LoopKey": _write_if($scope0_reason, 8) && item?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "15:2", { "#LoopKey": ["item.id", "15:6"] });
	}, "id", $scope0_id, "#text/1", _write_guard($scope0_reason, 3), $wg__input_items);
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason($wg__input_color << 1);
			const $childScope = _peek_scope_id();
			Box.content({ color: input.color });
			$wi__input_color__OR__input_show && _scope($scope3_id, {
				_: $wi__input_color && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_color && _existing_scope($childScope)
			}, "__tests__/template.marko", "22:2");
			return 0;
		}
	}, $scope0_id, "#text/2", _write_guard($scope0_reason, 2), $wg__input_show);
	_set_scope_reason($wg__input_show << 1 | $wg__input_show << 3);
	const $childScope2 = _peek_scope_id();
	reveal_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_4*content", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_3:${_escape_style_value(input.color)};`)}${_el_resume($scope4_id, "#style/0", $wg__input_color)}<div class=content></div>`);
			$wi__input_color__OR__input_show && _subscribe($wi__input_color && $input_color__closures, _scope($scope4_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "26:2"), "__tests__/template.marko_4_input_color#0:8/subscribe", $wg__input_color);
			$wg__input_color || $wi__input_color__OR__input_show && _resume_branch($scope4_id);
		}, $scope0_id)
	});
	_set_scope_reason($wg__input_colors << 1);
	let $item;
	forOf(input.colors, (color) => {
		$item = attrTags($item, { content: _content("__tests__/template.marko_6*content", () => {
			const $scope6_reason = _scope_reason(), $wg__color2 = _write_guard($scope6_reason, 0);
			const $scope6_id = _scope_id();
			_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19closures-1btemplate-1amarko_4:${_escape_style_value(color)};`)}${_el_resume($scope6_id, "#style/0", $wg__color2)}<div class=item></div>`);
			_write_if($scope6_reason, 0) && _scope($scope6_id, {}, "__tests__/template.marko", "35:6");
		}, $scope0_id) });
	});
	const $childScope3 = _peek_scope_id();
	list_default({ item: $item });
	_write_if($scope0_reason, 4) && _scope($scope0_id, {
		input_color: _write_if($scope0_reason, 1) && input.color,
		input_selected: _write_if($scope0_reason, 7) && input.selected,
		"ClosureScopes:input_color/13": $wi__input_color && $input_color__closures,
		"#childScope/3": _write_if($scope0_reason, 9) && _existing_scope($childScope2),
		"#childScope/4": _write_if($scope0_reason, 10) && _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, {
		input_color: ["input.color"],
		input_selected: ["input.selected"]
	});
}, 1);
