// tags/outer.marko
var outer_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", f(input.label))}</p><div>${_html_resume($scope0_id, "c", f(input.label))}</div><i${_attr("title", f(input.label))}${_attr_class(f(input.label))}${_attr_style({ color: f(input.label).length > 3 ? "red" : "blue" })}></i>${_el_resume($scope0_id, "d")}<section><!--${_escape_comment(f(input.label)) || " "}-->${_el_resume($scope0_id, "e")}</section>`);
	const $show = f(input.label) !== "w-c";
	_show_start($show, 0);
	_html("<em>shown</em>");
	_show_end($scope0_id, "g", $show, 1, 0, 0, 1);
	_html(`<title>${_escape(f(input.label))}</title>${_el_resume($scope0_id, "h")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		l: input.label,
		m: _write_if($scope0_reason, 0) && f
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "a0");
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
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		e: input.label,
		f: wrap
	});
}, 1);
