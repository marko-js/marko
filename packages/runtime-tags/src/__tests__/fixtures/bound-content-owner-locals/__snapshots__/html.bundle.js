// tags/host.marko
var host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 6), $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label = _write_if($scope0_reason, 4), $wg__input_wrap__OR__input_items = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let $item;
			forOf(input.items, (entry) => $item = attrTags($item, { content: _content_resume("b1", () => {
				const $scope2_reason = _scope_reason(), $wg__entry_text = _write_guard($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`<i>${_text_mark($scope2_id, "a", entry.text, $wg__entry_text)}:${_text_mark($scope2_id, "b", input.label, $wg__input_label * 2)}</i>`);
				($wi__input_show__OR__input_wrap__OR__input_items__OR__input_label || _write_if($scope2_reason, 0)) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope_with_id($scope1_id) }), "b0", $wg__input_label || $wg__entry_text);
			}, $scope1_id, ($scope) => [
				{ 2: entry?.text },
				{ g: input.label },
				{ _: $scope($scope0_id) }
			]) }));
			_dynamic_tag($scope1_id, "a", input.wrap, { item: $item }, 0, 0, $wg__input_wrap__OR__input_items);
			$wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 3), $wg__input_show);
	$wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.wrap,
		f: _write_if($scope0_reason, 0) && input.items,
		g: _write_if($scope0_reason, 3) && input.label,
		j: $wi__input_label && $input_label__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_items = _write_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($wg__input_show << 1 | $wg__input_show__OR__input_items << 3 | _write_guard($scope0_reason, 3) << 5 | $wg__input_show__OR__input_items << 7 | _write_guard($scope0_reason, 1) << 9 | $wg__input_show << 11 | _write_guard($scope0_reason, 4) << 13);
	const $childScope = _peek_scope_id();
	host_default({
		show: input.show,
		items: input.items,
		label: input.label,
		wrap: attrTag({ content: _content_resume("a1", ({ item }) => {
			const $scope1_reason = _scope_reason(), $wg__item = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			let open = true;
			_html(`<button class=toggle>toggle</button>${_el_mark($scope1_id, "a")}`);
			_if(() => {
				{
					const $scope2_id = _scope_id();
					_for_of(item, (entry) => {
						const $scope3_id = _scope_id();
						_dynamic_tag($scope3_id, "a", entry.content, {}, 0, 0, $wg__item);
						_write_if($scope1_reason, 0) && _scope($scope3_id, {});
					}, 0, $scope2_id, "a", $wg__item, $wg__item);
					_scope($scope2_id, {});
					return 0;
				}
			}, $scope1_id, "b");
			_script($scope1_id, "a0");
			_scope($scope1_id, {
				e: item,
				f: open
			});
		}, $scope0_id) })
	});
	_html("</main>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
