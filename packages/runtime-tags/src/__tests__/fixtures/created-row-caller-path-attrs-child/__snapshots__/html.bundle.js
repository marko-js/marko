// tags/icon.marko
var icon_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<svg viewBox="0 0 1 1"><title>${_escape(input.name)}</title>${_el_resume($scope0_id, "a", $wg__input_name)}</svg>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/navx.marko
var navx_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 2), $wg__input_items__OR__input_path = _write_guard($scope0_reason, 0), $wg__input_page = _write_guard($scope0_reason, 4), $wi__input_items = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<nav>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const active = item.href === input.path;
		_html(`<a class=${active ? "\"link active\"" : "link"}${_attr("href", item.href)}>`);
		_set_scope_reason($wg__input_items << 1);
		const $childScope = _peek_scope_id();
		icon_default({ name: item.icon });
		_html(`<span>${_text_resume($scope1_id, "c", item.label, $wg__input_items)}</span></a>${_el_resume($scope1_id, "a", $wg__input_items__OR__input_path)}`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			f: _write_if($scope0_reason, 3) && item?.href,
			_: _scope_with_id($scope0_id),
			b: $wi__input_items && _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", $wg__input_items__OR__input_path, $wg__input_items, $wg__input_items, "</nav>", 1);
	_html("<main>");
	_if(() => {
		if (input.page) {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", input.page, $wg__input_page)}</p>`);
			_write_if($scope0_reason, 4) && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $wg__input_page, $wg__input_page, $wg__input_page, "</main>", 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { f: $wi__input_items && input.path });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let path = "/a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(130 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 2) << 5 | _write_guard($scope0_reason, 3) << 9));
			const $childScope = _peek_scope_id();
			navx_default({
				items: input.items,
				path,
				page: input.page
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1));
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: $wi__input_show && input.items,
		g: $wi__input_show && input.page,
		h: path
	});
}, 1);
