// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_suffix = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const fmt = _resume((v) => v + input.suffix, "__tests__/tags/child.marko_0/fmt", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(_text_resume($scope1_id, "#text/0", fmt("x"), $wg__input_suffix));
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_suffix: input.suffix,
		fmt
	}, "__tests__/tags/child.marko", 0, {
		input_suffix: ["input.suffix"],
		fmt: "1:8"
	});
});

// tags/mid.marko
var mid_default = _template("__tests__/tags/mid.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let s = "!";
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	child_default({
		suffix: s,
		show: input.show
	});
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/mid.marko_0");
	_scope($scope0_id, {
		s,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/mid.marko", 0, { s: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	mid_default({ show });
	_html(`<button class=show>show</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
