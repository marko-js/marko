// tags/icon.marko
var icon_default = _template("__tests__/tags/icon.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<svg viewBox="0 0 1 1"><title>${_escape(input.name)}</title>${_el_resume($scope0_id, "#title/0", $wg__input_name)}</svg>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/icon.marko", 0);
});

// tags/navx.marko
var navx_default = _template("__tests__/tags/navx.marko", (input) => {
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
		_html(`<span>${_text_resume($scope1_id, "#text/2", item.label, $wg__input_items)}</span></a>${_el_resume($scope1_id, "#a/0", $wg__input_items__OR__input_path)}`);
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			item_href: _write_if($scope0_reason, 3) && item?.href,
			_: _scope_with_id($scope0_id),
			"#childScope/1": $wi__input_items && _existing_scope($childScope)
		}, "__tests__/tags/navx.marko", "2:4", { item_href: ["item.href", "2:8"] });
	}, 0, $scope0_id, "#nav/0", $wg__input_items__OR__input_path, $wg__input_items, $wg__input_items, "</nav>", 1);
	_html("<main>");
	_if(() => {
		if (input.page) {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.page, $wg__input_page)}</p>`);
			_write_if($scope0_reason, 4) && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/navx.marko", "10:8");
			return 0;
		}
	}, $scope0_id, "#main/1", $wg__input_page, $wg__input_page, $wg__input_page, "</main>", 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_path: $wi__input_items && input.path }, "__tests__/tags/navx.marko", 0, { input_path: ["input.path"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1));
	_html(`<button class=p>p</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_items: $wi__input_show && input.items,
		input_page: $wi__input_show && input.page,
		path
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_page: ["input.page"],
		path: "1:6"
	});
}, 1);
