// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<section`);
	_attrs_content(f(input.label), "b", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "b")}<i`);
	_attrs_content({ title: f(input.label).title }, "c", $scope0_id, "i");
	_html(`</i>${_el_resume($scope0_id, "c")}<p${_attrs({ title: f(input.label).title }, "d", $scope0_id, "p")}>body</p>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		h: input.label,
		i: _write_if($scope0_reason, 0) && f
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<b>body</b>");
	}, $scope0_id) };
	const wrap = _resume((v) => ({
		title: "w-" + v,
		content: Body.content
	}), "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, {
		e: $wi__input_show && input.label,
		g: Body?.content,
		h: $wi__input_show && wrap
	});
}, 1);
