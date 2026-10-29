// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "#button/0")}<section`);
	_attrs_content(f(input.label), "#section/1", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "#section/1")}<i`);
	_attrs_content({ title: f(input.label).title }, "#i/2", $scope0_id, "i");
	_html(`</i>${_el_resume($scope0_id, "#i/2")}<p${_attrs({ title: f(input.label).title }, "#p/3", $scope0_id, "p")}>body</p>${_el_resume($scope0_id, "#p/3")}`);
	_script($scope0_id, "__tests__/tags/outer.marko_0_input_label#7_f#8");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		f: _write_if($scope0_reason, 0) && f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6",
		"EventAttributes:#section/1": ["...f(input.label)", "3:13"],
		"EventAttributes:#i/2": ["...{ title: f(input.label).title }", "4:7"],
		"EventAttributes:#p/3": ["...{ title: f(input.label).title }", "5:7"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<b>body</b>");
	}, $scope0_id) };
	const wrap = _resume((v) => ({
		title: "w-" + v,
		content: Body.content
	}), "__tests__/template.marko_0/wrap", $scope0_id);
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
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		Body_content: Body?.content,
		wrap: $wi__input_show && wrap
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"],
		wrap: "2:8"
	});
}, 1);
