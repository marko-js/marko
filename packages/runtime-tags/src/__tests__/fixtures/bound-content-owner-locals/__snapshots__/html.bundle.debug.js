// tags/host.marko
var host_default = _template("__tests__/tags/host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 6), $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label = _write_if($scope0_reason, 4), $wg__input_wrap__OR__input_items = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $wi__input_label = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let $item;
			forOf(input.items, (entry) => {
				$item = attrTags($item, { content: _content_resume("__tests__/tags/host.marko_2*content", () => {
					const $scope2_reason = _scope_reason(), $wg__entry_text = _write_guard($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_html(`<i>${_text_mark($scope2_id, "#text/0", entry.text, $wg__entry_text)}:${_text_mark($scope2_id, "#text/1", input.label, $wg__input_label * 2)}</i>`);
					($wi__input_show__OR__input_wrap__OR__input_items__OR__input_label || _write_if($scope2_reason, 0)) && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/tags/host.marko", "4:8"), "__tests__/tags/host.marko_2_input_label#0:6/subscribe", $wg__input_label || $wg__entry_text);
				}, $scope1_id, ($scope) => [
					{ entry_text: entry?.text },
					{ input_label: input.label },
					{ _: $scope($scope0_id) }
				]) });
			});
			_dynamic_tag($scope1_id, "#text/0", input.wrap, { item: $item }, 0, 0, $wg__input_wrap__OR__input_items);
			$wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/host.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 3), $wg__input_show);
	$wi__input_show__OR__input_wrap__OR__input_items__OR__input_label && _scope($scope0_id, {
		input_wrap: _write_if($scope0_reason, 1) && input.wrap,
		input_items: _write_if($scope0_reason, 0) && input.items,
		input_label: _write_if($scope0_reason, 3) && input.label,
		"ClosureScopes:input_label/9": $wi__input_label && $input_label__closures
	}, "__tests__/tags/host.marko", 0, {
		input_wrap: ["input.wrap"],
		input_items: ["input.items"],
		input_label: ["input.label"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_items = _write_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason($wg__input_show << 1 | $wg__input_show__OR__input_items << 3 | _write_guard($scope0_reason, 3) << 5 | $wg__input_show__OR__input_items << 7 | _write_guard($scope0_reason, 1) << 9 | $wg__input_show << 11 | _write_guard($scope0_reason, 4) << 13);
	const $childScope = _peek_scope_id();
	host_default({
		show: input.show,
		items: input.items,
		label: input.label,
		wrap: attrTag({ content: _content_resume("__tests__/template.marko_1*content", ({ item }) => {
			const $scope1_reason = _scope_reason(), $wg__item = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			let open = true;
			_html(`<button class=toggle>toggle</button>${_el_mark($scope1_id, "#button/0")}`);
			_if(() => {
				if (open) {
					const $scope2_id = _scope_id();
					_for_of(item, (entry) => {
						const $scope3_id = _scope_id();
						_dynamic_tag($scope3_id, "#text/0", entry.content, {}, 0, 0, $wg__item);
						_write_if($scope1_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "6:17");
					}, 0, $scope2_id, "#text/0", $wg__item, $wg__item);
					_scope($scope2_id, {}, "__tests__/template.marko", "6:8");
					return 0;
				}
			}, $scope1_id, "#text/1");
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				item,
				open
			}, "__tests__/template.marko", "3:6", {
				item: "3:14",
				open: "4:12"
			});
		}, $scope0_id) })
	});
	_html("</main>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
